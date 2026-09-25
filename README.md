# Kalimas Group — Sitio Web Corporativo

Sitio web corporativo para Kalimas Group, grupo tecnológico que diseña plataformas que mueven empresas.

## Productos

- **Kalirio** — Plataforma integral para la gestión y operación de eventos
- **Kalenda** — Agendamiento inteligente de citas y reservas
- **Kalima Suite** — Suite empresarial con CRM, Kalenda, Analytics e Integraciones

## Stack

- HTML5 semántico
- CSS3 con design tokens, tipografía Syne + DM Sans
- JavaScript vanilla (navegación, animaciones, formulario)
- Formspree para envío del formulario de contacto

## Estructura

```
KalimasWeb/
├── index.html
├── styles.css
├── main.js
├── favicon.svg
├── productos/
│   ├── kalirio.html
│   ├── kalenda.html
│   └── kalima-suite.html
└── README.md
```

## Desarrollo local

Abre `index.html` en el navegador o usa un servidor local:

```bash
# Python
python -m http.server 8000

# Node
npx serve
```

Visita `http://localhost:8000`.

## Formulario de contacto (Formspree)

1. Crea una cuenta en [formspree.io](https://formspree.io) y un nuevo formulario.
2. Copia el endpoint (`https://formspree.io/f/xxxxxxxx`).
3. En `index.html`, sustituye `YOUR_FORM_ID` en el atributo `action` del formulario `#contactForm`.

Hasta que configures el ID, el formulario valida en el cliente y muestra un mensaje de éxito de desarrollo (no envía correo).

## Diseño

- Paleta: verde marca `#00c853` / negro `#0a0f0c` / superficies claras
- Tipografía: Syne (display) + DM Sans (cuerpo)
- Hero full-bleed con marca como señal principal
- Motion: scroll reveal, atmósfera del hero, mockups sutiles (`prefers-reduced-motion` respetado)

## Contacto

- Web: [kalimasgroup.net](https://kalimasgroup.net)
- Email: [hola@kalimasgroup.net](mailto:hola@kalimasgroup.net)

---

© 2026 Kalimas Group. Todos los derechos reservados.
