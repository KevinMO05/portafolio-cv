# Kevmart — Portafolio

Portafolio personal de Kevin Martínez Ojeda (Kevmart). React + TypeScript + Vite,
Tailwind CSS v4, React Three Fiber (Three.js) para el hero 3D animado, y Framer Motion
para las animaciones al hacer scroll.

## Desarrollo

```bash
npm install
npm run dev
```

Abre http://localhost:5173

## Build de producción

```bash
npm run build
npm run preview
```

`npm run build` genera la carpeta `dist/` lista para desplegar en Vercel, Netlify,
GitHub Pages o cualquier hosting estático.

## Antes de publicar — pendientes

En `src/data/resume.ts`, el objeto `profile` tiene dos placeholders que debes
completar con tus URLs reales:

```ts
linkedin: "#", // agrega tu URL de LinkedIn
github: "#",   // agrega tu URL de GitHub
```

## Estructura

- `src/data/resume.ts` — toda la información del CV (perfil, skills, experiencia,
  educación, proyectos). Edita este archivo para actualizar el contenido del sitio
  sin tocar los componentes.
- `src/components/HeroScene.tsx` — la escena 3D del hero (dos chevrones inspirados
  en el logo, flotando en Three.js).
- `src/lib/theme.tsx` — el toggle de tema claro/oscuro (persiste en localStorage).
- `public/logo.png` y `public/CV-Kevin-Martinez-Ojeda.pdf` — tus assets, servidos
  tal cual en la raíz del sitio.
