# Proyecto de Microservicios con Next.js, TypeScript, y Tailwind CSS

Este proyecto es un entorno de microservicios basado en Next.js, TypeScript, y Tailwind CSS. La aplicación frontend muestra una página principal con botones para "Ver usuarios" y "Ver productos", que llevan a páginas para mostrar las tablas de usuarios y productos respectivamente. Los datos se obtienen de microservicios que acceden a una base de datos PostgreSQL.

## Tabla de contenidos

- [Arquitectura](#arquitectura)
- [Herramientas utilizadas](#herramientas-utilizadas)
- [Estructura de archivos](#estructura-de-archivos)
- [Cómo ejecutar el proyecto](#cómo-ejecutar-el-proyecto)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

## Arquitectura

- **Frontend**: Se basa en Next.js con TypeScript y Tailwind CSS. La aplicación tiene una página principal con botones para navegar a las páginas de usuarios y productos.
- **Microservicios**:
    - Un microservicio en Golang para manejar peticiones de usuarios.
    - Un microservicio en Python (con Flask) para manejar peticiones de productos.
- **Base de datos**: Se utiliza PostgreSQL para almacenar los datos de usuarios y productos.
- **Docker y Kubernetes**: Los microservicios y la base de datos se implementan como contenedores Docker, gestionados con Kubernetes.

## Herramientas utilizadas

- **Next.js**: Un framework de React que permite desarrollar aplicaciones web modernas.
- **TypeScript**: Un lenguaje de programación de tipado estático que se utiliza en el frontend.
- **Tailwind CSS**: Un framework CSS utility-first para diseñar la interfaz de usuario.
- **PostgreSQL**: Base de datos relacional para almacenar datos de usuarios y productos.
- **ESLint**: Herramienta de análisis de código para mantener la calidad del código.
- **Docker**: Utilizado para crear contenedores para los microservicios y la base de datos.
- **Kubernetes**: Herramienta de orquestación de contenedores utilizada para desplegar y gestionar los microservicios.
- **Flask**: Framework de Python para crear aplicaciones web (utilizado en el microservicio de productos).


## Cómo ejecutar el proyecto

1. **Instalar dependencias**:

    Desde la carpeta `frontend/`, ejecuta:

    ```bash
    npm install
    ```

    Desde la carpeta `go-service/`, ejecuta:

    ```bash
    go mod tidy
    ```

    Desde la carpeta `python-service/`, ejecuta:

    ```bash
    pip install -r requirements.txt
    ```

2. **Iniciar el servidor de desarrollo**:

    Desde la carpeta `frontend/`, inicia el servidor de desarrollo:

    ```bash
    npm run dev
    ```

    Desde las carpetas `go-service/` y `python-service/`, inicia los microservicios:

    ```bash
    go run main.go
    python app.py
    ```

3. **Ver la aplicación**:

    Ve a [http://localhost:3000](http://localhost:3000) en tu navegador web para acceder a la aplicación.

4. **Iniciar los microservicios**:

    Asegúrate de tener Docker y Kubernetes configurados.

    Desde la carpeta `docker/`, inicia los servicios con Docker Compose:

    ```bash
    docker-compose up
    ```

## Contribuciones

Si deseas contribuir al proyecto, por favor, sigue estas pautas:

- Haz un fork del proyecto.
- Crea una nueva rama para tus cambios.
- Realiza tus cambios y realiza pruebas.
- Envía un pull request.

## Licencia

Este proyecto está bajo la licencia MIT. Por favor, consulta el archivo `LICENSE` para obtener más información.
