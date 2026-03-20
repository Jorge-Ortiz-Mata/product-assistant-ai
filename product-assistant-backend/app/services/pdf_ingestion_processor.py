from app.services.pdf_content_splitter import PDFContentSplitter
from app.services.pdf_content_converter import PDFContentConverter
from app.services.embeddings_generator import EmbeddingsGenerator

class PDFIngestionProcessor:
  @classmethod
  async def invoke(cls, content_as_bytes):
    content_readable = PDFContentConverter.invoke(content_as_bytes)
    documents_list = PDFContentSplitter.invoke(content_readable)
    await EmbeddingsGenerator.invoke(documents_list)
    return
