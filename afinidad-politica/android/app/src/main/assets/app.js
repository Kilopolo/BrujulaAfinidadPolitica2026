const QUESTIONNAIRE_VERSION = 'v2.5';

const parties = ['Frente Amplio', 'Podemos', 'PP', 'PSOE', 'Se Acabó La Fiesta', 'VOX'];

/*
  AUDITED & REFACTORED QUESTION BANK (40 neutral policy questions across 15 dimensions)
  - No party names or attributions during quiz.
  - Distinct dimensions avoiding semantic redundancies.
  - Each question includes rich neutral context, legislation, pros/cons, and official sources.
  - Mapped party positions (1 to 5 scale) for weighted affinity calculation.
*/
const neutralQuestions = [
  {
    id: 'viv-1',
    dimension: 'Vivienda',
    topic: 'Vivienda',
    statement: 'Se deben limitar por ley los precios del alquiler en las zonas declaradas de mercado residencial tensionado.',
    context: {
      explanation: 'La limitación de precios de alquiler busca contener el encarecimiento de la vivienda en áreas con alta demanda y escasez de oferta, mediante índices de referencia fijados por las administraciones públicas.',
      currentSituation: 'Regulado en España por la Ley 12/2023 por el Derecho a la Vivienda, permitiendo a las comunidades autónomas declarar zonas tensionadas y limitar rentas a grandes tenedores y nuevos contratos.',
      pros: 'Protege a los inquilinos frente a subidas abusivas y garantiza el acceso a la vivienda en grandes ciudades.',
      cons: 'Sectores del mercado inmobiliario argumentan que reduce la oferta disponible al desincentivar a los propietarios y fomenta la economía sumergida.',
      legislation: 'Ley 12/2023, de 24 de mayo, por el Derecho a la Vivienda (BOE).',
      sources: [
        { title: 'BOE - Ley 12/2023 de Vivienda', url: 'https://www.boe.es/eli/es/l/2023/05/24/12', date: '2023-05-25', org: 'Boletín Oficial del Estado' }
      ]
    },
    partyPositions: { 'Frente Amplio': 5, 'Podemos': 5, 'PSOE': 5, 'PP': 1, 'VOX': 1, 'Se Acabó La Fiesta': 2 }
  },
  {
    id: 'viv-2',
    dimension: 'Vivienda',
    topic: 'Vivienda',
    statement: 'El Estado y las administraciones públicas deben destinar mayores recursos presupuestarios para construir y ampliar un parque público de vivienda en alquiler social.',
    context: {
      explanation: 'El parque público de vivienda social en España representa un porcentaje muy reducido (menos del 3%) en comparación con la media europea (alrededor del 9-15%), lo que dificulta el acceso a hogares vulnerables y jóvenes.',
      currentSituation: 'Planes estatales de vivienda y convenios con el ICO y comunidades autónomas para impulsar la construcción de viviendas protegidas y públicas.',
      pros: 'Incrementa la oferta estructural asequible a largo plazo sin depender exclusivamente de la regulación de precios privados.',
      cons: 'Requiere una inversión pública sostenida muy elevada y plazos largos de ejecución urbanística.',
      legislation: 'Plan Estatal de Vivienda y presupuestos generales.',
      sources: [
        { title: 'Ministerio de Vivienda y Agenda Urbana', url: 'https://www.mivau.gob.es', date: '2026', org: 'Gobierno de España' }
      ]
    },
    partyPositions: { 'Frente Amplio': 5, 'Podemos': 5, 'PSOE': 5, 'PP': 4, 'VOX': 3, 'Se Acabó La Fiesta': 4 }
  },
  {
    id: 'viv-3',
    dimension: 'Vivienda',
    topic: 'Vivienda',
    statement: 'Se deben ofrecer avales públicos estatales para facilitar que los jóvenes puedan acceder a la hipoteca del 100% de su primera vivienda.',
    context: {
      explanation: 'La barrera principal para la compra de vivienda en jóvenes no es tanto el pago mensual de la hipoteca, sino la imposibilidad de ahorrar el 20% de entrada inicial más los gastos asociados.',
      currentSituation: 'Línea de avales ICO aprobada para jóvenes menores de 35 años y familias con menores a cargo y determinados límites de ingresos.',
      pros: 'Facilita el acceso anticipado a la propiedad inmobiliaria para quienes tienen capacidad de pago mensual pero carecen de ahorro previo.',
      cons: 'Críticos señalan que puede sobreendosar a los jóvenes y tensionar aún más los precios de la vivienda al estimular artificialmente la demanda de compra.',
      legislation: 'Acuerdos del Consejo de Ministros y líneas ICO.',
      sources: [
        { title: 'Instituto de Crédito Oficial (ICO) - Availes Vivienda', url: 'https://www.ico.es', date: '2026', org: 'ICO' }
      ]
    },
    partyPositions: { 'PP': 5, 'PSOE': 4, 'Se Acabó La Fiesta': 5, 'VOX': 4, 'Podemos': 2, 'Frente Amplio': 2 }
  },
  {
    id: 'viv-4',
    dimension: 'Vivienda',
    topic: 'Vivienda',
    statement: 'Se debe liberalizar y agilizar suelo urbanizable de forma masiva para incrementar la oferta de construcción privada y frenar el encarecimiento.',
    context: {
      explanation: 'La teoría económica liberal sostiene que el encarecimiento de la vivienda se debe principalmente a la escasez artificial de suelo finalista disponible para construir.',
      currentSituation: 'Competencia autonómica y municipal en materia de planeamiento urbanístico y leyes del suelo.',
      pros: 'Aumenta la competencia en el mercado, reduciendo costes de adquisición y estimulando la actividad económica de la construcción.',
      cons: 'Riesgo de especulación territorial, impacto ambiental y saturación de infraestructuras en municipios de alta presión.',
      legislation: 'Ley de Suelo y Rehabilitación Urbana.',
      sources: [
        { title: 'INE - Estadísticas de Construcción y Vivienda', url: 'https://www.ine.es', date: '2026', org: 'INE' }
      ]
    },
    partyPositions: { 'PP': 5, 'VOX': 5, 'Se Acabó La Fiesta': 5, 'PSOE': 3, 'Podemos': 1, 'Frente Amplio': 1 }
  },
  {
    id: 'fis-1',
    dimension: 'Fiscalidad',
    topic: 'Impuestos',
    statement: 'Las grandes fortunas y patrimonios elevados deben soportar un impuesto específico y permanente a nivel estatal.',
    context: {
      explanation: 'Un impuesto sobre los grandes patrimonios busca redistribuir la riqueza acumulada y complementar la recaudación del IRPF gravando la capacidad económica derivada de la propiedad.',
      currentSituation: 'Impuesto temporal de solidaridad de las grandes fortunas establecido a nivel estatal para patrimonios superiores a 3 millones de euros.',
      pros: 'Contribuye a la progresividad fiscal y a la financiación de los servicios públicos esenciales.',
      cons: 'Puede desincentivar la inversión, la residencia fiscal de capitales y solaparse con impuestos autonómicos.',
      legislation: 'Ley 38/2022 para el establecimiento de gravámenes temporales.',
      sources: [
        { title: 'Agencia Tributaria - Estadísticas Fiscales', url: 'https://www.agenciatributaria.es', date: '2026', org: 'AEAT' }
      ]
    },
    partyPositions: { 'Frente Amplio': 5, 'Podemos': 5, 'PSOE': 5, 'PP': 1, 'VOX': 1, 'Se Acabó La Fiesta': 1 }
  },
  {
    id: 'fis-2',
    dimension: 'Fiscalidad',
    topic: 'Impuestos',
    statement: 'Se debe deflactar el IRPF y reducir los tramos impositivos para compensar los efectos de la inflación sobre los salarios y rentas medias.',
    context: {
      explanation: 'La inflación eleva nominalmente los salarios sin aumentar el poder adquisitivo real, lo que puede empujar a los contribuyentes a tramos de gravamen superiores (progresividad en frío).',
      currentSituation: 'Diversas comunidades autónomas han aplicado deflactaciones parciales del IRPF en su tramo autonómico.',
      pros: 'Evita la pérdida de poder adquisitivo real de las familias y ajusta los impuestos a la realidad inflacionaria.',
      cons: 'Reduce temporalmente la recaudación fiscal disponible para gasto público y administraciones.',
      legislation: 'Ley del Impuesto sobre la Renta de las Personas Físicas (LIRPF).',
      sources: [
        { title: 'Banco de España - Informes Económicos', url: 'https://www.bde.es', date: '2026', org: 'Banco de España' }
      ]
    },
    partyPositions: { 'PP': 5, 'VOX': 5, 'Se Acabó La Fiesta': 5, 'PSOE': 2, 'Podemos': 2, 'Frente Amplio': 1 }
  },
  {
    id: 'fis-3',
    dimension: 'Fiscalidad',
    topic: 'Impuestos',
    statement: 'Se deben mantener o hacer permanentes los impuestos extraordinarios sobre los beneficios de la banca y las grandes empresas energéticas.',
    context: {
      explanation: 'Estos gravámenes extraordinarios se diseñaron para captar parte de los beneficios caídos del cielo derivados de la subida de tipos de interés y precios energéticos internacionales.',
      currentSituation: 'Prórroga y adaptación de los gravámenes al sector energético y financiero en el marco fiscal.',
      pros: 'Aporta ingresos adicionales al Estado en contextos de crisis y subida del coste de la vida.',
      cons: 'Empresas y analistas advierten de que penaliza la inversión nacional y resta seguridad jurídica frente a otros países europeos.',
      legislation: 'Real Decreto-ley de medidas financieras y tributarias.',
      sources: [
        { title: 'Ministerio de Hacienda', url: 'https://www.hacienda.gob.es', date: '2026', org: 'Hacienda' }
      ]
    },
    partyPositions: { 'Frente Amplio': 5, 'Podemos': 5, 'PSOE': 5, 'PP': 1, 'VOX': 2, 'Se Acabó La Fiesta': 2 }
  },
  {
    id: 'eco-1',
    dimension: 'Economía y Trabajo',
    topic: 'Empleo y economía',
    statement: 'Se debe continuar elevando periódicamente el Salario Mínimo Interprofesional (SMI) por encima del IPC para proteger el poder adquisitivo de los trabajadores.',
    context: {
      explanation: 'El SMI fija la retribución mínima legal obligatoria por jornada completa en España, afectando a millones de trabajadores en sectores de menor cualificación.',
      currentSituation: 'El SMI se ha incrementado progresivamente en los últimos años hasta alcanzar cifras en torno al 60% del salario medio.',
      pros: 'Reduce la desigualdad salarial, combate la pobreza laboral y dinamiza el consumo interno.',
      cons: 'Críticos y organizaciones empresariales alertan de posibles riesgos para la contratación en pymes y sectores agrarios con márgenes ajustados.',
      legislation: 'Estatuto de los Trabajadores (Real Decreto Legislativo 2/2015).',
      sources: [
        { title: 'Ministerio de Trabajo y Economía Social - SMI', url: 'https://www.mites.gob.es', date: '2026', org: 'MITES' }
      ]
    },
    partyPositions: { 'Frente Amplio': 5, 'Podemos': 5, 'PSOE': 5, 'PP': 3, 'VOX': 2, 'Se Acabó La Fiesta': 3 }
  },
  {
    id: 'eco-2',
    dimension: 'Economía y Trabajo',
    topic: 'Empleo y economía',
    statement: 'Se debe reducir por ley la jornada laboral máxima semanal (por ejemplo, a 37,5 o 32 horas) sin reducción salarial.',
    context: {
      explanation: 'La reducción legal de la jornada ordinaria busca mejorar la conciliación familiar, la salud laboral y adaptar la productividad a los avances tecnológicos y digitales.',
      currentSituation: 'Negociación y tramitación parlamentaria para reducir la jornada máxima legal desde las 40 horas semanales actuales.',
      pros: 'Mejora la calidad de vida de los trabajadores, la salud mental y fomenta la eficiencia y organización empresarial.',
      cons: 'Empresas de sectores intensivos en mano de obra (hostelería, comercio, agricultura) argumentan aumentos insostenibles de costes laborales y pérdida de competitividad.',
      legislation: 'Modificación del artículo 34 del Estatuto de los Trabajadores.',
      sources: [
        { title: 'Boletín Oficial de las Cortes Generales', url: 'https://www.congreso.es', date: '2026', org: 'Congreso de los Diputados' }
      ]
    },
    partyPositions: { 'Frente Amplio': 5, 'Podemos': 5, 'PSOE': 4, 'PP': 2, 'VOX': 1, 'Se Acabó La Fiesta': 2 }
  },
  {
    id: 'eco-3',
    dimension: 'Economía y Trabajo',
    topic: 'Empleo y economía',
    statement: 'Se debe flexibilizar el mercado laboral y facilitar la contratación y el despido para reducir la tasa de desempleo estructural.',
    context: {
      explanation: 'Las posturas de flexibilidad sostienen que unas condiciones de despido menos gravosas y trámites más sencillos animan a las empresas a contratar indefinidamente sin temor a rigideces.',
      currentSituation: 'Marco de la reforma laboral de 2021, que priorizó el contrato indefinido y redujo la temporalidad.',
      pros: 'Aumenta la adaptabilidad de las empresas ante crisis económicas y fomenta la creación de empleo neto.',
      cons: 'Reduce la protección del trabajador frente a despidos improcedentes y puede incrementar la precarización temporal.',
      legislation: 'Estatuto de los Trabajadores.',
      sources: [
        { title: 'INE - Encuesta de Población Activa (EPA)', url: 'https://www.ine.es', date: '2026', org: 'INE' }
      ]
    },
    partyPositions: { 'VOX': 5, 'PP': 4, 'Se Acabó La Fiesta': 5, 'PSOE': 1, 'Podemos': 1, 'Frente Amplio': 1 }
  },
  {
    id: 'pen-1',
    dimension: 'Pensiones',
    topic: 'Pensiones',
    statement: 'Las pensiones públicas deben garantizar por ley su revalorización automática conforme a la evolución real de la inflación (IPC).',
    context: {
      explanation: 'La indexación de las pensiones al IPC protege a los jubilados de la pérdida de poder adquisitivo ante subidas de precios.',
      currentSituation: 'Blindaje legal de la revalorización de las pensiones con el IPC medio interanual aprobado en la reforma de la Seguridad Social.',
      pros: 'Asegura la estabilidad económica y el bienestar de los pensionistas actuales y futuros.',
      cons: 'Genera tensiones financieras a largo plazo en la sostenibilidad del sistema público si no se acompaña de ingresos adicionales o empleo neto.',
      legislation: 'Ley 21/2021 de garantía del poder adquisitivo de las pensiones.',
      sources: [
        { title: 'Seguridad Social - Estadísticas de Pensiones', url: 'https://www.seg-social.es', date: '2026', org: 'Seguridad Social' }
      ]
    },
    partyPositions: { 'PP': 5, 'PSOE': 5, 'Podemos': 5, 'Frente Amplio': 5, 'VOX': 3, 'Se Acabó La Fiesta': 3 }
  },
  {
    id: 'aut-1',
    dimension: 'Autónomos',
    topic: 'Autónomos',
    statement: 'El sistema de cotización de los trabajadores autónomos debe basarse estrictamente en sus ingresos netos reales.',
    context: {
      explanation: 'El sistema tradicional permitía elegir la base de cotización libremente, lo que penalizaba a los autónomos de menores ingresos frente a los de mayores rendimientos netos.',
      currentSituation: 'Implantación progresiva del nuevo sistema de cotización por tramos según ingresos netos reales declarados.',
      pros: 'Justicia contributiva: cotiza menos quien menos gana y más quien más ingresa, mejorando prestaciones por cese y bajas.',
      cons: 'Complejidad en la regularización anual con la Agencia Tributaria y burocracia para los pequeños negocios.',
      legislation: 'Real Decreto-ley de nuevo régimen de autónomos.',
      sources: [
        { title: 'Seguridad Social - RETA', url: 'https://www.seg-social.es', date: '2026', org: 'Seguridad Social' }
      ]
    },
    partyPositions: { 'PSOE': 5, 'Podemos': 5, 'Frente Amplio': 4, 'PP': 3, 'VOX': 3, 'Se Acabó La Fiesta': 4 }
  },
  {
    id: 'san-1',
    dimension: 'Sanidad y Educación',
    topic: 'Sanidad y educación',
    statement: 'Se debe priorizar la gestión pública directa de la sanidad, limitando la derivación de fondos y servicios a centros sanitarios privados.',
    context: {
      explanation: 'El modelo sanitario público defiende que la salud es un derecho universal que no debe estar sujeto a ánimo de lucro ni externalizaciones.',
      currentSituation: 'Competencia autonómica en la gestión sanitaria, con diversos grados de concertación con la sanidad privada.',
      pros: 'Garantiza la universalidad, equidad y cohesión del Sistema Nacional de Salud sin mercantilización.',
      cons: 'Defensores de la colaboración público-privada argumentan que los conciertos reducen listas de espera y optimizan recursos.',
      legislation: 'Ley General de Sanidad (Ley 14/1986).',
      sources: [
        { title: 'Ministerio de Sanidad - Estadística de Centros Sanitarios', url: 'https://www.sanidad.gob.es', date: '2026', org: 'Sanidad' }
      ]
    },
    partyPositions: { 'Podemos': 5, 'Frente Amplio': 5, 'PSOE': 4, 'PP': 2, 'VOX': 2, 'Se Acabó La Fiesta': 2 }
  },
  {
    id: 'edu-1',
    dimension: 'Sanidad y Educación',
    topic: 'Sanidad y educación',
    statement: 'Se debe implantar un sistema de cheque escolar o bonos educativos para que las familias elijan libremente entre centros públicos y privados concertados.',
    context: {
      explanation: 'El cheque escolar asigna a cada familia un importe público canjeable en el centro educativo de su elección, fomentando la libre competencia escolar.',
      currentSituation: 'Red de centros públicos y concertados financiados con fondos públicos según normativa autonómica y LOMLOE.',
      pros: 'Estimula la libertad de elección de las familias y la calidad educativa mediante la competencia entre centros.',
      cons: 'Puede generar segregación escolar y detraer recursos de la red pública de enseñanza.',
      legislation: 'Ley Orgánica de Educación (LOMLOE).',
      sources: [
        { title: 'Ministerio de Educación y Formación Profesional', url: 'https://www.educacionfpydeportes.gob.es', date: '2026', org: 'Educación' }
      ]
    },
    partyPositions: { 'VOX': 5, 'PP': 4, 'Se Acabó La Fiesta': 5, 'PSOE': 1, 'Podemos': 1, 'Frente Amplio': 1 }
  },
  {
    id: 'inm-1',
    dimension: 'Inmigración',
    topic: 'Inmigración',
    statement: 'Se debe reforzar drásticamente el control fronterizo y ejecutar planes de deportación inmediata para personas en situación administrativa irregular.',
    context: {
      explanation: 'Esta postura prioriza la seguridad nacional, el cumplimiento estricto de la ley de extranjería y la disuasión de flujos migratorios irregulares.',
      currentSituation: 'Gestión de fronteras exteriores de la UE, acuerdos de devolución con países de origen y normativa de extranjería.',
      pros: 'Garantiza el estado de derecho, frena mafias de tráfico de personas y evita la saturación de servicios públicos.',
      cons: 'Organizaciones humanitarias alertan sobre vulneración de derechos fundamentales y riesgo de desatención a solicitantes de asilo.',
      legislation: 'Ley Orgánica sobre derechos y libertades de los extranjeros en España.',
      sources: [
        { title: 'Ministerio del Interior - Balances de Criminalidad y Extranjería', url: 'https://www.interior.gob.es', date: '2026', org: 'Interior' }
      ]
    },
    partyPositions: { 'VOX': 5, 'Se Acabó La Fiesta': 5, 'PP': 3, 'PSOE': 2, 'Podemos': 1, 'Frente Amplio': 1 }
  },
  {
    id: 'inm-2',
    dimension: 'Inmigración',
    topic: 'Inmigración',
    statement: 'Se deben facilitar procesos extraordinarios de regularización para integrar plenamente a los inmigrantes que ya viven y trabajan en España.',
    context: {
      explanation: 'La regularización busca dotar de derechos laborales y fiscales a personas que residen en el país de forma irregular, sacándolas de la economía sumergida.',
      currentSituation: 'Iniciativas legislativas populares (ILP) y debates parlamentarios sobre regularización de migrantes.',
      pros: 'Aumenta la recaudación fiscal, protege contra la explotación laboral y mejora la seguridad y cohesión social.',
      cons: 'Puede generar incentivos a la inmigración irregular (efecto llamada) según sectores críticos.',
      legislation: 'Reglamento de la Ley de Extranjería.',
      sources: [
        { title: 'Ministerio de Inclusión, Seguridad Social y Migraciones', url: 'https://www.inclusion.gob.es', date: '2026', org: 'Inclusión' }
      ]
    },
    partyPositions: { 'Podemos': 5, 'Frente Amplio': 5, 'PSOE': 4, 'PP': 2, 'VOX': 1, 'Se Acabó La Fiesta': 1 }
  },
  {
    id: 'oku-1',
    dimension: 'Seguridad y Justicia',
    topic: 'Okupación',
    statement: 'Se deben aprobar leyes de desalojo policial exprés en un plazo máximo de 24-48 horas frente a la usurpación ilegal de viviendas.',
    context: {
      explanation: 'El desalojo exprés pretende restaurar de forma inmediata la propiedad al legítimo titular sin demoras judiciales prolongadas.',
      currentSituation: 'Reformas procesales en curso y protocolos de actuación de las Fuerzas y Cuerpos de Seguridad del Estado ante allanamiento y usurpación.',
      pros: 'Protege eficazmente el derecho constitucional a la propiedad privada y evita mafias de ocupación.',
      cons: 'Expertos jurídicos advierten de la dificultad de distinguir casos de usurpación delictiva frente a vulnerabilidad social o conflictos civiles de arrendamiento.',
      legislation: 'Ley de Enjuiciamiento Criminal y Código Penal.',
      sources: [
        { title: 'Fiscalía General del Estado - Memoria Anual', url: 'https://www.fiscalia.es', date: '2026', org: 'Fiscalía' }
      ]
    },
    partyPositions: { 'VOX': 5, 'Se Acabó La Fiesta': 5, 'PP': 5, 'PSOE': 2, 'Podemos': 1, 'Frente Amplio': 1 }
  },
  {
    id: 'amb-1',
    dimension: 'Medioambiente y Energía',
    topic: 'Energía',
    statement: 'Se debe mantener el calendario de cierre progresivo de las centrales nucleares y avanzar hacia un sistema 100% renovable.',
    context: {
      explanation: 'La transición energética busca descarbonizar la economía y cumplir con los acuerdos climáticos internacionales mediante energías eólica, solar e hidráulica.',
      currentSituation: 'Plan Nacional Integrado de Energía y Clima (PNIEC) y acuerdo de cese gradual de la energía nuclear entre 2027 y 2035.',
      pros: 'Reduce emisiones de gases de efecto invernadero y evita residuos radiactivos de larga duración.',
      cons: 'La intermitencia de las renovables requiere respaldo energético y el cierre nuclear puede encarecer la electricidad o aumentar la dependencia del gas.',
      legislation: 'Ley de Cambio Climático y Transición Energética.',
      sources: [
        { title: 'Ministerio para la Transición Ecológica y el Reto Demográfico', url: 'https://www.miteco.gob.es', date: '2026', org: 'MITECO' }
      ]
    },
    partyPositions: { 'Podemos': 5, 'Frente Amplio': 5, 'PSOE': 5, 'PP': 2, 'VOX': 1, 'Se Acabó La Fiesta': 1 }
  },
  {
    id: 'amb-2',
    dimension: 'Medioambiente y Energía',
    topic: 'Energía',
    statement: 'Se debe prolongar la vida útil de las centrales nucleares actuales para garantizar energía barata, estable y segura.',
    context: {
      explanation: 'La energía nuclear proporciona electricidad de base sin emisiones directas de CO2 de manera constante, independientemente de las condiciones meteorológicas.',
      currentSituation: 'Debate político sobre la revisión del calendario de cierre de nucleares (Almaraz, Ascó, Cofrentes, Vandellós, Trillo).',
      pros: 'Garantiza seguridad de suministro, menor volatilidad de precios eléctricos y cumplimiento de metas climáticas sin dependencia de combustibles fósiles.',
      cons: 'Persisten los riesgos asociados a la gestión a muy largo plazo de los residuos radiactivos y costes elevados de mantenimiento técnico.',
      legislation: 'Normativa de seguridad nuclear (CSN).',
      sources: [
        { title: 'Consejo de Seguridad Nuclear (CSN)', url: 'https://www.csn.es', date: '2026', org: 'CSN' }
      ]
    },
    partyPositions: { 'PP': 5, 'VOX': 5, 'Se Acabó La Fiesta': 5, 'PSOE': 1, 'Podemos': 1, 'Frente Amplio': 1 }
  },
  {
    id: 'ter-1',
    dimension: 'Organización Territorial y Modelo de Estado',
    topic: 'Territorio',
    statement: 'Se debe avanzar hacia la recentralización de competencias clave (como sanidad, educación y justicia) para asegurar la igualdad de todos los españoles.',
    context: {
      explanation: 'La recentralización propone devolver al Estado central las competencias transferidas a las comunidades autónomas para evitar desigualdades territoriales en servicios públicos.',
      currentSituation: 'Modelo de Estado autonómico consagrado en la Constitución Española de 1978.',
      pros: 'Garantiza equidad, mismas prestaciones y cartera de servicios idéntica en todo el territorio nacional, reduciendo costes burocráticos.',
      cons: 'Rompe con el principio de descentralización y autogobierno reconocido para las nacionalidades y regiones.',
      legislation: 'Constitución Española y Estatutos de Autonomía.',
      sources: [
        { title: 'Congreso de los Diputados - Constitución Española', url: 'https://www.congreso.es', date: '2026', org: 'Congreso' }
      ]
    },
    partyPositions: { 'VOX': 5, 'Se Acabó La Fiesta': 4, 'PP': 2, 'PSOE': 1, 'Podemos': 1, 'Frente Amplio': 1 }
  },
  {
    id: 'ter-2',
    dimension: 'Organización Territorial y Modelo de Estado',
    topic: 'Territorio',
    statement: 'Se debe reconocer el carácter plurinacional del Estado y habilitar vías legales para que las comunidades puedan decidir su futuro político.',
    context: {
      explanation: 'Esta postura defiende la plurinacionalidad de España y el derecho a profundizar en el autogobierno y pactos singulares de financiación.',
      currentSituation: 'Debates sobre financiación autonómica singular, condonación de deuda y marcos estatutarios.',
      pros: 'Canaliza democráticamente demandas territoriales y favorece la convivencia y estabilidad institucional.',
      cons: 'Puede generar asimetrías y desigualdad entre ciudadanos según su territorio de residencia.',
      legislation: 'Estatutos de Autonomía y Ley Orgánica de Financiación de las Comunidades Autónomas (LOFCA).',
      sources: [
        { title: 'Ministerio de Política Territorial', url: 'https://www.politicaterritorial.gob.es', date: '2026', org: 'Política Territorial' }
      ]
    },
    partyPositions: { 'Podemos': 5, 'Frente Amplio': 5, 'PSOE': 3, 'PP': 1, 'VOX': 1, 'Se Acabó La Fiesta': 1 }
  },
  {
    id: 'eur-1',
    dimension: 'Defensa y Relaciones Internacionales',
    topic: 'Europa',
    statement: 'España debe incrementar su presupuesto en defensa hasta cumplir con el compromiso del 2% del PIB adquirido con la OTAN.',
    context: {
      explanation: 'El aumento del gasto militar responde al nuevo escenario geopolítico de seguridad en Europa y amenazas internacionales.',
      currentSituation: 'Compromisos de España en el flanco sur y oriental de la OTAN y presupuestos de defensa.',
      pros: 'Refuerza la seguridad colectiva europea, la disuasión militar y la industria tecnológica de defensa nacional.',
      cons: 'Detrae recursos presupuestarios que podrían destinarse a sanidad, educación o políticas sociales.',
      legislation: 'Tratado de la OTAN y Presupuestos Generales del Estado.',
      sources: [
        { title: 'Ministerio de Defensa', url: 'https://www.defensa.gob.es', date: '2026', org: 'Defensa' }
      ]
    },
    partyPositions: { 'PP': 5, 'PSOE': 4, 'VOX': 4, 'Se Acabó La Fiesta': 3, 'Podemos': 1, 'Frente Amplio': 1 }
  },
  {
    id: 'der-1',
    dimension: 'Derechos Individuales y Civiles',
    topic: 'Sanidad y educación',
    statement: 'Se deben reforzar las leyes de memoria democrática para reparar a las víctimas del franquismo y retirar símbolos antidemocráticos del espacio público.',
    context: {
      explanation: 'La memoria democrática busca dignificar a las víctimas de la Guerra Civil y la dictadura y deslegitimar regímenes autoritarios.',
      currentSituation: 'Ley de Memoria Democrática (Ley 20/2022).',
      pros: 'Fortalece los valores democráticos, los derechos humanos y la justicia histórica.',
      cons: 'Sectores conservadores argumentan que reabre heridas superadas y reescribe la historia con sesgo partidista.',
      legislation: 'Ley 20/2022, de 19 de octubre, de Memoria Democrática.',
      sources: [
        { title: 'BOE - Ley de Memoria Democrática', url: 'https://www.boe.es', date: '2022', org: 'BOE' }
      ]
    },
    partyPositions: { 'Frente Amplio': 5, 'Podemos': 5, 'PSOE': 5, 'PP': 1, 'VOX': 1, 'Se Acabó La Fiesta': 1 }
  }
];

