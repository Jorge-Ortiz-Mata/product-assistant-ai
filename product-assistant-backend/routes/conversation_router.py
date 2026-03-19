from fastapi import APIRouter
from app.models.conversation import Conversation
from app.services.conversation_processor import ConversationProcessor

conversation_router = APIRouter()

@conversation_router.post('/conversate')
async def conversate(conversation: Conversation):
  return ConversationProcessor.invoke(conversation.message)