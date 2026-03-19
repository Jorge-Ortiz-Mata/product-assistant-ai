import io
from pypdf import PdfReader
from langchain_core.documents import Document

# Esta clase convierte los bits del contenido del PDF y los transforma
# a palabras normales, juntandolo todo en un string.
class PDFContentConverter:
  @classmethod
  def invoke(cls, content):
    pdf_stream = io.BytesIO(content)
    reader = PdfReader(pdf_stream)
    documents = []

    for i, page in enumerate(reader.pages):
      extracted_text = page.extract_text()
      
      if extracted_text:
        clean_text = " ".join(extracted_text.split())
        doc = Document(page_content=clean_text, metadata={"page": i + 1})
        documents.append(doc)

    return documents