from fastapi import FastAPI, APIRouter
from routes.conversation_router import conversation_router
from routes.document_router import document_router

app = FastAPI()
api_router = APIRouter()

api_router.include_router(conversation_router)
api_router.include_router(document_router)

app.include_router(api_router, prefix="/api/v1")

