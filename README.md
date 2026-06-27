# Agenda de Contactos - React

Aplicación CRUD desarrollada con React como parte de un ejercicio práctico de evaluación.

La aplicación permite administrar una agenda de contactos implementando las operaciones básicas de Crear, Leer, Actualizar y Eliminar (CRUD), utilizando React, React Router y almacenamiento local mediante `localStorage`.

---

# Características

* Crear contactos.
* Editar contactos.
* Eliminar contactos con confirmación.
* Búsqueda en tiempo real.
* Persistencia de datos con `localStorage`.
* Validación de formularios.
* Navegación mediante React Router.
* Componentes funcionales utilizando Hooks.

---

# Tecnologías utilizadas

* React
* React Router DOM
* Vite
* Bootstrap 5
* JavaScript (ES6+)
* PNPM
* Git y GitHub

---

# Requisitos

Antes de ejecutar el proyecto asegúrese de tener instalado:

* Node.js (versión LTS)
* PNPM

Comprobar las versiones:

```bash
node -v
pnpm -v
```

---

# Instalación

Clonar el repositorio:

```bash
git clone https://github.com/USUARIO/agenda-contactos-react.git
```

Ingresar al proyecto:

```bash
cd agenda-contactos-react
```

Instalar dependencias:

```bash
pnpm install
```

---

# Ejecución

Iniciar el servidor de desarrollo:

```bash
pnpm dev
```

Abrir en el navegador:

```
http://localhost:5173
```

---

# Scripts disponibles

Ejecutar el proyecto:

```bash
pnpm dev
```

Compilar para producción:

```bash
pnpm build
```

Previsualizar la versión de producción:

```bash
pnpm preview
```

---

# Estructura del proyecto

```
src/
│
├── components/
│   ├── common/
│   ├── features/
│   └── layout/
│
├── hooks/
├── pages/
├── utils/
│
├── App.jsx
├── main.jsx
└── global.css
```

---

# Funcionalidades implementadas

* CRUD de contactos.
* Validaciones en tiempo real.
* Persistencia utilizando `localStorage`.
* Búsqueda dinámica.
* Navegación entre páginas.
* Página 404.

---

# Arquitectura

El proyecto está organizado siguiendo una estructura basada en responsabilidades:

* **components**: Componentes reutilizables y específicos.
* **pages**: Vistas principales.
* **hooks**: Hooks personalizados.
* **utils**: Funciones auxiliares y validaciones.

La aplicación mantiene el estado principal en el componente `App`, distribuyendo la información mediante propiedades hacia los componentes hijos.

---

# Hooks utilizados

* `useState`
* `useEffect`
* `useNavigate`
* `useParams`
* Custom Hook `useLocalStorage`

---

# Persistencia

Los datos se almacenan automáticamente utilizando la API nativa de `localStorage`, permitiendo conservar la información incluso después de cerrar o actualizar el navegador.

---

# Estado del proyecto

Actualmente el proyecto incluye:

* Gestión de contactos.
* Persistencia de información.
* Edición y eliminación.
* Búsqueda de contactos.

---

# Autor

Proyecto desarrollado con React utilizando Vite como herramienta de construcción, siguiendo una metodología de desarrollo incremental mediante Git y GitHub.
Se ha usado Pnpm por motivos de seguridad ya que Npm sufre constantes infecciones de malware