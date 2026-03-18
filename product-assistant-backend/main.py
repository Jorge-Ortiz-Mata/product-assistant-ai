from fastapi import FastAPI, APIRouter
from fastapi.middleware.cors import CORSMiddleware
from routes.conversation_router import conversation_router
from routes.document_router import document_router

origins = [
  "http://localhost:3000",
]

app = FastAPI()
api_router = APIRouter()

app.add_middleware(
  CORSMiddleware,
  allow_origins=origins,
  allow_credentials=True,
  allow_methods=["*"],
  allow_headers=["*"],
)

api_router.include_router(conversation_router)
api_router.include_router(document_router)

app.include_router(api_router, prefix="/api/v1")

@app.post('/api/v1/up')
def up():
  return { "Halo": "Reach" }