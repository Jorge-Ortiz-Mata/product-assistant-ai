import os
from dotenv import load_dotenv
from langchain_chroma import Chroma
from app.utils.constants import LLM_EMBEDDING, LOCAL_DB_NAME
from langchain_google_genai import GoogleGenerativeAIEmbeddings

load_dotenv()

class EmbeddingsGenerator:
  @classmethod
  async def invoke(cls, chunks):
    root_directory = os.path.dirname(os.path.abspath(__file__))
    llm_embedding = GoogleGenerativeAIEmbeddings(model=LLM_EMBEDDING)

    return Chroma.from_documents(
      chunks,
      embedding=llm_embedding,
      persist_directory=os.path.join(root_directory, LOCAL_DB_NAME)
    )
  