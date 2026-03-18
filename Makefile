install:
	@$(MAKE) -j2 requirements npm

requirements:
	@echo "Install Python Packages"
	@cd product-assistant-backend && pip install --no-cache-dir -r requirements.txt

npm:
	@echo "Install NPM Packages"
	@cd product-assistant-frontend && npm install

up:
	@$(MAKE) -j2 frontend backend

backend:
	@echo "Launching FastApi server"
	@cd product-assistant-backend && fastapi dev main.py

frontend:
	@echo "Launching Node server"
	@cd product-assistant-frontend && npm run dev
	