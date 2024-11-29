docker compose down --remove-orphans -v
docker compose up -d mysqldb
docker compose up -d app
docker compose down app
docker compose up --build