
# Challenge Github Users

## Pasos para la ejecución del proyecto

### Backend
    1. Tener docker-desktop ejecutandose.
    2. Clonar repositorio: https://github.com/sebastiansandoval27/Github-users-challenge
    (git clone [url])
    3. Abrir proyecto con algún editor de código y acceder a la carpeta "backend"
    4. Ejecutar el siguiente comando para correr el archivo "Docker-compose":
        - "docker-compose up -d"
    5. Verificar que el contenedor esté corriendo mediante la aplicación de github desktop o    mediante el comando "docker ps"
    6. Instalar dependencias:
        - npm install
    7. Finalmente correr el proyecto:
        - npm run start

### Frontend

(Ejectuar los siguientes pasos, luego de haber clonado el proyecto en el paso anterior)

    1. Acceder a la carpeta "github-users-test"
    2. Ejecutar "yarn install" para instalar dependencias
    3. Eejecutar "yarn dev"
    4. En cualquier navegador, acceder a la url: localhost:5173