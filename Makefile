ENV_FILE ?= $(if $(wildcard .env.docker),.env.docker,.env.docker.example)
COMPOSE := docker compose --env-file $(ENV_FILE)

.PHONY: help up down build rebuild logs ps restart stop reset-volumes pull

help:
	@echo "Available targets:"
	@echo "  env file: $(ENV_FILE)"
	@echo "  make up             Start the full stack"
	@echo "  make down           Stop and remove containers"
	@echo "  make stop           Stop containers without removing them"
	@echo "  make build          Build images"
	@echo "  make rebuild        Rebuild images and restart the stack"
	@echo "  make logs           Tail logs from all services"
	@echo "  make ps             Show service status"
	@echo "  make restart        Restart all services"
	@echo "  make pull           Pull latest images"
	@echo "  make reset-volumes  Remove stack and named volumes"

up:
	$(COMPOSE) up --build

down:
	$(COMPOSE) down

stop:
	$(COMPOSE) stop

build:
	$(COMPOSE) build

rebuild:
	$(COMPOSE) up --build --force-recreate

logs:
	$(COMPOSE) logs -f --tail=200

ps:
	$(COMPOSE) ps

restart:
	$(COMPOSE) restart

pull:
	$(COMPOSE) pull

reset-volumes:
	$(COMPOSE) down -v --remove-orphans
