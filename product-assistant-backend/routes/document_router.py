from app.services.pdf_validator import PDFValidator
from app.services.pdf_ingestion_processor import PDFIngestionProcessor
from fastapi import APIRouter, UploadFile, File, HTTPException, status

document_router = APIRouter()

@document_router.post('/document/upload')
async def document_upload(pdf: UploadFile = File(...)):
  pdf_validation = await PDFValidator.invoke(pdf)

  if pdf_validation["error"]:
    raise HTTPException(
      status_code=pdf_validation["status_code"],
      detail=pdf_validation["detail"]
    )
  else:
    await PDFIngestionProcessor.invoke(pdf_validation["content"])

    return {
      "status_code": status.HTTP_202_ACCEPTED,
      "message": "PDF uploaded successfully"
    }
