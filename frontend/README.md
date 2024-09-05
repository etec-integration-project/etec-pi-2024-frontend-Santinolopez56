# Santino Lopez

## Traer Proyecto
```
git clone https://github.com/etec-integration-project/etec-pi-2024-frontend-Santinolopez56.git
```


## Entrar al Proyecto
Con este comando entrara en la carpeta
```
cd .\frontend\
```

## Creacion de contenedor
```
docker build -t react-image .

docker compose up --build
```

## Ver pagina web
Y con este comando vas a poder en tu naveador vas a poder ver la pagina web
```
localhost:3000
```

## Modificaciones
Cuando nosotros queremos modificar el codigo, vamos a tener que reiniciar el contenedor
```
docker compose down --remove-orphans
```