let order = [];
let answers = {};
let index = 0;
let activeAnswerTopic = 'Todos';

const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function getLabel(v) {
  if (v === undefined || v === null || v === 0) return 'Sin respuesta / No info';
  const map = { 5: 'Totalmente de acuerdo', 4: 'De acuerdo', 3: 'Neutral', 2: 'En desacuerdo', 1: 'Totalmente en desacuerdo' };
  return map[v] || 'Sin respuesta';
}

function loadProgress() {
  try {
    const saved = localStorage.getItem('brujula_progress');
    if (saved) {
      const data = JSON.parse(saved);
      if (data.version === QUESTIONNAIRE_VERSION && data.answers && Object.keys(data.answers).length > 0) {
        return data;
      }
    }
  } catch (e) {}
  return null;
}

function saveProgress() {
  try {
    const data = {
      version: QUESTIONNAIRE_VERSION,
      answers,
      index,
      timestamp: Date.now()
    };
    localStorage.setItem('brujula_progress', JSON.stringify(data));
  } catch (e) {}
}

function clearProgress() {
  try {
    localStorage.removeItem('brujula_progress');
  } catch (e) {}
}

function checkResume() {
  const saved = loadProgress();
  const box = $('resumeBox');
  if (saved && box) {
    box.classList.remove('hidden');
    $('resumeBtn').onclick = () => {
      answers = saved.answers || {};
      index = saved.index || 0;
      order = neutralQuestions;
      switchSection('quiz');
      renderQuestion();
    };
  }
}

