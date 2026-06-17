# backend_chris_vela
# 📚 API REST de Estudiantes con Express.js

## 🎯 Propósito de la Aplicación

Express.js es el framework backend de Node.js más usado en la industria. Entender cómo un servidor procesa peticiones HTTP y devuelve respuestas JSON es la base de cualquier API REST profesional que se construya más adelante con bases de datos, autenticación y despliegue en la nube.

---

## 📄 Descripción

Este proyecto consiste en construir un servidor utilizando **Express.js** que gestione una lista de estudiantes almacenada en un array de JavaScript (datos en memoria, sin base de datos).

El servidor debe responder correctamente a peticiones HTTP utilizando los métodos:

* `GET`
* `POST`
* `PUT`
* `DELETE`

Todas las respuestas deben devolverse en formato **JSON** junto con el código de estado HTTP apropiado.

La API está enfocada en la administración de estudiantes e incluye endpoints funcionales para:

* Consultar estudiantes
* Agregar estudiantes
* Actualizar estudiantes
* Eliminar estudiantes

---

## 🚀 Funcionalidades

* 📥 Obtener todos los estudiantes
* 🔍 Obtener estudiante por ID
* ➕ Agregar un nuevo estudiante
* ✏️ Actualizar un estudiante existente
* ❌ Eliminar un estudiante

---

## 🗂️ Estructura del Proyecto

```
📦 express-estudiantes-api
├── 📄 index.js
├── 📄 package.json
├── 📄 .gitignore
└── 📄 README.md
```

---

## 📌 Componentes del Proyecto

| Componente                  | Descripción                                                                                                                                                        |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **index.js**                | Archivo principal con la configuración de Express, el array de estudiantes y los 5 endpoints (GET all, GET by id, POST, PUT y DELETE) implementados y funcionales. |
| **package.json**            | Archivo de configuración del proyecto generado con `npm init`. Debe incluir Express como dependencia.                                                              |
| **.gitignore**              | Archivo que excluye `node_modules/` y otros archivos innecesarios del repositorio.                                                                                 |
| **README.md**               | Documento que describe el proyecto, cómo ejecutarlo y los endpoints disponibles.                                                                                   |
| **Repositorio GitHub**      | Repositorio público con todos los archivos del proyecto. La carpeta `node_modules` NO debe estar incluida.                                                         |
| **Entrega en Aula Virtual** | Enlace del repositorio GitHub entregado en la plataforma Moodle de Kodigo antes de la fecha límite.                                                                |

---

## ⚙️ Instalación y Configuración

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/express-estudiantes-api.git
cd express-estudiantes-api
```

### 2️⃣ Inicializar el proyecto (si aplica)

```bash
npm init -y
```

### 3️⃣ Instalar dependencias

```bash
npm install express
```

### 4️⃣ Ejecutar el servidor

```bash
node index.js
```

Servidor disponible en:

```
http://localhost:3000
```

---

## 📡 Endpoints de la API

| Método | Endpoint        | Descripción                   |
| ------ | --------------- | ----------------------------- |
| GET    | `/students`     | Obtener todos los estudiantes |
| GET    | `/students/:id` | Obtener un estudiante por ID  |
| POST   | `/students`     | Crear un nuevo estudiante     |
| PUT    | `/students/:id` | Actualizar un estudiante      |
| DELETE | `/students/:id` | Eliminar un estudiante        |

---

## 🧪 Ejemplo de Uso

### ➕ Crear un estudiante

**Request:**

```json
{
  "name": "Juan Pérez",
  "age": 20,
  "course": "Programación"
}
```

**Response:**

```json
{
  "id": 1,
  "name": "Juan Pérez",
  "age": 20,
  "course": "Programación"
}
```

---

## 🧹 Buenas Prácticas Implementadas

* Uso correcto de códigos de estado HTTP (`200`, `201`, `404`, etc.)
* Estructura RESTful
* Manejo de datos en formato JSON
* Código limpio y organizado
* Exclusión de archivos innecesarios con `.gitignore`

---

## 📦 Dependencias

* Express.js

Instalación:

```bash
npm install express
```

---

## 📌 Requisitos de Entrega

* ✔️ Servidor funcionando correctamente
* ✔️ Endpoints implementados (GET, POST, PUT, DELETE)
* ✔️ Repositorio público en GitHub
* ✔️ Documentación clara en README.md
* ❌ No incluir carpeta `node_modules`

---

## 👨‍💻 Autor

Proyecto desarrollado como práctica de backend con Node.js y Express.js. Chris Vela

---

## 📄 Licencia

Este proyecto es de uso educativo.


