# 🤖 Koding dan Kecerdasan Artificial - AI Education Applications

> **Empowering Indonesian educators and students with accessible AI-powered learning tools**

[![Open Source](https://img.shields.io/badge/Open-Source-blue.svg)](https://github.com/yourusername/your-repo)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Python](https://img.shields.io/badge/Python-3.11+-yellow.svg)](https://www.python.org/)
[![Colab Friendly](https://img.shields.io/badge/Colab-Friendly-orange.svg)](https://colab.research.google.com/)

---

## 🎯 Project Mission

This project provides **ready-to-use AI applications** for the new Indonesian "Koding dan Kecerdasan Artificial" curriculum. All applications run in **Google Colab** (free!), connect to a **centralized backend** (no API keys needed), and are designed to help teachers and students explore AI safely and effectively.

### 🌟 Why This Project?

- **Zero Setup**: Just click and run in Google Colab
- **Cost-Free**: We manage the API costs
- **Educational**: Designed specifically for Indonesian curriculum phases C-F
- **Safe**: Rate-limited, curated prompts, no data collection
- **Open Source**: Modify, learn from, and contribute!

---

## 🚀 Quick Start

1. **Choose an application** from the table below
2. **Click "Open in Colab"** badge
3. **Run all cells** (Runtime → Run all)
4. **Start exploring!** The interface will appear in ~30 seconds

**That's it!** No installation, no API keys, no configuration needed.

---

## 📱 Available Applications

| Application                     | Description                                        | Difficulty   | Phase | Open in Colab                                                                                                                                                                       |
| ------------------------------- | -------------------------------------------------- | ------------ | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🤖**Simple Chatbot**      | Basic Q&A chatbot to learn about AI conversations  | Beginner     | C     | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/yourusername/your-repo/blob/main/app/01_simple_chatbot.ipynb)      |
| 📖**Story Generator**     | Create creative stories with AI                    | Beginner     | C     | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/yourusername/your-repo/blob/main/app/02_story_generator.ipynb)     |
| 💻**Code Explainer**      | Understand programming code with AI explanations   | Intermediate | D-F   | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/yourusername/your-repo/blob/main/app/03_code_explainer.ipynb)      |
| 🧮**Math Tutor**          | Get step-by-step help with math problems           | Intermediate | C-E   | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/yourusername/your-repo/blob/main/app/04_math_tutor.ipynb)          |
| 🌍**Language Translator** | Translate between languages with cultural insights | Beginner     | C-D   | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/yourusername/your-repo/blob/main/app/05_language_translator.ipynb) |
| 📝**Quiz Generator**      | Create custom educational quizzes on any topic     | Intermediate | D-F   | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/yourusername/your-repo/blob/main/app/06_quiz_generator.ipynb)      |

---

## 📂 Repository Structure

```
Koding-dan-Kecerdasan-Artificial/
│
├── 📱 app/                          # Ready-to-use educational applications
│   ├── 01_simple_chatbot.ipynb      # Basic AI chatbot
│   ├── 02_story_generator.ipynb     # Creative story generation
│   ├── 03_code_explainer.ipynb      # Programming code explanations
│   ├── 04_math_tutor.ipynb          # Math problem solving
│   ├── 05_language_translator.ipynb # Language translation
│   └── 06_quiz_generator.ipynb      # Educational quiz creation
│
├── 🔧 backend/                      # FastAPI backend service
│   ├── main.py                      # API endpoints
│   ├── requirements.txt             # Python dependencies
│   ├── Dockerfile                   # Container configuration
│   └── deploy.ps1                   # Deployment script
│
├── 📚 docs/                         # Documentation
│   ├── teacher_guide.md             # Teacher usage guide
│   └── troubleshooting.md           # Common issues & solutions
│
├── 🧪 experiments/                  # Development & testing notebooks
│   ├── chatbot_application.ipynb    # Original prototype
│   ├── notebook_experiments.ipynb   # Various experiments
│   ├── test_api.ipynb              # API testing
│   └── open_source_models.ipynb    # Model comparisons
│
├── 🎨 assets/                       # Media and branding
│
├── 📖 others/                       # Reference materials
│   ├── kka-reference/              # Official curriculum PDFs
│   └── technical/                   # Technical documentation
│
├── 🛠️ utils/                        # Utility scripts
│   ├── preprocess_document.py       # Document processing
│   └── vdb_ingestion.py            # Vector DB utilities
│
└── 📄 Project Files
    ├── README.md                    # This file
    ├── PROJECT_STRUCTURE.md         # Detailed structure guide
    ├── pyproject.toml              # Python project config
    ├── LICENSE                      # MIT License
    └── .gitignore                   # Git ignore rules
```

