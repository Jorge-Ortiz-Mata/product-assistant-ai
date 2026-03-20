import os
import chromadb
from functools import cache
from langchain_chroma import Chroma
from app.utils.constants import LLM_EMBEDDING, BM25_K
from langchain_google_genai import GoogleGenerativeAIEmbeddings
from langchain_community.retrievers import BM25Retriever

class CustomBM25Retriever:
  @classmethod
  @cache
  def invoke(cls):
    data_stored = cls.data_stored()
    bm25_retriever = BM25Retriever.from_texts(texts=data_stored["documents"])
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
    client = chromadb.CloudClient(
      api_key=os.getenv("CHROMA_API_TOKEN"),
      tenant=os.getenv("CHROMA_TENANT"),
      database=os.getenv("CHROMA_DATABASE"),
    )

    return Chroma(
      client=client,
      collection_name=os.getenv("CHROMA_COLLECTION"),
      embedding_function=GoogleGenerativeAIEmbeddings(model=LLM_EMBEDDING),
    )