# Library for loading the documents
from langchain_community.document_loaders import PyMuPDFLoader
from langchain_community.document_loaders import TextLoader
from langchain_community.document_loaders import CSVLoader

# Library for preprocessing the documents
from langchain_text_splitters import RecursiveCharacterTextSplitter

# Function to load the documents from the uploaded file
def load_documents(file_path):
    if file_path.endswith(".pdf"):
        document_loader = PyMuPDFLoader(file_path)
    elif file_path.endswith(".txt"):
        document_loader = TextLoader(file_path)
    elif file_path.endswith(".csv"):
        document_loader = CSVLoader(file_path)
    else:
        raise ValueError(f"Unsupported file type: {file_path.split('.')[-1]}")
    return document_loader.load()

# Function to chunk the documents into smaller parts
def chunk_documents(raw_documents):
    text_processor = RecursiveCharacterTextSplitter(
        chunk_size=2000,
        chunk_overlap=400,
        add_start_index=True
    )
    return text_processor.split_documents(raw_documents)
