'use client';

import React, { useState, useRef } from 'react';
import { chatService } from '@/lib/api';
import { Upload, FileText, BarChart2, Loader2, Info, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import * as XLSX from 'xlsx';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// --- Types ---
interface AnalysisResult {
  analysis: string;
  graphData?: any[];
  graphType?: 'bar' | 'line' | 'pie';
  graphTitle?: string;
  dataKeys?: string[];
}

// --- Constants ---
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

const EXAMPLE_STUDENT_DATA = `Nama,Matematika,Fisika,Kimia,Biologi
Budi,85,78,90,88
Siti,92,88,95,90
Agus,70,65,75,72
Dewi,88,90,85,89
Rudi,60,55,65,60`;

const EXAMPLE_SALES_DATA = `Bulan,Martabak Manis,Martabak Telur
Januari,120,90
Februari,135,95
Maret,150,110
April,140,105
Mei,160,120`;

// --- Component ---
export default function DataAnalysisPage() {
  // State
  const [inputText, setInputText] = useState('');
  const [context, setContext] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handlers
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      if (file.name.endsWith('.txt') || file.name.endsWith('.csv')) {
        const text = await file.text();
        setInputText(text);
      } else if (file.name.endsWith('.xlsx') || file.name.endsWith('.xls')) {
        const data = await file.arrayBuffer();
        const workbook = XLSX.read(data);
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const csv = XLSX.utils.sheet_to_csv(sheet);
        setInputText(csv);
      } else {
        setError('Unsupported file format. Please upload .txt, .csv, .xlsx, or .xls');
      }
    } catch (err) {
      console.error('Error reading file:', err);
      setError('Failed to read file.');
    }
  };

  const handleAnalyze = async () => {
    if (!inputText.trim()) {
      setError('Please enter data or upload a file.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const systemPrompt = `
You are a Data Analysis Assistant for high school students.
Your goal is to analyze the provided data and generate insights.
You MUST return the response in a specific JSON format embedded within a code block, followed by a detailed explanation in Markdown.

FORMAT:
\`\`\`json
{
  "graphType": "bar" | "line" | "pie",
  "graphTitle": "Title of the Graph",
  "dataKeys": ["key1", "key2"], // Keys for the data series (excluding the category key)
  "data": [
    { "name": "Category1", "key1": 10, "key2": 20 },
    { "name": "Category2", "key1": 15, "key2": 25 }
  ]
}
\`\`\`

Analysis in Markdown...
`;

      const userPrompt = `
Data:
${inputText}

Context:
${context}

Please analyze this data. Provide a JSON for the graph and a text analysis.
For the JSON data, ensure the "name" field is used for the X-axis category.
`;

      const response = await chatService.sendMessage({
        prompt: userPrompt,
        system_message: systemPrompt,
      }, 'highschool');

      // Parse Response
      const content = response.response;
      
      // Extract JSON
      const jsonMatch = content.match(/```json\n([\s\S]*?)\n```/);
      let graphData = null;
      let analysisText = content;

      if (jsonMatch) {
        try {
          const jsonStr = jsonMatch[1];
          const parsed = JSON.parse(jsonStr);
          graphData = parsed;
          // Remove the JSON block from the analysis text to avoid duplication
          analysisText = content.replace(jsonMatch[0], '').trim();
        } catch (e) {
          console.error('Failed to parse JSON from AI response', e);
        }
      }

      setResult({
        analysis: analysisText,
        graphData: graphData?.data,
        graphType: graphData?.graphType || 'bar',
        graphTitle: graphData?.graphTitle,
        dataKeys: graphData?.dataKeys || [],
      });

    } catch (err) {
      console.error('Analysis failed:', err);
      setError('Analysis failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Render Graph
  const renderGraph = () => {
    if (!result?.graphData) return null;

    const CommonProps = {
      data: result.graphData,
      margin: { top: 20, right: 30, left: 20, bottom: 5 },
    };

    if (result.graphType === 'pie') {
      return (
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={result.graphData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name}: ${(percent ? percent * 100 : 0).toFixed(0)}%`}
              outerRadius={150}
              fill="#8884d8"
              dataKey={result.dataKeys?.[0] || 'value'}
            >
              {result.graphData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      );
    }

    if (result.graphType === 'line') {
      return (
        <ResponsiveContainer width="100%" height={400}>
          <LineChart {...CommonProps}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            {result.dataKeys?.map((key, index) => (
              <Line
                key={key}
                type="monotone"
                dataKey={key}
                stroke={COLORS[index % COLORS.length]}
                activeDot={{ r: 8 }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      );
    }

    // Default to Bar Chart
    return (
      <ResponsiveContainer width="100%" height={400}>
        <BarChart {...CommonProps}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          {result.dataKeys?.map((key, index) => (
            <Bar key={key} dataKey={key} fill={COLORS[index % COLORS.length]} />
          ))}
        </BarChart>
      </ResponsiveContainer>
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <Link href="/" className="inline-flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Kembali ke Dashboard
      </Link>

      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Simple Data Analysis
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Upload data Anda atau tempel di bawah untuk menghasilkan wawasan dan visualisasi secara instan.
          Berguna untuk menganalisis nilai, penjualan, atau hasil survei.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Input */}
        <div className="lg:col-span-1 space-y-6">
          
          {/* Data Input */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-gray-800 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-500" />
                Input Data
              </h2>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
              >
                <Upload className="w-4 h-4" />
                Upload File
              </button>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileUpload}
                accept=".txt,.csv,.xlsx,.xls"
                className="hidden"
              />
            </div>
            
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Masukkan data Anda di sini..."
              className="w-full h-64 p-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all resize-none font-mono text-sm"
            />

            {/* Example Buttons */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              <button
                onClick={() => setInputText(EXAMPLE_STUDENT_DATA)}
                className="px-3 py-1.5 text-xs bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors whitespace-nowrap"
              >
                Example: Nilai Siswa
              </button>
              <button
                onClick={() => setInputText(EXAMPLE_SALES_DATA)}
                className="px-3 py-1.5 text-xs bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 transition-colors whitespace-nowrap"
              >
                Example: Penjualan
              </button>
            </div>
          </div>

          {/* Context Input */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-4">
            <h2 className="font-semibold text-gray-800 flex items-center gap-2">
              <Info className="w-5 h-5 text-purple-500" />
              Context (Recommended)
            </h2>
            <textarea
              value={context}
              onChange={(e) => setContext(e.target.value)}
              placeholder="Ini adalah data nilai siswa saya pada ujian sistem persamaan linear dua variabel, saya mau fokus untuk menemukan siswa yang kesusahan dalam pembelajaran ini..."
              className="w-full h-32 p-4 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all resize-none text-sm"
            />
          </div>

          {/* Analyze Button */}
          <button
            onClick={handleAnalyze}
            disabled={isLoading || !inputText}
            className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Analyzing...
              </>
            ) : (
              <>
                <BarChart2 className="w-5 h-5" />
                Analyze Data
              </>
            )}
          </button>

          {error && (
            <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm">
              {error}
            </div>
          )}
        </div>

        {/* Right Column: Results */}
        <div className="lg:col-span-2 space-y-6">
          {result ? (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              
              {/* Graph Section */}
              {result.graphData && (
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold mb-6 text-gray-800">
                    {result.graphTitle || 'Data Visualization'}
                  </h3>
                  <div className="w-full overflow-hidden">
                    {renderGraph()}
                  </div>
                </div>
              )}

              {/* Analysis Section */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 prose prose-blue max-w-none">
                <h3 className="text-lg font-semibold mb-4 text-gray-800 not-prose">
                  AI Analysis & Insights
                </h3>
                <div className="text-gray-600 leading-relaxed">
                  <ReactMarkdown 
                    remarkPlugins={[remarkGfm]}
                  >
                    {result.analysis}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          ) : (
            // Empty State
            <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-gray-400 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
              <BarChart2 className="w-16 h-16 mb-4 opacity-20" />
              <p className="text-lg font-medium">Ready to analyze</p>
              <p className="text-sm">Import data to generate insights</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
