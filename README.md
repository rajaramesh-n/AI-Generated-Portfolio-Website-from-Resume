# AI-Generated-Portfolio-Website-from-Resume
Creating portfolio website based on user Resume

1 . An end-to-end AI-powered application that converts a resume (PDF or DOCX) into a professional, responsive portfolio website automatically.

2. This project demonstrates how LangChain and Large Language Models (LLMs) can be used to build real-world automation pipelines — from document parsing to frontend code generation.

 **Project Overview :**

1. Creating a personal portfolio website usually requires:

2. Frontend development skills (HTML, CSS, JavaScript)

3. Design sense

4. Time to manually structure resume details

This project solves that problem by allowing users to upload a resume and instantly receive a fully generated portfolio website with production-ready code.

**Key Features :**

1. Upload resume in PDF or DOCX format

2. AI-powered resume understanding

3. Automatic generation of:

4. index.html

5. style.css

6. script.js

 7. One-click ZIP download

 8. Clean and simple Streamlit UI

 9. Fully automated end-to-end workflow

**How It Works (Step-by-Step) :**

1 . User uploads a resume (PDF or DOCX)

2. Resume content is extracted using document parsers

3 . LLM #1 analyzes the resume and creates a structured website specification

4 . LLM #2 generates complete frontend code (HTML, CSS, JS)

5. Files are bundled into a ZIP archive

6. User downloads the ready-to-deploy portfolio website

**Tech Stack** :

**Layer**	                     **Technology**
UI	                            Streamlit
Language	                      Python
LLM Framework	                  LangChain
AI Model	                      Google Gemini
Resume Parsing	                PyPDF2, python-docx
Packaging	                      zipfile

 **Project Structure** :
portfolio-generator/

portfolio.py        # Main Streamlit application
index.html          # Generated HTML file
style.css           # Generated CSS file
script.js           # Generated JavaScript file
portfolio_website.zip
.env                # API key configuration
README.md

 **Installation & Setup :**
1 Clone the Repository
git clone https://github.com/your-username/ai-portfolio-generator.git
cd ai-portfolio-generator

2 Create Virtual Environment (Recommended)
python -m venv venv
venv\Scripts\activate  # Windows
# source venv/bin/activate  # macOS/Linux

3 Install Dependencies
pip install -r requirements.txt

4 Configure Environment Variables

Create a .env file:

GEMINI=your_google_gemini_api_key

5 Run the Application
