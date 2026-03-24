import os
import chromadb
from functools import cache
from dotenv import load_dotenv
from langchain_chroma import Chroma
from langchain_classic.retrievers.multi_query import MultiQueryRetriever
from langchain_google_genai import GoogleGenerativeAIEmbeddings, ChatGoogleGenerativeAI
from app.utils.constants import (
  LLM,
  LLM_EMBEDDING,
  SEARCH_TYPE,
  SEARCH_KWARGS,
  SCORE_THRESHOLD,
)

load_dotenv()

class CustomMultyQueryRetriever:
  @classmethod
  def invoke(cls):
    return cls.multy_query_retriever()
  
  @classmethod
  def multy_query_retriever(cls):
    return MultiQueryRetriever.from_llm(
      retriever=cls.base_retriever(),
      llm=ChatGoogleGenerativeAI(model=LLM, temperature=0.3)
    )
  
  @classmethod
  def base_retriever(cls):
    vectorstore = cls.vectorstore()

    return vectorstore.as_retriever(
      search_type=SEARCH_TYPE,
      search_kwargs={
        "score_threshold": SCORE_THRESHOLD,
        "k": SEARCH_KWARGS,
      },
    )

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