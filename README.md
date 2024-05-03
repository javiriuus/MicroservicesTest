# MicroservicesTest-Django

Estructura de carpetas y archivos:
/go-service/:
main.go: Contiene el código del microservicio en Go.
go.mod: Define el módulo Go y sus dependencias.

/python-service/:
app.py: Contiene el código del microservicio en Python con Flask.
requirements.txt: Lista las dependencias de Python.

/frontend/:
pages/: Carpeta donde se guardan las páginas de Next.js.
components/: Carpeta para los componentes reutilizables de React.
package.json: Define las dependencias de tu aplicación Next.js.

/docker/:
Dockerfile.go: Dockerfile para contenedorización del servicio Go.
Dockerfile.python: Dockerfile para contenedorización del servicio Python.
Dockerfile.frontend: Dockerfile para contenedorización del servicio de front-end.
docker-compose.yml:
Archivo de configuración de Docker Compose para gestionar los contenedores.