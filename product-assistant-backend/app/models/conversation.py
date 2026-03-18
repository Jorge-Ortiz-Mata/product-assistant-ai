from pydantic import BaseModel, Field

class Conversation(BaseModel):
  message: str = Field(description="Mensaje del usuario")
