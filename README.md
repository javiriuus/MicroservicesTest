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

## Estructura de archivos

La estructura de archivos del proyecto es la siguiente:

docker/
    docker-compose.yaml # Configuración de Docker Compose para ejecutar los servicios localmente
    Dockerfile.go # Dockerfile para el servicio en Golang
    Dockerfile.python # Dockerfile para el servicio en Python
    Dockerfile.postgres # Dockerfile para PostgreSQL

frontend/
    src/
        app/
            layout.tsx # Componente de diseño raíz para el App Router
            page.tsx # Página principal del App Router
        components/
            Table.tsx # Componente de tabla genérico
        pages/
            products.tsx # Página para mostrar la tabla de productos
            users.tsx # Página para mostrar la tabla de usuarios
        styles/
            globals.css # Archivo CSS global con configuración de Tailwind CSS
        utils/
            fetchData.ts # Archivo para manejar solicitudes HTTP (opcional)
    public/
        favicon.ico # Icono de favicon
    tailwind.config.js # Archivo de configuración de Tailwind CSS
    next.config.js # Configuración específica de Next.js
    tsconfig.json # Archivo de configuración de TypeScript
    .eslintrc.json # Configuración de ESLint
go-service/
    go.mod # Archivo de dependencias de Go
    go.sum # Archivo de sumas de comprobación de dependencias
    main.go # Código fuente principal del microservicio en Golang
python-service/
    app.py # Código fuente principal del microservicio en Flask
    requirements.txt # Archivo con las dependencias de Python

