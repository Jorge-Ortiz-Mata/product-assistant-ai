import os
from functools import cache
from langchain_chroma import Chroma
from app.utils.constants import LOCAL_DB_NAME, LLM_EMBEDDING, BM25_K
from langchain_google_genai import GoogleGenerativeAIEmbeddings
from langchain_community.retrievers import BM25Retriever

class CustomBM25Retriever:
  @classmethod
  @cache
  def invoke(cls):
    data_stored = cls.data_stored()
    bm25_retriever = BM25Retriever.from_texts(texts=data_stored["documents"], metadatas=data_stored["metadatas"])
    bm25_retriever.k = BM25_K
    return bm25_retriever
  
  @classmethod
  @cache
  def data_stored(cls):
    vectorstore = cls.vectorstore()
    return vectorstore.get()
  
  @classmethod
  @cache
  def vectorstore(cls):
    root_directory = os.path.dirname(os.path.abspath(__file__))

    return Chroma(
      embedding_function=GoogleGenerativeAIEmbeddings(model=LLM_EMBEDDING),
      persist_directory=os.path.join(root_directory, LOCAL_DB_NAME)
    )