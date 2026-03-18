from app.services.validate_pdf import ValidatePDF
from app.services.process_pdf_content import ProcessPDFContent
from fastapi import APIRouter, UploadFile, File, HTTPException

document_router = APIRouter()

@document_router.post('/document/upload')
async def document_upload(pdf: UploadFile = File(...)):
  pdf_validation = await ValidatePDF.invoke(pdf)

  if pdf_validation["error"]:
    raise HTTPException(
      status_code=pdf_validation["status_code"],
      detail=pdf_validation["detail"]
    )
  else:
    full_content = ProcessPDFContent.invoke(pdf_validation["content"])
    print(full_content)
    return { "status": "success", "filename": pdf.filename }
