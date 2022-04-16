# API con NodeJS

Docker - Nodejs v16 - Express - Typescript

## Inicio

- Api con nodejs leyendo datos desde archivo `diario.json`

- Crear archivo `.env` en la carpeta del proyecto.


## Docker

- Para la primera vez que se levanta el proyecto con docker o se cambie los archivos de docker, ejecutar:
 
```bash
sudo docker-compose up --build -d
```

- En las siguientes oportunidades ejecutar:

Para levantar:
```bash
sudo docker-compose start
```
Para detener:
```bash
sudo docker-compose stop
```

- Para ver la web, en un navegador copiar la siguiente url:
```bash
http://localhost:8101
```
- Para ingresar al server con docker ejecutar:
```bash
sudo docker-compose exec web sh
```

## Endpoints
```bash
GET     /api/diario
```
```bash
GET     /api/diario/1
```
```bash
POST    /api/diario
{
    "emotion": "very happy",
    "visibility": "0",
    "comment": "Todo resultó OK...",
    "date": "2022-03-31"
}
```