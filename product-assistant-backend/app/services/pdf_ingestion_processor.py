from app.services.pdf_content_splitter import PDFContentSplitter
from app.services.pdf_content_converter import PDFContentConverter
from app.services.embeddings_generator import EmbeddingsGenerator

class PDFIngestionProcessor:
  @classmethod
  async def invoke(cls, content):
    documents = PDFContentConverter.invoke(content)
    chunks = PDFContentSplitter.invoke(documents)
    await EmbeddingsGenerator.invoke(chunks)
    return
