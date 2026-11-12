
# Comparador Político de España

Aplicación interactiva para conocer, comparar y analizar las propuestas, decisiones y posiciones de los partidos políticos españoles sobre los asuntos que afectan a la ciudadanía.

El objetivo es ofrecer una herramienta de información política que permita al usuario conocer su afinidad ideológica, comparar partidos y consultar qué propone cada formación sobre los principales problemas del país.

## Objetivos del proyecto

- Facilitar la comprensión de las propuestas políticas de los partidos españoles.
- Permitir comparar posiciones políticas de manera individualizada.
- Identificar coincidencias y diferencias entre las preferencias del usuario y los programas políticos.
- Diferenciar las promesas electorales de las actuaciones políticas reales.
- Proporcionar información contrastada mediante fuentes oficiales.
- Mantener actualizada la información sobre legislación, votaciones y actualidad política.

## Funcionalidades

### 1. Cuestionario político

Sistema de preguntas para identificar las preferencias ideológicas y políticas del usuario.

- Preguntas sobre diferentes áreas de política pública.
- Evaluación de afinidad con las posiciones de los partidos.
- Resultados personalizados.
- Comparación de afinidad ideológica general y por áreas.
- Posibilidad de identificar los asuntos en los que existen mayores discrepancias.

### 2. Temas de actualidad

Sección dedicada a los asuntos políticos y sociales que generan mayor interés ciudadano.

Cada tema dispone de su propia ficha, preguntas y comparativa de partidos.

#### Vivienda y alquiler
- Regulación del mercado del alquiler.
- Duración y prórroga de contratos.
- Protección de propietarios e inquilinos.
- Derogación o modificación de las medidas de vivienda.
- Construcción de vivienda pública y privada.
- Acceso a la primera vivienda.
- Ocupación y procedimientos de desalojo.
- Incentivos fiscales al alquiler.

#### Pensiones
- Revalorización de las pensiones.
- Sostenibilidad del sistema público.
- Edad de jubilación.
- Jubilación anticipada.
- Pensiones mínimas.
- Financiación del sistema.

#### Autónomos
- Cuotas y cotizaciones.
- Tarifa plana.
- Fiscalidad.
- Burocracia administrativa.
- Protección social.
- Medidas para pequeños negocios.

#### Impuestos e IRPF
- Tramos del IRPF.
- Reducciones y subidas fiscales.
- IVA.
- Impuesto de Sociedades.
- Patrimonio y sucesiones.
- Deducciones fiscales.

#### Ocupación y seguridad jurídica
- Allanamiento de morada y usurpación.
- Procedimientos de desalojo.
- Protección de propietarios.
- Protección de personas vulnerables.
- Reformas legislativas y judiciales.

#### Inmigración
- Política migratoria.
- Control de fronteras.
- Inmigración irregular.
- Regularizaciones.
- Expulsiones y devoluciones conforme a la legislación.
- Integración y acceso a servicios públicos.
- Política de asilo.

#### Empleo y economía
- Salario mínimo.
- Reforma laboral.
- Contratación.
- Desempleo juvenil.
- Jornada laboral.
- Productividad y conciliación.

### 3. Comparador de partidos

Comparación individualizada de las posiciones de las diferentes formaciones políticas.

Para cada partido se pretende mostrar:

- Propuestas electorales.
- Medidas legislativas.
- Iniciativas parlamentarias.
- Votaciones en el Congreso y el Senado.
- Leyes que pretende mantener, modificar o derogar.
- Medidas aplicadas durante su gestión.
- Declaraciones y posicionamientos oficiales.

Se contemplan diferentes estados para clasificar las posiciones:

| Estado | Significado |
|---|---|
| A favor | Apoya la medida |
| En contra | Rechaza la medida |
| Propone modificar | Defiende cambios |
| Propone derogar | Quiere eliminar la medida |
| Aplicada | Ha participado en su implementación |
| Sin propuesta conocida | No existe una propuesta identificada |
| Sin pronunciamiento | No se ha encontrado una posición pública |
| No concluyente | La información disponible es insuficiente |

La ausencia de información no se interpretará como oposición.

### 4. Análisis de actividad política

La aplicación diferencia tres dimensiones:

1. **Programa político:** qué promete cada partido.
2. **Actividad parlamentaria:** qué iniciativas presenta y cómo vota.
3. **Gestión política:** qué medidas consigue aprobar o implementar.

Esto permite contrastar las promesas con las actuaciones reales.

### 5. Comparación personalizada

El usuario podrá:

- Comparar dos o más partidos.
- Consultar una materia sin completar todo el cuestionario.
- Consultar su afinidad por áreas políticas.
- Identificar coincidencias y desacuerdos.
- Consultar las propuestas de cada formación.

Los resultados son informativos y no constituyen recomendaciones automáticas de voto.

## Fuentes de información

Se priorizarán fuentes oficiales y documentación verificable:

- [Boletín Oficial del Estado (BOE)](https://www.boe.es/)
- [Congreso de los Diputados](https://www.congreso.es/)
- [Senado](https://www.senado.es/)
- [Instituto Nacional de Estadística (INE)](https://www.ine.es/)
- [Seguridad Social](https://www.seg-social.es/)
- Ministerios y organismos públicos.
- Programas electorales y documentos oficiales de los partidos políticos.

Cada información relevante deberá incluir, cuando sea posible:

- Fuente original.
- Enlace al documento.
- Fecha de publicación.
- Fecha de actualización.
- Tipo de evidencia.

## Principios del proyecto

### Neutralidad política
Todos los partidos deben evaluarse utilizando los mismos criterios, independientemente de su ideología.

### Transparencia
Las afirmaciones deben estar respaldadas por fuentes verificables.

### Rigor
Se diferenciarán hechos, propuestas, declaraciones, opiniones e interpretaciones.

### Actualización
La información legislativa y política debe reflejar los cambios más recientes.

### Independencia del usuario
La aplicación facilita información para que cada ciudadano forme su propio criterio.

## Estructura funcional prevista

- Inicio
- Cuestionario general
- Resultados y afinidad política
- Temas de actualidad
- Fichas individuales de temas
- Comparador de partidos
- Seguimiento legislativo
- Fuentes y metodología

## Desarrollo

El proyecto se encuentra en desarrollo.

La implementación de nuevas funcionalidades debe respetar la arquitectura existente y priorizar:

- Reutilización de componentes.
- Modularidad.
- Escalabilidad.
- Diseño responsive.
- Mantenimiento sencillo.
- Separación entre datos, lógica y presentación.
- Verificación de la información política.

## Hoja de ruta

- [ ] Consolidar el cuestionario político general.
- [ ] Implementar las fichas individuales de temas de actualidad.
- [ ] Incorporar el comparador de partidos.
- [ ] Añadir comparativas de propuestas electorales.
- [ ] Incorporar el historial de votaciones parlamentarias.
- [ ] Diferenciar promesas, iniciativas y medidas aplicadas.
- [ ] Implementar fuentes y referencias verificables.
- [ ] Añadir seguimiento de novedades legislativas.
- [ ] Mejorar los resultados personalizados.
- [ ] Incorporar nuevos temas según la actualidad política.

## Contribuciones

Las contribuciones orientadas a mejorar la precisión de la información, la experiencia de usuario, la accesibilidad y la calidad técnica del proyecto son bienvenidas.

Toda aportación que incluya información política deberá proporcionar fuentes verificables y mantener los principios de neutralidad del proyecto.

## Licencia

Pendiente de definir.

---

**Un objetivo: entender qué propone cada partido, qué ha hecho realmente y qué piensa hacer con los problemas que más preocupan a los ciudadanos.**
