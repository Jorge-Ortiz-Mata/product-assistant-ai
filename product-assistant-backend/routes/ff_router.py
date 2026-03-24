import requests
from fastapi import APIRouter

AI_FF_URL = "https://api.npoint.io/41dc8576d3cf632cf7e6"

ff_router = APIRouter()

@ff_router.get('/ff')
async def ff():
  try:
    response = requests.get(AI_FF_URL)
    data = response.json()
    product_assistant = data["product-assistant"]
    return product_assistant["is_active"]
  except Exception as e:
    return {"error": str(e)}
