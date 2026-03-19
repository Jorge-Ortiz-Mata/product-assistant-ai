from app.utils.constants import PDF_CHUNK_OVERLAP, PDF_CHUNK_SIZE
from langchain_text_splitters import RecursiveCharacterTextSplitter

class PDFContentSplitter:
  @classmethod
  def invoke(cls, documents):
    text_splitter = RecursiveCharacterTextSplitter(
      chunk_size=PDF_CHUNK_SIZE,
      chunk_overlap=PDF_CHUNK_OVERLAP,
    )

    return text_splitter.split_documents(documents)
