# Docker Infrastructure

## Recommended folder structure

```text
.
├── backend/
│   ├── Dockerfile
│   └── app/
├── frontend/
│   ├── Dockerfile
│   └── src/
├── infra/
│   ├── postgres/
│   │   └── init/
│   └── tileserver/
│       ├── mbtiles/
│       ├── styles/
│       ├── fonts/
│       ├── sprites/
│       ├── config.example.json
│       └── start.sh
├── docker-compose.yml
└── .env.docker.example
```

## Container communication

- `frontend` is available on `http://localhost:5173`
- `backend` is available on `http://localhost:8000`
- `tileserver-gl` is available on `http://localhost:8080`
- `photon` is available on `http://localhost:2322`
- `db` is available on `localhost:5432`

Inside Docker, services communicate through the internal bridge network:

- frontend -> backend: `http://backend:8000`
- backend -> db: `postgresql://routes_user:routes_password@db:5432/routes_discover`
- backend -> photon: `http://photon:2322`
- backend -> tileserver-gl: `http://tileserver-gl:8080`

## Development workflow

1. Copy `.env.docker.example` to `.env.docker`
2. Put your `.mbtiles` into `planetiler/`
3. By default the stack starts `planetiler/zaragoza.mbtiles`
4. If needed, change `TILESERVER_MBTILES_NAME` in `.env.docker`
5. Start the stack:

```bash
docker compose --env-file .env.docker up --build
```

On Apple Silicon macOS, the official `postgis/postgis:17-3.5` image is currently `amd64`-only, so the compose file pins the database service to `linux/amd64` via `POSTGIS_PLATFORM=linux/amd64`.

## Hot reload

- Vite hot reload works through the bind mount `./frontend:/app`
- FastAPI reload works through the bind mount `./backend:/app`
- Docker Desktop on macOS is helped by polling-based file watching:
  - `CHOKIDAR_USEPOLLING=true`
  - `WATCHFILES_FORCE_POLLING=true`

## TileServer GL behavior

- TileServer GL starts directly with `planetiler/${TILESERVER_MBTILES_NAME}`
- Default value is `planetiler/zaragoza.mbtiles`
- Add future custom styles under `infra/tileserver/styles/`

## Photon behavior

- Photon now defaults to `REGION=spain`
- This avoids the default planet-wide download
- `SEQUENTIAL` update strategy is used to avoid the large temporary-space overhead of parallel downloads
