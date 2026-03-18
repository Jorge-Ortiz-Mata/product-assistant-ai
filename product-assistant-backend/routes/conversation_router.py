from fastapi import APIRouter
from app.models.conversation import Conversation

conversation_router = APIRouter()

@conversation_router.post('/conversate')
async def conversate(conversation: Conversation):
  return { "halo": "reach" }