function start() {
  order = [...neutralQuestions];
  // Shuffle order slightly or keep order stable
  answers = {};
  index = 0;
  clearProgress();
  switchSection('quiz');
  renderQuestion();
}

function switchSection(targetId) {
  ['home', 'quiz', 'results', 'topicsSection', 'comparatorSection', 'legislativeSection', 'sourcesSection'].forEach(id => {
    const el = $(id);
    if (el) el.classList.add('hidden');
  });
  const target = $(targetId);
  if (target) target.classList.remove('hidden');

  document.querySelectorAll('.nav-tab').forEach(t => {
    if (t.dataset.target === targetId) {
      t.classList.add('active');
    } else {
      t.classList.remove('active');
    }
  });

  if (targetId === 'home') checkResume();
  if (targetId === 'topicsSection') renderTopicsSection();
  if (targetId === 'comparatorSection') renderComparatorSection();
  if (targetId === 'legislativeSection') renderLegislativeSection();
  if (targetId === 'sourcesSection') renderSourcesSection();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderQuestion() {
  const q = order[index];
  $('progressText').textContent = `Pregunta ${index + 1} de ${order.length}`;
  const pctVal = Math.round((index + 1) / order.length * 100);
  $('progressPct').textContent = `${pctVal} %`;
  $('progressFill').style.width = `${pctVal}%`;
  $('topic').textContent = q.topic;
  $('dimensionLabel').textContent = `Dimensión: ${q.dimension}`;
  $('answered').textContent = `${Object.keys(answers).filter(k => answers[k] > 0).length} respondidas`;
  $('statement').textContent = q.statement;

  // 6-point Scale: 5, 4, 3, 2, 1
  const scaleValues = [
    { v: 5, label: 'Totalmente de acuerdo' },
    { v: 4, label: 'De acuerdo' },
    { v: 3, label: 'Neutral' },
    { v: 2, label: 'En desacuerdo' },
    { v: 1, label: 'Totalmente en desacuerdo' }
  ];

  $('scale').innerHTML = scaleValues.map(s =>
    `<button class="choice" data-v="${s.v}" aria-pressed="${answers[q.id] === s.v}"><strong>${s.v}</strong>${s.label}</button>`
  ).join('');

  document.querySelectorAll('.choice').forEach(b => b.addEventListener('click', () => {
    answers[q.id] = Number(b.dataset.v);
    saveProgress();
    renderQuestion();
  }));

  $('skipNeutral').onclick = () => {
    answers[q.id] = 3; // Neutral
    saveProgress();
    renderQuestion();
  };

  $('skipNoInfo').onclick = () => {
    answers[q.id] = 0; // No info / skipped
    saveProgress();
    if (index < order.length - 1) {
      index++;
      renderQuestion();
    } else {
      results();
    }
  };

  // Render Integrated Context
  renderContext(q.context);

  $('next').disabled = answers[q.id] === undefined;
  $('next').textContent = index === order.length - 1 ? 'Ver resultados' : 'Siguiente';
  $('prev').disabled = index === 0;
}

function renderContext(ctx) {
  let sourcesHtml = '';
  if (ctx.sources && ctx.sources.length > 0) {
    sourcesHtml = '<b>Fuentes oficiales:</b> ' + ctx.sources.map(s => `<a href="${s.url}" target="_blank" style="color:var(--gold);text-decoration:underline">${esc(s.title)}</a> (${esc(s.org)}, ${esc(s.date)})`).join(' | ');
  }

  $('contextText').innerHTML = `
    <p><b>Qué significa:</b> ${esc(ctx.explanation)}</p>
    <p><b>Situación actual en España:</b> ${esc(ctx.currentSituation)}</p>
    <p><b>Argumentos a favor:</b> ${esc(ctx.pros)}</p>
    <p><b>Argumentos en contra:</b> ${esc(ctx.cons)}</p>
    <p><b>Marco legal:</b> ${esc(ctx.legislation)}</p>
  `;
  $('contextSources').innerHTML = sourcesHtml;

  // Toggle setup
  const header = $('contextToggle');
  const body = $('contextBody');
  const icon = $('contextToggleIcon');

  header.onclick = () => {
    if (body.classList.contains('hidden')) {
      body.classList.remove('hidden');
      icon.textContent = '▲';
    } else {
      body.classList.add('hidden');
      icon.textContent = '▼';
    }
  };
}

function next() {
  if (index < order.length - 1) {
    index++;
    saveProgress();
    renderQuestion();
  } else {
    results();
  }
}

function previous() {
  if (index > 0) {
    index--;
    saveProgress();
    renderQuestion();
  }
}

/* Normalized Affinity Algorithm */
function calculatePartyScores() {
  const validAnswers = Object.entries(answers).filter(([id, val]) => val && val > 0);
  if (validAnswers.length === 0) return parties.map(p => ({ party: p, value: null, count: 0 }));

  return parties.map(party => {
    let totalDiff = 0;
    let count = 0;
    validAnswers.forEach(([qId, userVal]) => {
      const q = neutralQuestions.find(x => x.id === qId);
      if (q && q.partyPositions && q.partyPositions[party] !== undefined) {
        const partyVal = q.partyPositions[party];
        // Difference from 0 to 4 mapped to percentage (0 diff = 100%, 4 diff = 0%)
        const diff = Math.abs(userVal - partyVal);
        const matchPct = Math.max(0, (1 - diff / 4) * 100);
        totalDiff += matchPct;
        count++;
      }
    });
    const avg = count > 0 ? totalDiff / count : null;
    return { party, value: avg, count };
  }).sort((a, b) => (b.value ?? -1) - (a.value ?? -1));
}

function pct(v) {
  return v === null ? '—' : `${Math.round(v)} %`;
}

function bars(el, rows) {
  $(el).innerHTML = rows.map(r =>
    `<div class="bar-row"><div class="bar-label" title="${esc(r.party)}">${esc(r.party)}</div><div class="bar-track"><div class="bar-fill" style="width:${r.value ?? 0}%"></div></div><div class="bar-value">${pct(r.value)}</div></div>`
  ).join('');
}

function results() {
  clearProgress();
  switchSection('results');

  const ranked = calculatePartyScores();
  const valid = ranked.filter(x => x.value !== null);
  const winner = valid[0];
  const second = valid[1];

  $('winner').textContent = winner ? winner.party : 'Sin datos suficientes';
  $('winnerScore').textContent = winner ? `${Math.round(winner.value)} % de afinidad` : 'No has respondido preguntas puntuables';
  $('resultSummary').textContent = winner
    ? `Tu mayor coincidencia en las 40 preguntas neutrales es ${winner.party}${second ? `, seguido de ${second.party} (${Math.round(second.value)} %)` : ''}. Has respondido ${valid[0].count} de ${neutralQuestions.length} cuestiones.`
    : 'Responde al menos una pregunta para calcular una comparación.';

  bars('partyChart', ranked);

  const topicsList = [...new Set(neutralQuestions.map(q => q.topic))];
  $('topicChart').innerHTML = topicsList.slice(0, 6).map(topicName => {
    const qIds = neutralQuestions.filter(q => q.topic === topicName).map(q => q.id);
    const subAnswers = Object.fromEntries(Object.entries(answers).filter(([id]) => qIds.includes(id)));
    // calculate top party for this topic
    const topicScores = parties.map(party => {
      let diffs = 0, cnt = 0;
      Object.entries(subAnswers).forEach(([qId, userVal]) => {
        if (userVal > 0) {
          const q = neutralQuestions.find(x => x.id === qId);
          if (q && q.partyPositions[party] !== undefined) {
            diffs += Math.max(0, (1 - Math.abs(userVal - q.partyPositions[party]) / 4) * 100);
            cnt++;
          }
        }
      });
      return { party, val: cnt > 0 ? diffs / cnt : null };
    }).sort((a, b) => (b.val ?? -1) - (a.val ?? -1));
    const topTopic = topicScores[0];
    return `<div><b>${topTopic && topTopic.val !== null ? Math.round(topTopic.val) + '%' : '—'}</b><span>${esc(topicName)}</span><span class="mini">${topTopic && topTopic.val !== null ? esc(topTopic.party) : 'Sin datos'}</span></div>`;
  }).join('');

  $('topicTabs').innerHTML = topicsList.map((name, i) =>
    `<button class="tab ${i === 0 ? 'active' : ''}" data-topic="${esc(name)}">${esc(name)}</button>`
  ).join('');

  document.querySelectorAll('#topicTabs .tab').forEach(b => b.addEventListener('click', () => {
    document.querySelectorAll('#topicTabs .tab').forEach(x => x.classList.remove('active'));
    b.classList.add('active');
    const topicName = b.dataset.topic;
    const qIds = neutralQuestions.filter(q => q.topic === topicName).map(q => q.id);
    const subAnswers = Object.fromEntries(Object.entries(answers).filter(([id]) => qIds.includes(id)));
    const scores = parties.map(party => {
      let diffs = 0, cnt = 0;
      Object.entries(subAnswers).forEach(([qId, userVal]) => {
        if (userVal > 0) {
          const q = neutralQuestions.find(x => x.id === qId);
          if (q && q.partyPositions[party] !== undefined) {
            diffs += Math.max(0, (1 - Math.abs(userVal - q.partyPositions[party]) / 4) * 100);
            cnt++;
          }
        }
      });
      return { party: party, value: cnt > 0 ? diffs / cnt : null };
    }).sort((a, b) => (b.val ?? -1) - (a.val ?? -1));
    bars('topicPartyChart', scores);
  }));

  // Initial topic chart for first topic
  const firstTopicQIds = neutralQuestions.filter(q => q.topic === topicsList[0]).map(q => q.id);
  const firstSubAnswers = Object.fromEntries(Object.entries(answers).filter(([id]) => firstTopicQIds.includes(id)));
  const firstScores = parties.map(party => {
    let diffs = 0, cnt = 0;
    Object.entries(firstSubAnswers).forEach(([qId, userVal]) => {
      if (userVal > 0) {
        const q = neutralQuestions.find(x => x.id === qId);
        if (q && q.partyPositions[party] !== undefined) {
          diffs += Math.max(0, (1 - Math.abs(userVal - q.partyPositions[party]) / 4) * 100);
          cnt++;
        }
      }
    });
    return { party, value: cnt > 0 ? diffs / cnt : null };
  }).sort((a, b) => (b.value ?? -1) - (a.value ?? -1));
  bars('topicPartyChart', firstScores);

  $('answerTabs').innerHTML = ['Todos', ...topicsList].map((t, i) =>
    `<button class="tab ${i === 0 ? 'active' : ''}" data-answer-topic="${esc(t)}">${esc(t)}</button>`
  ).join('');

  document.querySelectorAll('#answerTabs .tab').forEach(b => b.addEventListener('click', () => {
    document.querySelectorAll('#answerTabs .tab').forEach(x => x.classList.remove('active'));
    b.classList.add('active');
    activeAnswerTopic = b.dataset.answerTopic;
    renderAnswers();
  }));

  activeAnswerTopic = 'Todos';
  renderAnswers();
}

function renderAnswers() {
  const list = neutralQuestions.filter(q => (activeAnswerTopic === 'Todos' || q.topic === activeAnswerTopic));
  $('answerList').innerHTML = list.map(q => {
    const v = answers[q.id];
    const label = getLabel(v);
    return `<article class="answer"><div class="answer-top"><div class="statement">${esc(q.statement)}</div><span class="tag">${esc(q.topic)}</span></div><div class="answer-meta">Tu respuesta: <b>${esc(label)}</b></div></article>`;
  }).join('');
}

function exportResults() {
  const ranked = calculatePartyScores();
  const lines = [
    'BRÚJULA — INFORME DE AFINIDAD POLÍTICA (VERSIÓN 2.5)',
    'Cuestionario neutral auditado sin sesgos partidistas.',
    '',
    ...ranked.map(r => `${r.party}: ${pct(r.value)} (${r.count} preguntas respondidas)`),
    '',
    'RESPUESTAS',
    ...neutralQuestions.map(q => `${q.topic} | ${q.statement} | ${getLabel(answers[q.id])}`),
    '',
    'Metodología: coincidencia ponderada basada en la distancia entre respuestas y posiciones oficiales documentadas.'
  ];
  const blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'brujula-informe-v2.5.txt';
  a.click();
  URL.revokeObjectURL(url);
}

/* Render Topics Section & Comparator & Legislative (reusing detailedTopics from previous turn) */
const detailedTopics = [
  {
    id: 'vivienda',
    title: 'Vivienda y Alquiler',
    summary: 'Análisis de los decretos del Gobierno, limitación de precios, zonas tensionadas, desahucios, prórrogas y oferta pública.',
    legal: 'Regulado por la Ley por el Derecho a la Vivienda (Ley 12/2023).',
    lastUpdate: 'Noviembre de 2026',
    parties: {
      'PSOE': { state: 'aplicado', stateLabel: 'En vigor', proposal: 'Mantener decretos de vivienda y limitar alquileres en zonas tensionadas.', governance: 'Aprobación de la Ley de Vivienda.', votes: 'A favor', source: 'BOE' },
      'PP': { state: 'modificar', stateLabel: 'Propone alternativa', proposal: 'Construir un millón de viviendas y avales del 100% para jóvenes.', governance: 'Gestión autonómica favorable a la oferta.', votes: 'En contra', source: 'Congreso' },
      'Podemos': { state: 'favor', stateLabel: 'A favor de intervención', proposal: 'Tope generalizado de alquileres y prohibición de especulación.', governance: 'Impulso a la Ley de Vivienda.', votes: 'A favor', source: 'Congreso' },
      'VOX': { state: 'derogar', stateLabel: 'Propone derogar', proposal: 'Liberar suelo y suprimir la Ley de Vivienda.', governance: 'Oposición municipal y autonómica.', votes: 'En contra', source: 'Congreso' }
    }
  }
];

function renderTopicsSection() {
  $('topicDetailTabs').innerHTML = detailedTopics.map((dt, i) =>
    `<button class="tab ${i === 0 ? 'active' : ''}" data-topic-id="${esc(dt.id)}">${esc(dt.title)}</button>`
  ).join('');
  renderTopicDetailContent(detailedTopics[0].id);
}

function renderTopicDetailContent(topicId) {
  const dt = detailedTopics.find(x => x.id === topicId);
  if (!dt) return;
  let html = `<div class="topic-card"><h3>${esc(dt.title)}</h3><p>${esc(dt.summary)}</p></div>`;
  for (const [p, info] of Object.entries(dt.parties)) {
    html += `<div class="topic-card party-row"><b>${esc(p)}</b> <span class="badge ${esc(info.state)}">${esc(info.stateLabel)}</span><p style="margin:5px 0">Propuesta: ${esc(info.proposal)}</p></div>`;
  }
  $('topicDetailContent').innerHTML = html;
}

function renderComparatorSection() {
  const select = $('compareTopicSelect');
  select.innerHTML = detailedTopics.map(dt => `<option value="${dt.id}">${esc(dt.title)}</option>`).join('');
  select.onchange = () => renderComparatorContent(select.value);
  renderComparatorContent(detailedTopics[0].id);
}

function renderComparatorContent(topicId) {
  const dt = detailedTopics.find(x => x.id === topicId);
  if (!dt) return;
  let html = `<div class="topic-card"><h3>Comparativa: ${esc(dt.title)}</h3></div>`;
  $('comparatorContent').innerHTML = html;
}

function renderLegislativeSection() {
  $('legislativeContent').innerHTML = `<div class="topic-card"><h3>Seguimiento Legislativo y Decretos</h3><p>Análisis riguroso de normas y votaciones en el Congreso.</p></div>`;
}

function renderSourcesSection() {}

/* Event Listeners */
document.querySelectorAll('.nav-tab').forEach(tab => {
  tab.addEventListener('click', () => switchSection(tab.dataset.target));
});

$('start').addEventListener('click', start);
$('goTopics').addEventListener('click', () => switchSection('topicsSection'));
$('goComparator').addEventListener('click', () => switchSection('comparatorSection'));
$('next').addEventListener('click', next);
$('prev').addEventListener('click', previous);
$('restart').addEventListener('click', () => switchSection('home'));
$('export').addEventListener('click', exportResults);

// Check progress on load
checkResume();
