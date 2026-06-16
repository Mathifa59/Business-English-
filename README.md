# Business English Academy

Sitio web de marketing para **Business English Academy**, una academia de inglés de negocios ubicada en Lima, Perú. Desarrollado por **DevHorses**.

---

## Stack tecnológico

| Capa | Tecnología |
|---|---|
| Framework | Next.js 14 (App Router) |
| Lenguaje | TypeScript |
| UI | React 18 |
| Internacionalización | next-intl (ES / EN) |
| Estilos | CSS Modules + globals.css |
| Deploy | Vercel |

---

## Estructura del proyecto

```
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx              # Layout principal con Header, Footer, WhatsAppButton
│   │   ├── page.tsx                # Home
│   │   ├── cursos/page.tsx         # Catálogo de cursos con filtros
│   │   ├── nosotros/page.tsx       # Página institucional
│   │   ├── blog/page.tsx           # Artículos del blog
│   │   ├── inscripciones/page.tsx  # Formulario de inscripción
│   │   └── contacto/page.tsx       # Información de contacto
│   ├── globals.css                 # Variables CSS, keyframes, utilidades globales
│   └── layout.tsx                  # Root layout (fuentes)
├── components/
│   ├── Header/                     # Navbar con menú mobile y switcher ES|EN
│   ├── Footer/
│   ├── WhatsAppButton/             # Botón flotante de WhatsApp
│   ├── AnimateOnScroll/            # Animaciones con IntersectionObserver
│   └── ui/                         # CourseCard, StatCard, TestimonialCard, BlogCard, LevelBadge, Button
├── messages/
│   ├── es.json                     # Textos en español
│   └── en.json                     # Textos en inglés
├── i18n.ts                         # Configuración next-intl
├── middleware.ts                   # Detección de locale (default: es)
├── navigation.ts                   # Helpers de navegación tipados
└── next.config.mjs                 # Configuración Next.js con plugin next-intl
```

---

## Páginas

| Ruta | Descripción |
|---|---|
| `/` | Hero animado, ¿Por qué elegirnos?, cursos destacados, stats con contador, testimonios |
| `/cursos` | Grid de 6 cursos filtrable por nivel (A1-A2 → C1 + Ejecutivos) con precios en Soles |
| `/nosotros` | Bio del director, misión, visión y 3 pilares institucionales |
| `/blog` | 3 artículos estáticos sobre Business English |
| `/inscripciones` | Formulario con validación client-side y pantalla de éxito animada |
| `/contacto` | Dirección en San Isidro Lima, teléfono, email y redes sociales |

---

## Instalación y desarrollo local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build de producción
npm run build
```

Visita [http://localhost:3000](http://localhost:3000) — redirige automáticamente a `/es`.

---

## Internacionalización

El sitio soporta **español** (default) e **inglés**. El middleware de `next-intl` detecta el locale desde la URL:

- `tudominio.com/es/cursos` → español
- `tudominio.com/en/cursos` → inglés

El switcher `ES | EN` en el header cambia el idioma sin recargar la página.

---

## Deploy

El proyecto está desplegado en **Vercel** conectado al repositorio GitHub [`Mathifa59/Business-English-`](https://github.com/Mathifa59/Business-English-).

Cada push a `main` dispara un deploy automático de producción.

---

## Historial de fixes (16 Jun 2026)

### `next.config.ts` → `next.config.mjs`
Next.js 14.2.5 no soporta `next.config.ts`. Se renombró el archivo a `.mjs` y se reemplazó el tipo TypeScript `NextConfig` por el comentario JSDoc equivalente. **Commit:** `42afad7`

### `StatCard.tsx` — function declaration en bloque strict mode
TypeScript en modo estricto (módulos ES) no permite declarar `function` dentro de un bloque `if`. Se convirtió `function tick()` a `const tick = () => {}`. **Commit:** `8185a9c`
