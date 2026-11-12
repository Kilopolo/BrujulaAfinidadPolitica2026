# Brújula — Comparador de afinidad política

Aplicación Android (contenedor WebView) y versión web instalable (PWA). Interfaz en español.

## Qué incluye
- Cuestionario de 96 afirmaciones: 12 por cada uno de los 8 temas y dos por partido.
- Seis partidos de la infografía: Frente Amplio, Podemos, PP, PSOE, Se Acabó La Fiesta y VOX.
- Escala de cinco posiciones, opción de no responder, progreso y navegación anterior/siguiente.
- Afinidad media por partido, comparación por tema y desglose de cada respuesta.
- Exportación local del informe a TXT.
- No usa cuentas, analítica, APIs ni servicios remotos.

## Compilar APK en Android Studio
1. Instala Android Studio y el Android SDK Platform 35.
2. Abre la carpeta `android/` como proyecto.
3. Deja que Gradle sincronice las dependencias.
4. Selecciona **Build > Build Bundle(s) / APK(s) > Build APK(s)**.
5. Android Studio generará el APK en `android/app/build/outputs/apk/debug/app-debug.apk`.

También puedes compilar desde la carpeta `android/` con `gradle assembleDebug` si tienes Gradle instalado y el SDK configurado.

## Instalar la versión web
Sirve el contenido de `www/` desde un origen HTTPS o localhost. En Android, abre la URL en Chrome y usa **Instalar aplicación** o **Añadir a pantalla de inicio**. La PWA almacena sus recursos en caché para funcionar sin conexión después de la primera carga.

## Método de cálculo
Cada afirmación se atribuye al partido indicado en la imagen. La respuesta se transforma linealmente: totalmente en desacuerdo = 0; en desacuerdo = 25; neutral = 50; de acuerdo = 75; totalmente de acuerdo = 100. La afinidad de cada partido es la media de las puntuaciones de sus afirmaciones contestadas. Las omisiones y «No tengo opinión» no entran en el cálculo. Cada afirmación tiene el mismo peso.

El cálculo mide acuerdo con la selección de frases de la infografía; no mide de forma exhaustiva una ideología ni predice el voto. La imagen no contiene fecha ni fuentes verificables. Se deben contrastar las propuestas con los programas oficiales correspondientes a la convocatoria electoral.

## Estructura
- `www/`: PWA autónoma.
- `android/`: proyecto Android Studio con WebView que carga los recursos locales.