### Key Folders

- **`/app`**: Production-ready notebooks for students and teachers. Start here!
- **`/backend`**: Centralized FastAPI service that manages AI API calls with rate limiting (⚠️ **Note**: Backend is privately managed and deployed. This folder is for reference only and will be ignored in the public repo)
- **`/docs`**: Comprehensive guides for teachers and troubleshooting
- **`/experiments`**: Development and testing work (not for production use)
- **`/others`**: Official Indonesian curriculum PDFs and technical references

See [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md) for detailed explanations.

---

## 🎓 For Teachers

### Getting Started

New to using these tools? Check out our comprehensive guides:

- 📖 **[Teacher Guide](docs/teacher_guide.md)** - How to use these apps in your classroom
- 🔧 **[Troubleshooting](docs/troubleshooting.md)** - Common issues and solutions

### Curriculum Alignment

These applications are designed to support the official Indonesian AI curriculum:

| **Phase** | **Level**     | **Applications**                                           | **Learning Focus**                            |
| --------------- | ------------------- | ---------------------------------------------------------------- | --------------------------------------------------- |
| C               | Kelas 5-6 SD        | Simple Chatbot, Story Generator, Math Tutor, Language Translator | Basic AI interaction, creativity, problem-solving   |
| D               | Kelas 7-9 SMP       | Math Tutor, Language Translator, Code Explainer, Quiz Generator  | AI as learning tool, critical thinking, programming |
| E               | Kelas 10 SMA/SMK    | Code Explainer, Math Tutor, Quiz Generator                       | Advanced AI understanding, technical depth          |
| F               | Kelas 11-12 SMA/SMK | Code Explainer, Quiz Generator                                   | Professional application, collaboration             |

### Teaching Tips

- ✅ **Do**: Encourage experimentation and critical thinking
- ✅ **Do**: Discuss AI limitations and potential errors
- ✅ **Do**: Use AI as a learning aid, not a replacement for teaching
- ❌ **Don't**: Let students submit AI-generated work as their own
- ❌ **Don't**: Rely solely on AI without verification

---

## 🛠️ How It Works

```
┌─────────────────────┐
│  Google Colab       │  ← Students/Teachers use notebooks (free!)
│  (Free Notebooks)   │
└──────────┬──────────┘
           │ HTTP Request
           ↓
┌─────────────────────┐
│  FastAPI Backend    │  ← Privately managed (Google Cloud Run)
│  (Rate Limited)     │     • Rate limiting: 10 req/min
└──────────┬──────────┘     • API key managed by maintainer
           │ API Call       • No data storage
           ↓
┌─────────────────────┐
│  OpenAI API         │  ← GPT-4o-mini (cheap & effective)
│  (gpt-4o-mini)      │
└─────────────────────┘
```

### Why This Architecture?

- **Teachers/students don't need API keys** (backend is privately managed)
- **Cost-effective** (shared backend, efficient model)
- **Safe** (rate limiting prevents abuse)
- **Simple** (just notebooks, no complex setup)

> **Note**: The backend service runs on Google Cloud Run and is privately managed by the maintainer. The `/backend` folder in this repo is for reference only and will not be included in public releases.

---

## 🔐 Safety & Privacy

### What We Do

- ✅ Rate limiting to prevent abuse
- ✅ No personal data storage
- ✅ Age-appropriate content filtering
- ✅ Open source for transparency

### What We Don't Do

- ❌ We don't store your conversations
- ❌ We don't collect personal information
- ❌ We don't train models on your data
- ❌ We don't share data with third parties

### Usage Guidelines

- **Fair Use**: 10 requests per minute per IP
- **Appropriate Content**: Educational use only
- **No Personal Info**: Don't input sensitive data
- **Verify Outputs**: Always check AI responses for accuracy

---

## 💡 Examples & Use Cases

### Example 1: Story Generator in Elementary Class

**Teacher's Goal**: Teach creative writing while introducing AI

**How to Use**:

1. Demonstrate the Story Generator as a class
2. Discuss what makes a good story prompt
3. Students suggest characters and settings
4. Generate story together and discuss the output
5. Students write their own continuation of the story

**Learning Outcomes**: Creativity, prompt engineering, AI understanding

### Example 2: Math Tutor for Homework Help

**Student's Goal**: Understand how to solve algebra problems

**How to Use**:

1. Try solving the problem independently first
2. Input the problem into Math Tutor
3. Compare own method with AI's step-by-step solution
4. Identify where understanding broke down
5. Practice similar problems

