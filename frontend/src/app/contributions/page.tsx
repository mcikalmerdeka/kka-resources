"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Users,
  Code,
  ExternalLink,
  Github,
  Lightbulb,
} from "lucide-react";

export default function ContributionsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/"
          className="inline-flex items-center text-gray-600 hover:text-blue-600 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Kembali ke Dashboard
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Contribute to KKA Laboratory
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join us in building the future of AI education. Whether you're a
            teacher, student, or developer, your contribution matters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* For Teachers/Students */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-8">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                For Teachers & Students
              </h2>
              <p className="text-gray-600 mb-6">
                Have an idea for a new AI tool or learning resource? We'd love
                to hear from you!
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center font-semibold text-blue-600">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Submit your idea
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Fill out our contribution form to share your concept.
                    </p>
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSdVNuw-BfmtEdPzyd9BDeTeM5AYDcPKxqVmnFguoJYxB-U3rA/viewform?usp=sharing&ouid=106340406013856519623"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
                    >
                      Fill Form <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center font-semibold text-blue-600">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Test your idea
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Prototype your idea using these tools:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <a
                        href="https://www.canva.com/ai/code"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-xs font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                      >
                        Canva AI Code <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                      <a
                        href="https://aistudio.google.com/app/prompts/new_chat?model=gemini-3-pro-preview"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-xs font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                      >
                        Gemini 3.0 Pro <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* For Developers */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-8">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <Code className="w-6 h-6 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                For Developers
              </h2>
              <p className="text-gray-600 mb-6">
                Ready to code? Help us build and improve the platform directly.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center font-semibold text-purple-600">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Clone the repository
                    </h3>
                    <div className="bg-gray-900 rounded-lg p-3 mt-2 group relative">
                      <code className="text-xs text-gray-300 font-mono break-all">
                        git clone https://github.com/mcikalmerdeka/kka-resources
                      </code>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center font-semibold text-purple-600">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Choose your contribution
                    </h3>
                    <p className="text-sm text-gray-600">
                      Decide if you want to work on{" "}
                      <span className="font-medium text-gray-900">
                        AI Tools
                      </span>{" "}
                      or{" "}
                      <span className="font-medium text-gray-900">
                        AI Basic Theory
                      </span>
                      .
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center font-semibold text-purple-600">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Implement & PR
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Add your changes in{" "}
                      <code className="text-xs bg-gray-100 px-1 py-0.5 rounded">
                        frontend/src/app/
                      </code>{" "}
                      and submit a Pull Request.
                    </p>
                    <a
                      href="https://github.com/mcikalmerdeka/kka-resources"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-purple-600 hover:text-purple-700"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      View Repository
                    </a>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-gray-500 mt-6 pt-4 border-t border-gray-100">
                or you can contribute idea description in the <a href="https://github.com/mcikalmerdeka/kka-resources/issues" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 font-medium">issue section</a> of the repo
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
