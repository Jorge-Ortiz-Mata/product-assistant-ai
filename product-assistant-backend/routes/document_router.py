from fastapi import APIRouter, UploadFile, File

document_router = APIRouter()

@document_router.post('/document/upload')
async def document_upload(pdf: UploadFile = File(...)):
  content = await pdf.read()
  print('---')
  print(content)
  print('---')
  return { "error": 20 }
