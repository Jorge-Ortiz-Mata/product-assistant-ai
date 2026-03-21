from fastapi import FastAPI, APIRouter
from fastapi.middleware.cors import CORSMiddleware
from routes.ff_router import ff_router
from routes.document_router import document_router
from routes.conversation_router import conversation_router

origins = [
  "http://localhost:3000",
  "https://product-assistant-frontend-latest.onrender.com"
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
api_router.include_router(ff_router)

app.include_router(api_router, prefix="/api/v1")

@app.post('/api/v1/up')
def up():
  return { "Halo": "Reach" }
