import os
from dotenv import load_dotenv
from langchain_chroma import Chroma
from langchain_classic.retrievers.multi_query import MultiQueryRetriever
from langchain_google_genai import GoogleGenerativeAIEmbeddings, ChatGoogleGenerativeAI
from app.utils.constants import (
  LLM,
  LLM_EMBEDDING,
  LOCAL_DB_NAME,
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
  def vectorstore(cls):
    root_directory = os.path.dirname(os.path.abspath(__file__))

    return Chroma(
      embedding_function=GoogleGenerativeAIEmbeddings(model=LLM_EMBEDDING),
      persist_directory=os.path.join(root_directory, LOCAL_DB_NAME)
    )