import os
import chromadb
from dotenv import load_dotenv
from app.utils.constants import LLM_EMBEDDING
from langchain_google_genai import GoogleGenerativeAIEmbeddings

load_dotenv()

class EmbeddingsGenerator:
  @classmethod
  async def invoke(cls, documents_list):
    llm_embedding = GoogleGenerativeAIEmbeddings(model=LLM_EMBEDDING)

    client = chromadb.CloudClient(
      api_key=os.getenv("CHROMA_API_TOKEN"),
      tenant=os.getenv("CHROMA_TENANT"),
      database=os.getenv("CHROMA_DATABASE"),
    )

    collection = client.get_collection(name=os.getenv("CHROMA_COLLECTION"))
    embeddings = llm_embedding.embed_documents(documents_list)

    ids_formatted = []

    for i in range(len(documents_list)):
      ids_formatted.append(f"{i + 1}")

    return collection.add(
      ids=ids_formatted,
      documents=documents_list,
      embeddings=embeddings
    )
