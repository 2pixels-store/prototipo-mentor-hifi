# Prototipo Mentor — RONDA 2 (lote de correcciones consolidado)
Fecha: 2026-09-27. Aprobado por el usuario en chat (revisión ronda 1 con Nati).

## Base (NO partir de cero)
- Punto de partida: `~/workspace/mockups-mentor/ui/v1/index.html` (UI v1 original, intacta).
- Backup de seguridad: `~/workspace/mockups-mentor/ui/v1-backup-2026-09-27/` — no tocar.
- La ronda 1 publicada (`prototipo-mentor-hifi`, 12 pantallas, i18n 196 claves ES/EN, claro/oscuro)
  aporta el flujo de pantallas; la ronda 2 fusiona ese flujo con la piel de la UI v1.

## Dirección de arte (decisión del usuario)
- **Paleta original aprobada 2026-09-21**: crema `#f7f1e6`, terracota `#c46e50`,
  ciruela oscuro `#3a2434` (evolución DS: marca `#40263D`).
  Criterio: "sirve para hombres y mujeres, no es tan pink ni tan dark".
  Audiencia mayormente mujeres → muy cute, pero premium, sin extremos rosados/morados.
- **Clay con medida**: efecto clay + 3D como firma en mentores, tarjetas hero y botones
  principales (botón que se hunde como plastilina al presionar, hover con brillo suave,
  tarjetas con capas de elevación). NUNCA barroco: legibilidad antes que decoración.
- **Iconos**: familia simple línea/duotono (1–2 colores o sombra sutil que realce),
  reconocibles a tamaño pequeño, consistentes en claro/oscuro. Los iconos son
  secundarios, nunca protagonistas. El clay no deforma siluetas (accesibilidad:
  usuarios con baja visión deben reconocer cada icono).
- **Ciruela = color marca**: en modo claro va oscuro (botones primarios); en modo oscuro
  se invierte a tono claro cálido. Bilingüe ES/EN desde el día uno (selector visible).

## Correcciones del lote (aplicar TODAS en una pasada)
1. **Disclaimer inicial**: pantalla nueva al abrir la app explicando QUÉ ES la aplicación
   (además del disclaimer de privacidad que ya existe en el onboarding).
2. **Mentores 3D originales**: reemplazar versiones planas SVG por los originales plastilina:
   `~/workspace/shots/mentor-avatar/media-generation-mentor-welcome-en-sofia-0-fb5b9471-63bc-4ac6-9506-c681aad9aba4.webp` (Sofi)
   `~/workspace/shots/mentor-avatar/media-generation-mentor-welcome-en-mateo-0-0112e0f5-9fde-4cc1-93c7-dead4c61f1a9.webp` (Matt).
   Nombres bilingües **Sofi / Matt** (funcionan igual en ES/EN), renombrables por el usuario.
3. **Home-top de la v1**: panel superior que muestra la app + botón de Ajustes SIEMPRE visible
   (idioma, tema claro/oscuro) + accesos rápidos (calculadora de precios, convertidor de medidas).
4. **Sección Colaboraciones**: faltaba en el hub "Más" de la ronda 1; estaba en el inventario
   de funciones. Agregarla con su pantalla.
5. **Definiciones del hub "Más"**: cada sección lleva una línea clara de qué es
   (información / guía / herramienta).
6. **Guided tour con dedito animado**: integrar la mano/dedo de gestos (tap, swipe, press-hold)
   en el tour guiado para enseñar gestos (desplegar menús, etc.) donde el usuario pueda no ver
   un botón o no saber qué hacer con el dedo. Referencias del usuario: iconos de gestos estilo
   tan295 (fondo crema, mano + flechas naranjas).
7. **Biblioteca de poses**: usar las poses 3D existentes como placeholder coherente
   (con calculadora, con materia prima, de pie, cintura para arriba). La spec completa de
   consistencia de personaje queda para producción; en el prototipo basta coherencia visual.

## Reglas de construcción (permanentes)
- ES/EN desde el primer build (i18n.js, 196+ claves). Cero CDN/recursos remotos.
- Offline-first, móvil 390px, claro/oscuro, transiciones suaves (fade + rise ~280ms).
- HTML autocontenido por pantalla, navegación por niveles, sin callejones.
- QA obligatorio: todos los destinos `go()` resuelven, sin desbordes a 390px, HTML balanceado.

## Entrega
- Directorio de trabajo: `~/workspace/goals/etsy-digital-downloads-store-and-companion-apps/files/prototipo-mentor-hifi/`
- Publicar en el mismo repo GitHub Pages (`prototipo-mentor-hifi`) al pasar QA.
- Reportar: nº de pantallas, qué cambió por pantalla, resultado del QA.
