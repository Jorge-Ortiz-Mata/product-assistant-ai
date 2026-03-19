import requests
from fastapi import APIRouter, Request, status
from fastapi.responses import JSONResponse

AI_FF_URL = "https://api.npoint.io/41dc8576d3cf632cf7e6"

ff_router = APIRouter()

@ff_router.get('/ff')
async def ff():
  response = requests.get(AI_FF_URL)
  data = response.json()
  product_assistant = data["product-assistant"]
  return product_assistant["is_active"]