**Learning Outcomes**: Problem-solving, self-directed learning, verification

### Example 3: Code Explainer for Programming Class

**Teacher's Goal**: Help students understand recursion

**How to Use**:

1. Show a recursive function example
2. Ask students to predict what it does
3. Use Code Explainer to break down the logic
4. Discuss how AI explanation compares to textbook
5. Modify code and re-explain to reinforce learning

**Learning Outcomes**: Code reading, algorithmic thinking, AI as tool

---

## 🤝 Contributing

We welcome contributions from educators, students, and developers!

### How to Contribute

1. **Share Feedback**: Open an issue with suggestions
2. **Add Applications**: Create new educational notebooks
3. **Improve Documentation**: Help make guides clearer
4. **Translate**: Help translate to other languages
5. **Report Bugs**: Let us know what's not working

### Development Setup

```bash
# Clone repository
git clone https://github.com/yourusername/your-repo.git
cd your-repo

# Test notebooks locally
jupyter notebook app/
```

> **Note**: The backend is privately managed by the maintainer and deployed on Google Cloud Run. You can use the existing backend endpoint for development, or set up your own backend if you need to modify the API behavior.

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

---

## 🌐 Technical Details

### Tech Stack

- **Frontend**: Google Colab + Gradio
- **Backend**: FastAPI + Google Cloud Run
- **AI Model**: OpenAI GPT-4o-mini
- **Language**: Python 3.11+
- **Dependencies**: See `pyproject.toml`

### API Endpoints

```
GET  /                    # Status and available endpoints
GET  /health             # Health check
POST /chat               # General chat (configurable)
POST /chat/elementary    # Elementary-optimized responses
POST /chat/middle        # Middle school-optimized responses  
POST /chat/highschool    # High school-optimized responses
```

### Rate Limits

- **10 requests per minute** per IP address
- Designed for individual use or small classroom demos
- Contact us for classroom bulk access

### Backend Details

The backend is privately managed and deployed on Google Cloud Run by the maintainer. For backend documentation including API usage, endpoints, and integration details, contact the maintainer.

If you need to deploy your own backend instance:

- Backend code is provided for reference (not included in public releases)
- See maintainer for setup instructions
- Requires your own OpenAI API key and Google Cloud account

---

## 📚 Reference Materials

This project is based on official curriculum documents available in [`others/kka-reference/`](others/kka-reference/):

- BUKU AI SMA/SMK Kelas 10-12 (Semester 1 & 2)
- Buku Putih Peta Jalan KA Nasional
- Konsep Pedoman Etika
- Naskah Akademik Pembelajaran KKA

---

## 📊 Project Status

- ✅ **Backend**: Ready for deployment on Cloud Run
- ✅ **Applications**: 6 core applications complete
- ✅ **Documentation**: Teacher guide and troubleshooting ready
- 🔄 **In Progress**: Testing and refinement
- 📝 **Planned**: Video tutorials, additional applications

---

## 📞 Support & Contact

### Need Help?

- 📖 **Documentation**: Start with [Teacher Guide](docs/teacher_guide.md)
- 🔧 **Troubleshooting**: Check [Troubleshooting Guide](docs/troubleshooting.md)
- 💬 **Issues**: [Create an issue on GitHub](https://github.com/yourusername/your-repo/issues)
- 📧 **Email**: your-email@example.com (for sensitive inquiries)

### For Educators

If you're using this in your school and need:

- Higher rate limits for large classes
- Custom applications for your curriculum
- Training or workshop support

Please reach out - we're here to help!

---

## 📜 License

This project is licensed under the MIT License - see [LICENSE](LICENSE) file for details.

### Attribution

If you use this project, please provide attribution:

```
AI Education Applications for Indonesian Curriculum
https://github.com/yourusername/your-repo
```

---

## 🙏 Acknowledgments

- **Indonesian Ministry of Education** for the KKA curriculum
- **OpenAI** for accessible AI models
- **Google Colab** for free computing resources
- **Gradio** for easy-to-use interfaces
- **All contributing teachers and students** making this better

---

## 🔮 Future Plans

- [ ] Video tutorials for each application
- [ ] More applications (image generation, data analysis)
- [ ] Offline mode for areas with limited internet
- [ ] Mobile app version
- [ ] Multi-language support (regional languages)
- [ ] Student progress tracking (optional, privacy-preserving)

---

## ⭐ Star This Repo

If you find this project useful, please give it a star! It helps others discover these educational tools.

---

<div align="center">

**Made with ❤️ for Indonesian Education**

[⬆ Back to Top](#-koding-dan-kecerdasan-artificial---ai-education-applications)

</div>
