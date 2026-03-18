import io
from pypdf import PdfReader

# Esta clase convierte los bits del contenido del PDF y los transforma
# a palabras normales, juntandolo todo en un string.
class ProcessPDFContent:
  @classmethod
  def invoke(cls, content):
    pdf_stream = io.BytesIO(content)
    reader = PdfReader(pdf_stream)
    full_text = ""

    for page in reader.pages:
      extracted_text = page.extract_text()
      
      if extracted_text:
        full_text += extracted_text + "\n"
      full_content = " ".join(full_text.split())

    return full_content
