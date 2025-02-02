# Variáveis
DC=docker compose --file ./docker-compose.yml --env-file ./.env

.PHONY: up down migrate logs

up:
	$(DC) up -d --build

down:
	$(DC) down

reset:
	$(DC) down --volumes
	$(DC) up -d --build

logs:
	$(DC) logs -f -n 10

help: # mostra essa ajuda
	@echo "----------------------- HELP ----------------------------"
	@echo "up:   Sobe todos os serviços"
	@echo "down: Derruba todos os serviços"
	@echo "logs: Observa os logs de todo o ambiente"
	@echo "--------------------------------------------------------"
