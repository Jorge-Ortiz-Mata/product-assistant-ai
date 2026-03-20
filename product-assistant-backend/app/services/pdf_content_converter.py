import io
from pypdf import PdfReader

# Esta clase convierte los bits del contenido del PDF y los transforma
# a palabras normales, juntandolo todo en un string.
class PDFContentConverter:
  @classmethod
  def invoke(cls, content_as_bytes):
    pdf_stream = io.BytesIO(content_as_bytes)
    reader = PdfReader(pdf_stream)
    full_pdf_content = ""

    for page in reader.pages:
      full_pdf_content += page.extract_text()

    return " ".join(full_pdf_content.split())
