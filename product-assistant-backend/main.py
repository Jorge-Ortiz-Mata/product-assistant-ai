from fastapi import FastAPI, APIRouter
from routes.conversation_router import conversation_router

app = FastAPI()
api_router = APIRouter()

app.include_router(api_router, prefix="/api/v1")
api_router.include_router(conversation_router)

