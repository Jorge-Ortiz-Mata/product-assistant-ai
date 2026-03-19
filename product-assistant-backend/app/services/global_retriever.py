from langchain_classic.retrievers import EnsembleRetriever
from app.services.custom_multy_query_retriever import CustomMultyQueryRetriever
from app.services.custom_bm25_retreiver import CustomBM25Retriever

class GlobalRetriever:
  @classmethod
  def invoke(cls):
    multy_query_retriever = CustomMultyQueryRetriever.invoke()
    bm25_retriever = CustomBM25Retriever.invoke()
    
    return EnsembleRetriever(
      retrievers=[multy_query_retriever, bm25_retriever],
      weights=[0.7, 0.3]
    )
