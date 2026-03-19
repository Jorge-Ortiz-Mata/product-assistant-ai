from fastapi import status

ALLOWED_MIME_TYPES = ["application/pdf"]
MAX_FILE_SIZE = 5 * 1024 * 1024  # 5MB

# Esta clase valida el tipo de contenido PDF y el tamaño 5 MB
class PDFValidator:
  @classmethod
  async def invoke(cls, pdf):
    content = await pdf.read()

    if pdf.content_type not in ALLOWED_MIME_TYPES:
      return { 
        "status_code": status.HTTP_422_UNPROCESSABLE_CONTENT,
        "detail": "El archivo debe ser un PDF válido.",
        "error": True,
        "content": None,
      }
    
    if len(content) > MAX_FILE_SIZE:
      return { 
        "status_code": status.HTTP_422_UNPROCESSABLE_CONTENT,
        "detail": "El archivo es demasiado grande. Máximo 5MB.",
        "error": True,
        "content": None,
      }

    return {
      "status_code": None,
      "detail": None,
      "error": False,
      "content": content,
    }
