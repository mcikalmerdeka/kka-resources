from langchain_chroma import Chroma
from langchain_openai import OpenAIEmbeddings
import os
from pathlib import Path
from dotenv import load_dotenv
load_dotenv()

# Library for preprocessing the documents
from preprocess_document import load_documents, chunk_documents

# Initialize embedding model (using OpenAI's latest model)
EMBEDDING_MODEL = OpenAIEmbeddings(
    api_key=os.getenv("OPENAI_API_KEY"),
    model="text-embedding-3-large"
)

# Create a new chromadb client
DOCUMENT_VECTOR_DB = Chroma(
    persist_directory="./chroma_db",
    embedding_function=EMBEDDING_MODEL,
    collection_name="knowledge_base"
)

# Check if document already exists in vector store
def document_already_exists(file_name):
    """Check if document already exists in vector store"""
    try:
        existing_docs = DOCUMENT_VECTOR_DB.get()
        if existing_docs and 'metadatas' in existing_docs:
            existing_files = [doc.get('source', '') for doc in existing_docs['metadatas'] if doc]
            return any(file_name in file_path for file_path in existing_files)
    except:
        pass
    return False

# Ingest the documents to the vector store
def ingest_documents(file_path):
    # Extract filename from path for checking
    file_name = Path(file_path).name
    
    # Check if document already exists
    if document_already_exists(file_name):
        print(f"Document '{file_name}' already exists in vector store. Skipping ingestion.")
        return False
    
    print(f"Ingesting new document: {file_name}")
    
    # Step 1: Load the documents
    try:
        documents = load_documents(file_path)
        print(f"Successfully loaded {len(documents)} documents from '{file_name}'")
    except Exception as e:
        print(f"Error loading documents from '{file_name}': {e}")
        return False

    # Step 2: Chunk the documents
    try:
        document_chunks = chunk_documents(documents)
        print(f"Successfully chunked {len(documents)} documents into {len(document_chunks)} chunks")
    except Exception as e:
        print(f"Error chunking documents from '{file_name}': {e}")
        return False

    # Step 3: Add the documents to the vector store
    try:
        DOCUMENT_VECTOR_DB.add_documents(document_chunks)
        print(f"Successfully added {len(document_chunks)} chunks to the vector store")
    except Exception as e:
        print(f"Error adding documents to the vector store from '{file_name}': {e}")
        return False

    print(f"Successfully ingested {len(document_chunks)} chunks from '{file_name}'")
    return True

# Main function to ingest the documents
if __name__ == "__main__":
    file_path = "reference/insert_file_here.pdf"
    ingest_documents(file_path)
