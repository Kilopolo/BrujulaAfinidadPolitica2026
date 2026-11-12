const parties = ['Frente Amplio', 'Podemos', 'PP', 'PSOE', 'Se Acabó La Fiesta', 'VOX'];

const topics = [
  ['Vivienda', [
    ['Frente Amplio', 'Destinar el 1 % del PIB cada año a vivienda pública.'],
    ['Frente Amplio', 'Implantar alquileres indefinidos.'],
    ['Podemos', 'Prohibir la compra de vivienda para especular.'],
    ['Podemos', 'Destinar viviendas propiedad de fondos de inversión al alquiler social.'],
    ['PP', 'Construir un millón de viviendas en cuatro años.'],
    ['PP', 'Ofrecer avales públicos de hasta el 100 % para jóvenes compradores.'],
    ['PSOE', 'Mantener los decretos de vivienda vigentes.'],
    ['PSOE', 'Evitar los desahucios de personas vulnerables cuando no exista alternativa habitacional.'],
    ['Se Acabó La Fiesta', 'Eliminar los impuestos en la compra de la primera vivienda.'],
    ['Se Acabó La Fiesta', 'Aumentar el suelo disponible para construir.'],
    ['VOX', 'Liberar suelo para facilitar la construcción.'],
    ['VOX', 'Dar prioridad a los españoles en el acceso a vivienda social.']
  ]],
  ['Impuestos', [
    ['Frente Amplio', 'Aplicar un impuesto del 2 % a las grandes fortunas desde un patrimonio de 1 millón de euros.'],
    ['Frente Amplio', 'Elevar ese gravamen al 3 % para patrimonios superiores a 50 millones de euros.'],
    ['Podemos', 'Crear o reforzar un impuesto específico sobre los grandes patrimonios.'],
    ['Podemos', 'Gravar los beneficios extraordinarios de bancos y empresas energéticas.'],
    ['PP', 'Actualizar el IRPF teniendo en cuenta la inflación.'],
    ['PP', 'Aplicar un IVA del 0 % alos alimentos básicos.'],
    ['PSOE', 'Establecer un tipo de IRPF de al menos el 50 % para rentas superiores a 300.000 euros.'],
    ['PSOE', 'Implantar un reparto de beneficios en las grandes empresas.'],
    ['Se Acabó La Fiesta', 'Aplicar un IRPF autonómico del 0 % a rentas inferiores a 35.000 euros.'],
    ['Se Acabó La Fiesta', 'Reducir cinco puntos el IRPF por cada hijo.'],
    ['VOX', 'Aplicar un IRPF del 0 % hasta 22.000 euros anuales.'],
    ['VOX', 'Aplicar tipos del 15 % hasta 70.000 euros y del 25 % para rentas superiores.']
  ]],
  ['Empleo y pensiones', [
    ['Frente Amplio', 'Seguir aumentando el salario mínimo interprofesional.'],
    ['Frente Amplio', 'Reducir la jornada laboral a 32 horas semanales.'],
    ['Podemos', 'Fijar el salario mínimo en 1.800 euros.'],
    ['Podemos', 'Reducir la jornada laboral a 30 horas semanales.'],
    ['PP', 'Garantizar por ley la revalorización de las pensiones conforme al IPC.'],
    ['PP', 'Mantener esa revalorización incluso cuando no haya presupuestos aprobados.'],
    ['PSOE', 'Incorporar a la Constitución la revalorización de las pensiones conforme al IPC.'],
    ['PSOE', 'Aumentar el salario mínimo cada año.'],
    ['Se Acabó La Fiesta', 'Eximir de cuotas durante tres años a los nuevos trabajadores autónomos.'],
    ['Se Acabó La Fiesta', 'No establecer una propuesta pública concreta sobre pensiones.'],
    ['VOX', 'Derogar la reforma laboral de 2021.'],
    ['VOX', 'Crear un fondo público de pensiones con rentabilidad privada.']
  ]],
  ['Sanidad y educación', [
    ['Frente Amplio', 'Dar prioridad a la gestión pública de la sanidad.'],
    ['Frente Amplio', 'Limitar a 20 el número máximo de alumnos por clase.'],
    ['Podemos', 'Derogar las leyes que permiten privatizar servicios sanitarios.'],
    ['Podemos', 'Garantizar educación gratuita desde los 0 hasta los 18 años.'],
    ['PP', 'Contratar más médicos y mejorar sus condiciones laborales.'],
    ['PP', 'Implantar un modelo educativo más exigente.'],
    ['PSOE', 'Establecer por ley tiempos máximos de espera sanitaria.'],
    ['PSOE', 'Limitar las clases a 22 alumnos en Primaria y 25 en ESO.'],
    ['Se Acabó La Fiesta', 'Garantizar una cita con especialista en 30 días y una operación en 90 días.'],
    ['Se Acabó La Fiesta', 'Ofrecer escuela infantil gratuita de 0 a 3 años.'],
    ['VOX', 'Devolver al Estado las competencias de sanidad y educación.'],
    ['VOX', 'Implantar un cheque escolar.']
  ]],
  ['Inmigración', [
    ['Frente Amplio', 'Garantizar derechos a las personas que ya viven en España.'],
    ['Frente Amplio', 'Cerrar los Centros de Internamiento de Extranjeros (CIE).'],
    ['Podemos', 'Regularizar a las personas que viven y trabajan en España.'],
    ['Podemos', 'Derogar la Ley de Extranjería.'],
    ['PP', 'Implantar un visado por puntos.'],
    ['PP', 'Establecer cupos de inmigración por países y sectores.'],
    ['PSOE', 'Reforzar el control de fronteras.'],
    ['PSOE', 'Crear vías legales para venir a España a trabajar.'],
    ['Se Acabó La Fiesta', 'Ejecutar un plan de deportación de inmigrantes en situación irregular.'],
    ['Se Acabó La Fiesta', 'Priorizar las ayudas a españoles y residentes legales.'],
    ['VOX', 'Dar prioridad nacional en las ayudas públicas.'],
    ['VOX', 'Aplicar una política de «remigración» mediante repatriaciones y expulsiones.']
  ]],
  ['Territorio', [
    ['Frente Amplio', 'Alcanzar un nuevo pacto territorial.'],
    ['Frente Amplio', 'Dar más peso institucional a las lenguas cooficiales.'],
    ['Podemos', 'Avanzar hacia una república plurinacional.'],
    ['Podemos', 'Reconocer el derecho de cada pueblo a decidir.'],
    ['PP', 'Reformar la financiación autonómica mediante un acuerdo conjunto para todas las comunidades.'],
    ['PP', 'Evitar acuerdos de financiación bilaterales.'],
    ['PSOE', 'Implantar un nuevo modelo de financiación autonómica con unos 21.000 millones de euros adicionales en 2027.'],
    ['PSOE', 'Condonar parte de la deuda autonómica.'],
    ['Se Acabó La Fiesta', 'Basar la financiación autonómica en criterios objetivos.'],
    ['Se Acabó La Fiesta', 'No condonar deuda autonómica salvo en caso de catástrofes.'],
    ['VOX', 'Devolver al Estado las competencias de educación, sanidad, seguridad y justicia.'],
    ['VOX', 'Suprimir las policías autonómicas.']
  ]],
  ['Europa', [
    ['Frente Amplio', 'No aumentar el gasto militar.'],
    ['Frente Amplio', 'Establecer un embargo de armas a Israel sin excepciones.'],
    ['Podemos', 'Salir de la OTAN.'],
    ['Podemos', 'No aumentar el gasto militar.'],
    ['PP', 'Aumentar el gasto en defensa con aprobación del Congreso.'],
    ['PP', 'Recuperar el prestigio internacional de España.'],
    ['PSOE', 'Situar el gasto en defensa en torno al 2 % del PIB.'],
    ['PSOE', 'Suspender el acuerdo de asociación entre la Unión Europea e Israel.'],
    ['Se Acabó La Fiesta', 'Celebrar un referéndum sobre la permanencia de España en la Unión Europea.'],
    ['Se Acabó La Fiesta', 'Rechazar el acuerdo comercial entre la UE y Mercosur.'],
    ['VOX', 'Exigir que Marruecos reconozca la soberanía española sobre Ceuta y Melilla.'],
    ['VOX', 'Suspender el tratado entre España y Marruecos de 1991.']
  ]],
  ['Energía', [
    ['Frente Amplio', 'Cerrar las centrales nucleares antes de 2035.'],
    ['Frente Amplio', 'No ampliar la vida útil de la central nuclear de Almaraz.'],
    ['Podemos', 'Alcanzar un sistema energético 100 % renovable en 2040.'],
    ['Podemos', 'Abandonar la energía nuclear.'],
    ['PP', 'Ampliar la vida útil de las centrales nucleares.'],
    ['PP', 'Implantar un impuesto a la generación eléctrica menor o eliminarlo.'],
    ['PSOE', 'Conseguir que el 81 % de la electricidad sea renovable en 2030.'],
    ['PSOE', 'Mantener la bonificación del abono único de transporte.'],
    ['Se Acabó La Fiesta', 'Detener el cierre de las centrales nucleares.'],
    ['Se Acabó La Fiesta', 'Instalar renovables en suelo industrial y no en terrenos de cultivo.'],
    ['VOX', 'Derogar la Ley de Cambio Climático.'],
    ['VOX', 'Frenar el Pacto Verde Europeo y el fin de los vehículos de combustión.']
  ]]
];

const questions = topics.flatMap(([topic, items]) =>
  items.map(([party, text], i) => ({ id: `${topic}-${i}`, topic, party, text }))
);

const scale = [
  { v: 5, label: 'Totalmente', sub: 'de acuerdo' },
  { v: 4, label: 'De acuerdo', sub: '' },
  { v: 3, label: 'Neutral', sub: '' },
  { v: 2, label: 'En desacuerdo', sub: '' },
  { v: 1, label: 'Totalmente', sub: 'en desacuerdo' }
];

/* Detailed Data for "Temas de Actualidad" & Individual Party Comparison */
const detailedTopics = [
  {
    id: 'vivienda',
    title: 'Vivienda y Alquiler',
    summary: 'Análisis de los decretos del Gobierno, limitación de precios, zonas tensionadas, desahucios, prórrogas y oferta pública.',
    legal: 'Regulado por la Ley por el Derecho a la Vivienda (Ley 12/2023) y reales decretos de medidas urgentes en materia de vivienda y alquiler.',
    lastUpdate: 'Noviembre de 2026',
    parties: {
      'PSOE': {
        state: 'aplicado',
        stateLabel: 'Ya lo ha aplicado / En vigor',
        proposal: 'Mantener y reforzar los decretos de vivienda, la limitación de alquileres en zonas tensionadas y la construcción de parque público.',
        governance: 'Aprobación de la Ley de Vivienda y reales decretos de prórroga de contratos y limitación de precios del alquiler.',
        lawsMaintain: 'Ley 12/2023 por el Derecho a la Vivienda y medidas de contención de rentas.',
        lawsRepeal: 'Ninguna; apoya la legislación vigente y su despliegue autonómico.',
        votes: 'Votó A FAVOR de los decretos de vivienda y de la Ley por el Derecho a la Vivienda en el Congreso.',
        statements: 'Defensa de la vivienda como derecho constitucional y necesidad de contener la especulación.',
        source: 'BOE y Congreso de los Diputados',
        sourceLink: 'https://www.boe.es',
        date: '2023-2026',
        type: 'Normativa y Votación'
      },
      'PP': {
        state: 'modificar',
        stateLabel: 'Propone modificar / Alternativa',
        proposal: 'Construir un millón de viviendas, avales del 100% para jóvenes, incentivos fiscales a propietarios y derogar los límites de precios que considera ineficaces.',
        governance: 'Gestión en comunidades autónomas impulsando bajadas de impuestos a la compra y liberando suelo.',
        lawsMaintain: 'Medidas de fomento de oferta y seguridad jurídica para propietarios.',
        lawsRepeal: 'Derogar los topes de precios al alquiler de la Ley de Vivienda.',
        votes: 'Votó EN CONTRA de la Ley de Vivienda y de los decretos de limitación de precios.',
        statements: 'Señala que la intervención de precios reduce la oferta y perjudica a los arrendadores.',
        source: 'Programa electoral y resoluciones parlamentarias del PP',
        sourceLink: 'https://www.congreso.es',
        date: '2024-2026',
        type: 'Propuesta y Votación'
      },
      'Podemos': {
        state: 'favor',
        stateLabel: 'A favor de mayor intervención',
        proposal: 'Tope generalizado de alquileres, prohibición de comprar vivienda para especular y movilización de viviendas de grandes tenedores para alquiler social.',
        governance: 'Impulso inicial a las medidas de limitación de precios durante su etapa en el Gobierno de coalición.',
        lawsMaintain: 'Regulación estricta de alquileres y protección reforzada contra desahucios.',
        lawsRepeal: 'Exigencia de endurecer la Ley de Vivienda eliminando resquicios para grandes propietarios.',
        votes: 'Votó A FAVOR de la Ley de Vivienda y reclama medidas más drásticas.',
        statements: 'La vivienda es un derecho y no un negocio especulativo.',
        source: 'Documentos oficiales de Podemos y Congreso',
        sourceLink: 'https://www.congreso.es',
        date: '2023-2026',
        type: 'Programa y Votación'
      },
      'Frente Amplio': {
        state: 'favor',
        stateLabel: 'A favor de inversión pública',
        proposal: 'Destinar el 1% del PIB anual a vivienda pública y alquileres indefinidos.',
        governance: 'Participación en iniciativas parlamentarias de refuerzo del parque público.',
        lawsMaintain: 'Protección de inquilinos y contratos indefinidos.',
        lawsRepeal: 'Normas que favorecen la desregulación del mercado inmobiliario.',
        votes: 'Votó A FAVOR de la normativa de vivienda y protección social.',
        statements: 'Apuesta por un gran parque público de alquiler asequible.',
        source: 'Proposiciones y programa',
        sourceLink: 'https://www.congreso.es',
        date: '2025-2026',
        type: 'Programa'
      },
      'VOX': {
        state: 'derogar',
        stateLabel: 'Propone derogar',
        proposal: 'Liberar suelo, suprimir la Ley de Vivienda y endurecer leyes contra la okupación.',
        governance: 'Oposición frontal en ayuntamientos y comunidades a las declaraciones de zonas tensionadas.',
        lawsMaintain: 'Leyes de propiedad privada y liberalización de suelo.',
        lawsRepeal: 'Derogación de la Ley de Vivienda y límites al alquiler.',
        votes: 'Votó EN CONTRA de la Ley de Vivienda.',
        statements: 'La intervención estatal destruye la oferta y arruina a los pequeños propietarios.',
        source: 'Iniciativas y debates parlamentarios VOX',
        sourceLink: 'https://www.congreso.es',
        date: '2024-2026',
        type: 'Votación y Programa'
      },
      'Se Acabó La Fiesta': {
        state: 'modificar',
        stateLabel: 'Eliminar impuestos y aumentar suelo',
        proposal: 'Eliminar impuestos en la compra de la primera vivienda y aumentar drásticamente el suelo urbanizable.',
        governance: 'Sin responsabilidades de gobierno directo; propuestas orientadas a rebaja fiscal.',
        lawsMaintain: 'Incentivos a la propiedad.',
        lawsRepeal: 'Impuestos de transmisiones patrimoniales y normativas restrictivas de suelo.',
        votes: 'Posición crítica con las leyes actuales de vivienda.',
        statements: 'Hay que facilitar la compra rebajando impuestos y aumentando la oferta.',
        source: 'Comunicados oficiales SALF',
        sourceLink: 'https://www.congreso.es',
        date: '2024-2026',
        type: 'Declaración y Propuesta'
      }
    }
  },
  {
    id: 'pensiones',
    title: 'Pensiones y Sostenibilidad',
    summary: 'Revalorización conforme al IPC, edad de jubilación, sostenibilidad financiera y pensiones mínimas.',
    legal: 'Reformas de la Seguridad Social y recomendaciones del Pacto de Toledo.',
    lastUpdate: 'Noviembre de 2026',
    parties: {
      'PSOE': {
        state: 'aplicado',
        stateLabel: 'Aplicado y en vigor',
        proposal: 'Garantizar por ley y en la Constitución la subida de las pensiones con el IPC y reforzar los ingresos del sistema.',
        governance: 'Aprobación de la reforma de pensiones vinculada a la inflacción y el Mecanismo de Equidad Intergeneracional.',
        lawsMaintain: 'Ley de garantía del poder adquisitivo de las pensiones.',
        lawsRepeal: 'Ninguna; mantiene el modelo actual de ingresos y cotizaciones.',
        votes: 'Votó A FAVOR de las reformas de pensiones en el Congreso.',
        statements: 'Garantía absoluta del poder adquisitivo de nuestros mayores.',
        source: 'BOE / Ministerio de Inclusión y Seguridad Social',
        sourceLink: 'https://www.seg-social.es',
        date: '2023-2026',
        type: 'Normativa'
      },
      'PP': {
        state: 'favor',
        stateLabel: 'Apoya subida IPC con cautelas de sostenibilidad',
        proposal: 'Garantizar la revalorización conforme al IPC y asegurar la sostenibilidad mediante incentivos al empleo y crecimiento económico.',
        governance: 'Apoyo a la revalorización y exigencia de medidas complementarias ante el déficit estructural.',
        lawsMaintain: 'Principio de contributividad del sistema.',
        lawsRepeal: 'Ajustes fiscales que comprometan la caja única.',
        votes: 'Votó A FAVOR de la revalorización ligada al IPC en las votaciones principales.',
        statements: 'Las pensiones deben estar blindadas, pero exigen rigor financiero.',
        source: 'Congreso de los Diputados',
        sourceLink: 'https://www.congreso.es',
        date: '2024-2026',
        type: 'Votación y Programa'
      },
      'Podemos': {
        state: 'favor',
        stateLabel: 'A favor de pensiones mínimas elevadas',
        proposal: 'Elevar las pensiones mínimas por encima del umbral de pobreza y financiar el sistema vía impuestos generales si es necesario.',
        governance: 'Impulso a las subidas mínimas durante el gobierno de coalición.',
        lawsMaintain: 'Actualización automática y subidas extraordinarias de mínimas.',
        lawsRepeal: 'Topes de cotización que perjudican la redistribución.',
        votes: 'Votó A FAVOR de las subidas de pensiones.',
        statements: 'Las pensiones públicas son un derecho fundamental incuestionable.',
        source: 'Programa Podemos',
        sourceLink: 'https://www.congreso.es',
        date: '2023-2026',
        type: 'Programa'
      },
      'Frente Amplio': {
        state: 'favor',
        stateLabel: 'A favor de blindaje público',
        proposal: 'Asegurar pensiones dignas y blindaje constitucional absoluto.',
        governance: 'Apoyo parlamentario a las mejoras de la Seguridad Social.',
        lawsMaintain: 'Blindaje de pensiones públicas.',
        lawsRepeal: 'Recortes encubiertos o planes privados obligatorios.',
        votes: 'Votó A FAVOR.',
        statements: 'Defensa férrea del sistema público.',
        source: 'Congreso',
        sourceLink: 'https://www.congreso.es',
        date: '2025-2026',
        type: 'Programa'
      },
      'VOX': {
        state: 'modificar',
        stateLabel: 'Propone reformas estructurales',
        proposal: 'Sostenibilidad del sistema mediante la creación de empleo neto y revisión de gastos ajenos a la Seguridad Social.',
        governance: 'Presentación de enmiendas a la totalidad en materia presupuestaria.',
        lawsMaintain: 'Caja única y contributividad.',
        lawsRepeal: 'Gastos impropios en la Seguridad Social.',
        votes: 'Abstenciones y votos en contra parciales a las reformas de financiación.',
        statements: 'Es vital asegurar el empleo para garantizar las pensiones del futuro.',
        source: 'Congreso de los Diputados',
        sourceLink: 'https://www.congreso.es',
        date: '2024-2026',
        type: 'Votación'
      },
      'Se Acabó La Fiesta': {
        state: 'none',
        stateLabel: 'Sin propuesta detallada',
        proposal: 'No cuenta con un documento detallado sobre el modelo de pensiones más allá de críticas al gasto político.',
        governance: 'Sin representación ejecutiva en esta materia.',
        lawsMaintain: '—',
        lawsRepeal: '—',
        votes: 'Posición variable o abstención.',
        statements: 'Foco en la reducción del gasto superfluo de las administraciones.',
        source: 'Comunicados SALF',
        sourceLink: 'https://www.congreso.es',
        date: '2024-2026',
        type: 'Declaración'
      }
    }
  },
  {
    id: 'autonomos',
    title: 'Autónomos y Pequeños Negocios',
    summary: 'Cotización por ingresos reales, cuotas, tarifa plana, burocracia y protección social.',
    legal: 'Real Decreto-ley del nuevo sistema de cotización por ingresos reales para trabajadores autónomos.',
    lastUpdate: 'Noviembre de 2026',
    parties: {
      'PSOE': {
        state: 'aplicado',
        stateLabel: 'Aplicado (Ingresos reales)',
        proposal: 'Desplegar el sistema de cotización por tramos según ingresos reales y mejorar la protección por cese de actividad.',
        governance: 'Acuerdo con asociaciones de autónomos para implantar la cotización por ingresos reales.',
        lawsMaintain: 'Nuevo sistema de cotización RETA.',
        lawsRepeal: 'Cuotas fijas desproporcionadas para rentas bajas.',
        votes: 'Votó A FAVOR de la reforma del RETA.',
        statements: 'Justicia fiscal para que quien menos ingresa, menos pague.',
        source: 'BOE y Ministerio de Inclusión',
        sourceLink: 'https://www.seg-social.es',
        date: '2023-2026',
        type: 'Normativa'
      },
      'PP': {
        state: 'modificar',
        stateLabel: 'Propone tarifas planas y alivio fiscal',
        proposal: 'Ampliar la tarifa plana para nuevos autónomos, reducir trabas administrativas y bonificar cotizaciones en tramos iniciales.',
        governance: 'Implantación de tarifas cero en autonomías gobernadas por el PP.',
        lawsMaintain: 'Incentivos al emprendimiento.',
        lawsRepeal: 'Excesos burocráticos y presión fiscal a autónomos con ingresos modestos.',
        votes: 'Apoyo condicionado a mejoras para autónomos y voto crítico al exceso de cotizaciones.',
        statements: 'Los autónomos son el motor del empleo y necesitan menos impuestos y burocracia.',
        source: 'Programa PP y Gobiernos autonómicos',
        sourceLink: 'https://www.congreso.es',
        date: '2024-2026',
        type: 'Propuesta y Gestión'
      },
      'Podemos': {
        state: 'favor',
        stateLabel: 'A favor de protección ampliada',
        proposal: 'Proteger a los autónomos con menores ingresos, garantizar bajas dignas y revisar cotizaciones a la baja para micronegocios.',
        governance: 'Apoyo a las medidas de protección social durante la pandemia y posterior despliegue.',
        lawsMaintain: 'Derechos sociales de los autónomos.',
        lawsRepeal: 'Sanciones desproporcionadas a pequeños autónomos.',
        votes: 'Votó A FAVOR.',
        statements: 'Hay que proteger al pequeño autónomo frente a la gran multinacional.',
        source: 'Programa Podemos',
        sourceLink: 'https://www.congreso.es',
        date: '2023-2026',
        type: 'Programa'
      },
      'Frente Amplio': {
        state: 'favor',
        stateLabel: 'A favor de derechos y cotización justa',
        proposal: 'Equiparación de derechos laborales y sociales de los autónomos a los del régimen general.',
        governance: 'Apoyo a medidas de cohesión social.',
        lawsMaintain: 'Derechos de cotización progresiva.',
        lawsRepeal: 'Abusos de falsos autónomos.',
        votes: 'Votó A FAVOR.',
        statements: 'Defensa del autónomo que trabaja solo frente a falsas autonomías.',
        source: 'Congreso',
        sourceLink: 'https://www.congreso.es',
        date: '2025-2026',
        type: 'Programa'
      },
      'VOX': {
        state: 'modificar',
        stateLabel: 'Propone cuota cero inicial y rebajas',
        proposal: 'Cuota cero para autónomos con ingresos mínimos durante los primeros años y reducción radical de cargas fiscales.',
        governance: 'Iniciativas parlamentarias de bonificación de cuotas.',
        lawsMaintain: 'Libertad de establecimiento.',
        lawsRepeal: 'Regulaciones excesivas y burocracia autonómica/estatal.',
        votes: 'Votó a favor de medidas de apoyo y criticó la subida de cotizaciones.',
        statements: 'El Estado ahoga al emprendedor con impuestos confiscatorios.',
        source: 'Congreso de los Diputados',
        sourceLink: 'https://www.congreso.es',
        date: '2024-2026',
        type: 'Votación'
      },
      'Se Acabó La Fiesta': {
        state: 'favor',
        stateLabel: 'Exención de cuotas iniciales',
        proposal: 'Eximir de cuotas durante tres años a los nuevos autónomos y suprimir tasas administrativas.',
        governance: 'Propuestas de desregulación.',
        lawsMaintain: 'Incentivos fiscales.',
        lawsRepeal: 'Tasas y obligaciones registrales duplicadas.',
        votes: 'Apoyo a medidas de alivio fiscal.',
        statements: 'Ayudar al que emprende eliminando el acoso fiscal.',
        source: 'SALF',
        sourceLink: 'https://www.congreso.es',
        date: '2024-2026',
        type: 'Propuesta'
      }
    }
  },
  {
    id: 'impuestos',
    title: 'Impuestos e IRPF',
    summary: 'Tipos impositivos, IRPF, IVA en productos básicos, impuestos a grandes fortunas y banca.',
    legal: 'Leyes de Presupuestos Generales del Estado y normativas tributarias estatales y autonómicas.',
    lastUpdate: 'Noviembre de 2026',
    parties: {
      'PSOE': {
        state: 'aplicado',
        stateLabel: 'Aplicado / Progresividad fiscal',
        proposal: 'Mantener tributos a grandes fortunas, banca y energéticas, y adaptar tramos del IRPF a rentas medias y bajas.',
        governance: 'Establecimiento de impuestos temporales a grandes patrimonios y entidades financieras.',
        lawsMaintain: 'Impuestos especiales a grandes fortunas y beneficios extraordinarios.',
        lawsRepeal: 'Bonificaciones fiscales regresivas.',
        votes: 'Votó A FAVOR de los impuestos extraordinarios y presupuestos.',
        statements: 'Quien más tiene, más debe aportar para sostener los servicios públicos.',
        source: 'Ministerio de Hacienda / BOE',
        sourceLink: 'https://www.hacienda.gob.es',
        date: '2023-2026',
        type: 'Normativa y Votación'
      },
      'PP': {
        state: 'modificar',
        stateLabel: 'Propone deflactar IRPF y rebajas',
        proposal: 'Deflactar el IRPF para compensar la inflación, bajar tipos en tramos medios y bajos, y eliminar impuestos sobre patrimonio y sucesiones.',
        governance: 'Bajadas de impuestos y supresión de tributos autonómicos en comunidades gobernadas por el PP.',
        lawsMaintain: 'Incentivos a la inversión.',
        lawsRepeal: 'Impuesto de patrimonio y gravámenes extraordinarios que afecten a la competitividad.',
        votes: 'Votó EN CONTRA de los nuevos impuestos a la banca y grandes fortunas.',
        statements: 'La bajada de impuestos estimula la economía y recauda más por mayor actividad.',
        source: 'Programa económico PP',
        sourceLink: 'https://www.congreso.es',
        date: '2024-2026',
        type: 'Propuesta y Gestión'
      },
      'Podemos': {
        state: 'favor',
        stateLabel: 'A favor de mayores tipos a grandes rentas',
        proposal: 'Tipos marginales superiores al 50% para rentas muy altas, impuesto permanente a grandes fortunas y blindaje de tributos a energéticas.',
        governance: 'Impulso inicial a los gravámenes extraordinarios.',
        lawsMaintain: 'Fiscalidad progresiva estricta.',
        lawsRepeal: 'Regulaciones fiscales favorables a SICAVs y grandes patrimonios.',
        votes: 'Votó A FAVOR de impuestos extraordinarios y exigió endurecerlos.',
        statements: 'Justicia fiscal para financiar sanidad y educación públicas.',
        source: 'Programa Podemos',
        sourceLink: 'https://www.congreso.es',
        date: '2023-2026',
        type: 'Programa'
      },
      'Frente Amplio': {
        state: 'favor',
        stateLabel: 'A favor de gravámenes a la riqueza',
        proposal: 'Impuesto permanente a grandes fortunas desde 1 millón de euros y tipos reforzados.',
        governance: 'Apoyo a la fiscalidad progresiva.',
        lawsMaintain: 'Impuestos a la riqueza.',
        lawsRepeal: 'Exenciones a grandes corporaciones.',
        votes: 'Votó A FAVOR.',
        statements: 'La riqueza acumulada debe tributar para sostener el estado del bienestar.',
        source: 'Congreso',
        sourceLink: 'https://www.congreso.es',
        date: '2025-2026',
        type: 'Programa'
      },
      'VOX': {
        state: 'derogar',
        stateLabel: 'Propone bajada radical del IRPF',
        proposal: 'Establecer solo dos tramos de IRPF (0% hasta 22.000€ y tipos moderados superiores), suprimir impuesto de patrimonio, sucesiones y plusvalías.',
        governance: 'Apoyo a rebajas fiscales en pactos autonómicos.',
        lawsMaintain: 'Libertad económica individual.',
        lawsRepeal: 'Impuesto de patrimonio, sucesiones, donaciones y tasas abusivas.',
        votes: 'Votó EN CONTRA de subidas impositivas.',
        statements: 'El Estado confisca el sueldo de los españoles con impuestos abusivos.',
        source: 'Programa VOX / Congreso',
        sourceLink: 'https://www.congreso.es',
        date: '2024-2026',
        type: 'Programa y Votación'
      },
      'Se Acabó La Fiesta': {
        state: 'modificar',
        stateLabel: 'Rebaja drástica y IRPF 0% autonómico',
        proposal: 'IRPF autonómico del 0% a rentas menores de 35.000€ y reducción de 5 puntos por hijo.',
        governance: 'Sin poder ejecutivo central.',
        lawsMaintain: 'Incentivos familiares.',
        lawsRepeal: 'Impuestos autonómicos redundantes.',
        votes: 'Posición favorable a alivio fiscal.',
        statements: 'Menos impuestos y más dinero en el bolsillo de las familias.',
        source: 'SALF',
        sourceLink: 'https://www.congreso.es',
        date: '2024-2026',
        type: 'Propuesta'
      }
    }
  },
  {
    id: 'okupacion',
    title: 'Okupación y Seguridad Jurídica',
    summary: 'Diferenciación entre allanamiento, usurpación e impago; plazos de desalojo exprés y protección de propietarios.',
    legal: 'Código Penal y Ley de Enjuiciamiento Criminal (reformas procesales sobre desalojos).',
    lastUpdate: 'Noviembre de 2026',
    parties: {
      'PP': {
        state: 'modificar',
        stateLabel: 'Propone desalojo exprés en 24h',
        proposal: 'Desalojo policial exprés en 24-48 horas, prohibición de empadronamiento a okupas y endurecimiento penal de la usurpación y allanamiento.',
        governance: 'Proposiciones de ley en el Senado y Congreso y planes autonómicos antiokupación.',
        lawsMaintain: 'Derechos de propiedad privada.',
        lawsRepeal: 'Artículos procesales que demoran los desahucios a okupas ilegales.',
        votes: 'Votó a favor de endurecer leyes antiokupación y presentó textos alternativos.',
        statements: 'La propiedad privada es sagrada y el Estado no puede dejar desamparado al propietario.',
        source: 'Iniciativas parlamentarias PP',
        sourceLink: 'https://www.congreso.es',
        date: '2024-2026',
        type: 'Proposición de Ley'
      },
      'VOX': {
        state: 'derogar',
        stateLabel: 'Propone reforma penal drástica',
        proposal: 'Desalojo inmediato por las fuerzas de seguridad, penas de prisión severas para okupas y prohibición absoluta de protección a infractores.',
        governance: 'Iniciativas constantes en el Congreso para modificar el Código Penal.',
        lawsMaintain: 'Principio de autoridad y protección de morada.',
        lawsRepeal: 'Leyes y moratorias que paralizan desalojos.',
        votes: 'Votó A FAVOR de endurecer las leyes contra la okupación.',
        statements: 'El okupa no es un vulnerable, es un delincuente que usurpa lo ajeno.',
        source: 'Congreso de los Diputados',
        sourceLink: 'https://www.congreso.es',
        date: '2024-2026',
        type: 'Votación y Propuesta'
      },
      'PSOE': {
        state: 'aplicado',
        stateLabel: 'Aplicado (Protocolos judiciales)',
        proposal: 'Agilizar procedimientos contra mafias okupas protegiendo simultáneamente a personas en situación de vulnerabilidad extrema con alternativa habitacional.',
        governance: 'Instrucciones de la Fiscalía General sobre plazos de desalojo y protocolos para cuerpos policiales.',
        lawsMaintain: 'Garantías procesales y protección a vulnerables.',
        lawsRepeal: 'Ninguna; rechaza medidas que vulneren la tutela judicial efectiva o confundan impago con allanamiento.',
        votes: 'Votó en contra de propuestas de desalojo exprés sin garantías judiciales.',
        statements: 'Combatimos con eficacia la okupación ilegal con seguridad jurídica, sin demagogia.',
        source: 'Ministerio del Interior / BOE',
        sourceLink: 'https://www.interior.gob.es',
        date: '2023-2026',
        type: 'Normativa y Protocolo'
      },
      'Podemos': {
        state: 'contra',
        stateLabel: 'En contra de desalojos sin alternativa',
        proposal: 'Garantizar que no se produzca ningún desalojo de familias vulnerables sin alternativa habitacional previa por parte de la administración.',
        governance: 'Oposición a medidas punitivas que criminalicen la pobreza habitacional.',
        lawsMaintain: 'Derechos habitacionales de personas vulnerables.',
        lawsRepeal: 'Leyes que agilicen desahucios sin realojamiento.',
        votes: 'Votó EN CONTRA de normativas de desalojo exprés.',
        statements: 'El problema de la vivienda se soluciona con parque público, no con criminalización.',
        source: 'Podemos Congreso',
        sourceLink: 'https://www.congreso.es',
        date: '2023-2026',
        type: 'Votación'
      },
      'Frente Amplio': {
        state: 'contra',
        stateLabel: 'En contra de desalojos sin realojo',
        proposal: 'Protección social ante desahucios y focalización en grandes tenedores.',
        governance: 'Apoyo a la protección de inquilinos vulnerables.',
        lawsMaintain: 'Derechos sociales.',
        lawsRepeal: 'Leyes punitivas contra la vulnerabilidad.',
        votes: 'Votó EN CONTRA de desalojos automáticos.',
        statements: 'Esencial distinguir vulnerabilidad de mafias.',
        source: 'Congreso',
        sourceLink: 'https://www.congreso.es',
        date: '2025-2026',
        type: 'Votación'
      },
      'Se Acabó La Fiesta': {
        state: 'derogar',
        stateLabel: 'Desalojo inmediato y mano dura',
        proposal: 'Desalojo en horas y penas duras para usurpadores.',
        governance: 'Acciones de visibilidad y denuncia pública.',
        lawsMaintain: 'Propiedad.',
        lawsRepeal: 'Leyes permisivas con la usurpación.',
        votes: 'Apoyo a leyes de desalojo exprés.',
        statements: 'El propietario tiene que recuperar su casa inmediatamente.',
        source: 'SALF',
        sourceLink: 'https://www.congreso.es',
        date: '2024-2026',
        type: 'Propuesta'
      }
    }
  },
  {
    id: 'inmigrasion',
    title: 'Inmigración y Control de Fronteras',
    summary: 'Política migratoria, control de fronteras, regularizaciones, integración y asilo.',
    legal: 'Ley Orgánica sobre derechos y libertades de los extranjeros en España (Ley de Extranjería) y normativas europeas.',
    lastUpdate: 'Noviembre de 2026',
    parties: {
      'PP': {
        state: 'modificar',
        stateLabel: 'Visado por puntos y cupos',
        proposal: 'Implantar un visado por puntos vinculado al mercado laboral, cupos estrictos de inmigración legal y refuerzo policial en fronteras.',
        governance: 'Gestión en comunidades autónomas centrada en la integración y exigencia de medios al Estado.',
        lawsMaintain: 'Control fronterizo y cooperación internacional.',
        lawsRepeal: 'Efectos llamada en regularizaciones masivas.',
        votes: 'Apoyo a refuerzo de fronteras y crítica a políticas de inmigración irregular.',
        statements: 'Inmigración ordenada, legal y vinculada al empleo que garantice la convivencia.',
        source: 'Programa PP / Congreso',
        sourceLink: 'https://www.congreso.es',
        date: '2024-2026',
        type: 'Programa y Votación'
      },
      'PSOE': {
        state: 'aplicado',
        stateLabel: 'Control de fronteras y vías legales',
        proposal: 'Reforzar el control de fronteras en colaboración con la UE y países de tránsito, fomentando vías legales y ordenadas de migración laboral.',
        governance: 'Acuerdos bilaterales de cooperación y gestión de flujos migratorios con Frontex y países de origen.',
        lawsMaintain: 'Marco de la Ley de Extranjería y compromisos europeos de asilo.',
        lawsRepeal: 'Ninguna; apuesta por el equilibrio entre seguridad y derechos humanos.',
        votes: 'Votó a favor de leyes de extranjería y planes de cooperación.',
        statements: 'Una política migratoria responsable combina seguridad en fronteras e integración.',
        source: 'Ministerio del Interior / Ministerio de Inclusión',
        sourceLink: 'https://www.inclusion.gob.es',
        date: '2023-2026',
        type: 'Normativa y Gestión'
      },
      'VOX': {
        state: 'derogar',
        stateLabel: 'Expulsión de irregulares y fin de ayudas',
        proposal: 'Deportación inmediata de inmigrantes en situación irregular, suspensión de ayudas sociales a no nacionales y endurecimiento extremo de requisitos de nacionalidad.',
        governance: 'Iniciativas municipales y autonómicas limitando subvenciones a entidades proinmigración.',
        lawsMaintain: 'Soberanía nacional y seguridad interior.',
        lawsRepeal: 'Leyes de regularización extraordinaria y efecto llamada.',
        votes: 'Votó EN CONTRA de regularizaciones y planes de acogida abiertos.',
        statements: 'Inmigración ilegal cero; quien entra ilegalmente debe ser expulsado de inmediato.',
        source: 'Programa VOX / Congreso',
        sourceLink: 'https://www.congreso.es',
        date: '2024-2026',
        type: 'Programa y Votación'
      },
      'Podemos': {
        state: 'favor',
        stateLabel: 'Regularización y cierre de CIEs',
        proposal: 'Regularización extraordinaria de personas migrantes en España, cierre de los Centros de Internamiento de Extranjeros (CIE) y plenos derechos sociales.',
        governance: 'Defensa constante de los derechos de personas migrantes desde el espacio político.',
        lawsMaintain: 'Derechos fundamentales de todas las personas en territorio nacional.',
        lawsRepeal: 'Ley de Extranjería en sus aspectos restrictivos y devoluciones en caliente.',
        votes: 'Votó A FAVOR de iniciativas de regularización y protección de menores migrantes.',
        statements: 'Los derechos humanos no dependen del lugar de nacimiento.',
        source: 'Podemos Programa',
        sourceLink: 'https://www.congreso.es',
        date: '2023-2026',
        type: 'Programa y Votación'
      },
      'Frente Amplio': {
        state: 'favor',
        stateLabel: 'A favor de derechos y vías de acogida',
        proposal: 'Garantizar plenos derechos y vías seguras de migración, cerrando CIEs.',
        governance: 'Apoyo a la integración y regularización.',
        lawsMaintain: 'Derechos de asilo y refugio.',
        lawsRepeal: 'Medidas de carácter restrictivo o expulsiones sumarias.',
        votes: 'Votó A FAVOR.',
        statements: 'España debe ser un país de acogida y respeto a los derechos humanos.',
        source: 'Congreso',
        sourceLink: 'https://www.congreso.es',
        date: '2025-2026',
        type: 'Programa'
      },
      'Se Acabó La Fiesta': {
        state: 'derogar',
        stateLabel: 'Deportación masiva y prioridad nacional',
        proposal: 'Plan de deportación de inmigrantes irregulares y primacía absoluta de nacionales.',
        governance: 'Discurso crítico con la gestión fronteriza actual.',
        lawsMaintain: 'Seguridad nacional.',
        lawsRepeal: 'Leyes de extranjería permisivas.',
        votes: 'Votos y propuestas restrictivas.',
        statements: 'Fronteras seguras y expulsión de quien incumpla la ley.',
        source: 'SALF',
        sourceLink: 'https://www.congreso.es',
        date: '2024-2026',
        type: 'Propuesta'
      }
    }
  },
  {
    id: 'empleo',
    title: 'Empleo y Economía',
    summary: 'Salario Mínimo Interprofesional (SMI), reforma laboral, jornada laboral, productividad y desempleo juvenil.',
    legal: 'Estatuto de los Trabajadores y Real Decreto de Reforma Laboral.',
    lastUpdate: 'Noviembre de 2026',
    parties: {
      'PSOE': {
        state: 'aplicado',
        stateLabel: 'Aplicado (Reforma laboral y SMI)',
        proposal: 'Continuar elevando el SMI, consolidar la estabilidad de la reforma laboral y reducir la temporalidad y el desempleo juvenil.',
        governance: 'Acuerdos de diálogo social que elevaron el SMI progresivamente y redujeron la temporalidad por debajo del 15%.',
        lawsMaintain: 'Reforma laboral de 2021 y subidas del SMI.',
        lawsRepeal: 'Precariedad derivada del marco anterior.',
        votes: 'Votó A FAVOR de la reforma laboral y los sucesivos incrementos del SMI.',
        statements: 'Más empleo indefinido y salarios más dignos para impulsar la economía desde abajo.',
        source: 'Ministerio de Trabajo / BOE',
        sourceLink: 'https://www.mites.gob.es',
        date: '2023-2026',
        type: 'Normativa y Gestión'
      },
      'PP': {
        state: 'modificar',
        stateLabel: 'Propone flexibilidad y alivio de costes',
        proposal: 'Flexibilidad laboral, bonificaciones a la contratación indefinida real, reducción de cargas a empresas y mejora de la productividad y formación dual.',
        governance: 'Políticas activas de empleo en comunidades autónomas orientadas a la inserción y formación.',
        lawsMaintain: 'Elementos estructurales de estabilidad con flexibilidad empresarial.',
        lawsRepeal: 'Rigideces que dificulten la creación de empleo en pymes.',
        votes: 'Votó A FAVOR de la reforma laboral tras acuerdo inicial o con matices críticos (voto decisivo histórico).',
        statements: 'El empleo se crea apoyando a las empresas y reduciendo costes laborales e impuestos.',
        source: 'Programa económico PP',
        sourceLink: 'https://www.congreso.es',
        date: '2024-2026',
        type: 'Programa y Votación'
      },
      'Podemos': {
        state: 'favor',
        stateLabel: 'A favor de reducir jornada y subir SMI',
        proposal: 'Fijar el SMI en 1.800 euros y reducir la jornada laboral semanal a 30 horas por ley sin pérdida salarial.',
        governance: 'Impulso al incremento del SMI y la normativa laboral durante el gobierno de coalición.',
        lawsMaintain: 'Derechos de negociación colectiva.',
        lawsRepeal: 'Flexibilidad de despido y contratos precarios.',
        votes: 'Votó A FAVOR de las subidas del SMI y exigió reducciones drásticas de jornada.',
        statements: 'Trabajar menos para trabajar todos y vivir mejor.',
        source: 'Programa Podemos',
        sourceLink: 'https://www.congreso.es',
        date: '2023-2026',
        type: 'Programa'
      },
      'Frente Amplio': {
        state: 'favor',
        stateLabel: 'A favor de jornada de 32 horas y SMI al alza',
        proposal: 'Reducción de jornada a 32 horas semanales e incremento continuo del SMI.',
        governance: 'Promoción de reducciones de jornada en el diálogo social.',
        lawsMaintain: 'Derechos de los trabajadores.',
        lawsRepeal: 'Medidas de desregulación.',
        votes: 'Votó A FAVOR.',
        statements: 'Reparto del trabajo y mejora salarial.',
        source: 'Congreso',
        sourceLink: 'https://www.congreso.es',
        date: '2025-2026',
        type: 'Programa'
      },
      'VOX': {
        state: 'derogar',
        stateLabel: 'Propone derogar reforma laboral',
        proposal: 'Derogar la reforma laboral de 2021 por considerarla insuficiente o pactada con sindicatos corporativos, reduciendo trabas al despido y fomentando la libertad de contratación.',
        governance: 'Oposición parlamentaria a la legislación laboral del Gobierno.',
        lawsMaintain: 'Libertad de empresa.',
        lawsRepeal: 'Reforma laboral de 2021 y trabas a la contratación.',
        votes: 'Votó EN CONTRA de la reforma laboral y de los decretos de SMI.',
        statements: 'Las imposiciones gubernamentales al salario y jornada hunden a las pymes.',
        source: 'Congreso de los Diputados',
        sourceLink: 'https://www.congreso.es',
        date: '2024-2026',
        type: 'Votación'
      },
      'Se Acabó La Fiesta': {
        state: 'modificar',
        stateLabel: 'Alivio fiscal y autónomos',
        proposal: 'Foco en la exoneración fiscal de nuevos autónomos y reducción de grasa burocrática.',
        governance: 'Sin poder legislativo central directo.',
        lawsMaintain: 'Incentivos de empleo autónomo.',
        lawsRepeal: 'Leyes intervencionistas.',
        votes: 'Posición liberal-populista.',
        statements: 'Menos trabas y más libertad para crear empleo.',
        source: 'SALF',
        sourceLink: 'https://www.congreso.es',
        date: '2024-2026',
        type: 'Propuesta'
      }
    }
  }
];

let order = [];
let answers = {};
let index = 0;
let activeAnswerTopic = 'Todos';

const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function getLabel(v) {
  if (v === undefined || v === null || v === 0) return 'Sin respuesta';
  const s = scale.find(item => item.v === v);
  if (!s) return 'Sin respuesta';
  return s.label + (s.sub ? ' ' + s.sub : '');
}

function start() {
  order = topics.flatMap(([topic]) => {
    const group = questions.filter(q => q.topic === topic);
    for (let i = group.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [group[i], group[j]] = [group[j], group[i]];
    }
    return group;
  });
  answers = {};
  index = 0;
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

  if (targetId === 'topicsSection') renderTopicsSection();
  if (targetId === 'comparatorSection') renderComparatorSection();
  if (targetId === 'legislativeSection') renderLegislativeSection();
  if (targetId === 'sourcesSection') renderSourcesSection();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderQuestion() {
  const q = order[index];
  $('progressText').textContent = `Pregunta ${index + 1} de ${order.length}`;
  $('progressPct').textContent = `${Math.round((index + 1) / order.length * 100)} %`;
  $('progressFill').style.width = `${(index + 1) / order.length * 100}%`;
  $('topic').textContent = q.topic;
  $('answered').textContent = `${Object.keys(answers).length} respondidas`;
  $('partySource').textContent = 'Propuesta atribuida a ' + q.party;
  $('statement').textContent = q.text;
  $('scale').innerHTML = scale.map(s =>
    `<button class="choice" data-v="${s.v}" aria-pressed="${answers[q.id] === s.v}"><strong>${s.v}</strong>${s.label}<small>${s.sub}</small></button>`
  ).join('');
  document.querySelectorAll('.choice').forEach(b => b.addEventListener('click', () => {
    answers[q.id] = Number(b.dataset.v);
    renderQuestion();
  }));
  $('skip').textContent = answers[q.id] === 0 ? 'Sin opinión · seleccionada' : 'No tengo opinión / Prefiero no responder';
  $('next').disabled = answers[q.id] === undefined;
  $('next').textContent = index === order.length - 1 ? 'Ver resultados' : 'Siguiente';
  $('prev').disabled = index === 0;
}

function next() {
  if (index < order.length - 1) {
    index++;
    renderQuestion();
  } else {
    results();
  }
}

function previous() {
  if (index > 0) {
    index--;
    renderQuestion();
  }
}

function skip() {
  answers[order[index].id] = 0;
  if (index < order.length - 1) {
    index++;
    renderQuestion();
  } else {
    results();
  }
}

function score(items) {
  const vals = items.filter(q => answers[q.id] && answers[q.id] !== 0).map(q => (answers[q.id] - 1) * 25);
  return vals.length ? { value: vals.reduce((a, b) => a + b, 0) / vals.length, count: vals.length } : null;
}

function partyScores(list = questions) {
  return parties.map(p => ({
    party: p,
    ...(score(list.filter(q => q.party === p)) || { value: null, count: 0 })
  })).sort((a, b) => (b.value ?? -1) - (a.value ?? -1));
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
  switchSection('results');

  const ranked = partyScores();
  const valid = ranked.filter(x => x.value !== null);
  const winner = valid[0];
  const second = valid[1];

  $('winner').textContent = winner ? winner.party : 'Sin datos suficientes';
  $('winnerScore').textContent = winner ? `${Math.round(winner.value)} % de afinidad` : 'No has respondido propuestas puntuables';
  $('resultSummary').textContent = winner
    ? `Tu mayor coincidencia en las propuestas respondidas es ${winner.party}${second ? `, seguido de ${second.party} (${Math.round(second.value)} %)` : ''}. Has respondido ${Object.values(answers).filter(v => v > 0).length} de ${questions.length} afirmaciones.`
    : 'Responde al menos una propuesta para calcular una comparación.';

  bars('partyChart', ranked);

  $('topicChart').innerHTML = topics.slice(0, 4).map(([name]) => {
    const r = partyScores(questions.filter(q => q.topic === name)).find(x => x.value !== null);
    return `<div><b>${r ? Math.round(r.value) + '%' : '—'}</b><span>${esc(name)}</span><span class="mini">${r ? esc(r.party) : 'Sin datos'}</span></div>`;
  }).join('');

  $('topicTabs').innerHTML = topics.map(([name], i) =>
    `<button class="tab ${i === 0 ? 'active' : ''}" data-topic="${esc(name)}">${esc(name)}</button>`
  ).join('');

  document.querySelectorAll('#topicTabs .tab').forEach(b => b.addEventListener('click', () => {
    document.querySelectorAll('#topicTabs .tab').forEach(x => x.classList.remove('active'));
    b.classList.add('active');
    const rows = partyScores(questions.filter(q => q.topic === b.dataset.topic));
    bars('topicPartyChart', rows);
  }));

  bars('topicPartyChart', partyScores(questions.filter(q => q.topic === topics[0][0])));

  $('answerTabs').innerHTML = ['Todos', ...topics.map(t => t[0])].map((t, i) =>
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
  const list = questions.filter(q => (activeAnswerTopic === 'Todos' || q.topic === activeAnswerTopic));
  $('answerList').innerHTML = list.map(q => {
    const v = answers[q.id];
    const label = getLabel(v);
    return `<article class="answer"><div class="answer-top"><div class="statement">${esc(q.text)}</div><span class="tag">${esc(q.party)}</span></div><div class="answer-meta">${esc(q.topic)} · Tu respuesta: ${esc(label)}</div></article>`;
  }).join('');
}

function exportResults() {
  const ranked = partyScores();
  const lines = [
    'BRÚJULA — INFORME DE AFINIDAD POLÍTICA Y COMPARADOR',
    'Fuente: documentación oficial y programas electorales.',
    '',
    ...ranked.map(r => `${r.party}: ${pct(r.value)} (${r.count} propuestas respondidas)`),
    '',
    'RESPUESTAS',
    ...questions.map(q => `${q.topic} | ${q.party} | ${q.text} | ${getLabel(answers[q.id])}`),
    '',
    'Metodología: acuerdo con afirmaciones atribuidas; 0-100; no es una recomendación de voto.'
  ];
  const blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'brujula-resultados.txt';
  a.click();
  URL.revokeObjectURL(url);
}

/* Render Topics Section (Temas de Actualidad) */
function renderTopicsSection() {
  $('topicDetailTabs').innerHTML = detailedTopics.map((dt, i) =>
    `<button class="tab ${i === 0 ? 'active' : ''}" data-topic-id="${esc(dt.id)}">${esc(dt.title)}</button>`
  ).join('');

  document.querySelectorAll('#topicDetailTabs .tab').forEach(b => b.addEventListener('click', () => {
    document.querySelectorAll('#topicDetailTabs .tab').forEach(x => x.classList.remove('active'));
    b.classList.add('active');
    renderTopicDetailContent(b.dataset.topicId);
  }));

  renderTopicDetailContent(detailedTopics[0].id);
}

function renderTopicDetailContent(topicId) {
  const dt = detailedTopics.find(x => x.id === topicId);
  if (!dt) return;

  let html = `
    <div class="topic-card">
      <h3>${esc(dt.title)}</h3>
      <p style="font-size:13px;line-height:1.55;color:#c9bdb0">${esc(dt.summary)}</p>
      <div style="font-size:11px;color:var(--muted);margin-top:8px"><b>Situación legal:</b> ${esc(dt.legal)}</div>
      <div style="font-size:11px;color:var(--muted);margin-top:4px"><b>Última actualización:</b> ${esc(dt.lastUpdate)}</div>
    </div>
    <h4 style="font-size:16px;margin:18px 0 10px;color:var(--gold)">Posiciones y actuaciones por partido</h4>
  `;

  for (const [partyName, info] of Object.entries(dt.parties)) {
    html += `
      <div class="topic-card party-row">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
          <strong style="font-size:15px;color:var(--paper)">${esc(partyName)}</strong>
          <span class="badge ${esc(info.state)}">${esc(info.stateLabel)}</span>
        </div>
        <div style="font-size:13px;margin:6px 0;line-height:1.45"><b>Propuesta / Posición:</b> ${esc(info.proposal)}</div>
        <div style="font-size:12px;margin:6px 0;color:#c9bdb0"><b>Gestión / Aplicación:</b> ${esc(info.governance)}</div>
        <div style="font-size:12px;margin:6px 0;color:#c9bdb0"><b>Votación en Congreso:</b> ${esc(info.votes)}</div>
        <div style="font-size:11px;margin-top:8px;color:var(--muted)"><b>Fuente oficial:</b> ${esc(info.source)} (${esc(info.date)})</div>
      </div>
    `;
  }

  $('topicDetailContent').innerHTML = html;
}

/* Render Comparator Section */
function renderComparatorSection() {
  const select = $('compareTopicSelect');
  select.innerHTML = detailedTopics.map(dt => `<option value="${dt.id}">${esc(dt.title)}</option>`).join('');

  select.onchange = () => renderComparatorContent(select.value);
  renderComparatorContent(detailedTopics[0].id);
}

function renderComparatorContent(topicId) {
  const dt = detailedTopics.find(x => x.id === topicId);
  if (!dt) return;

  let html = `<div class="topic-card"><h3>Comparativa global: ${esc(dt.title)}</h3><p class="mini">${esc(dt.summary)}</p></div>`;

  html += `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:12px;margin-top:14px">`;
  for (const [partyName, info] of Object.entries(dt.parties)) {
    html += `
      <div class="topic-card" style="margin:0">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
          <b style="font-size:15px;color:var(--gold)">${esc(partyName)}</b>
          <span class="badge ${esc(info.state)}">${esc(info.stateLabel)}</span>
        </div>
        <div style="font-size:12px;margin:6px 0;line-height:1.4"><b>Propuesta:</b> ${esc(info.proposal)}</div>
        <div style="font-size:12px;margin:6px 0;color:#c9bdb0"><b>Leyes a mantener/derogar:</b> Mantener: ${esc(info.lawsMaintain)} | Derogar/Modificar: ${esc(info.lawsRepeal)}</div>
        <div style="font-size:12px;margin:6px 0;color:#c9bdb0"><b>Votación:</b> ${esc(info.votes)}</div>
        <div style="font-size:11px;margin-top:6px;color:var(--muted)">Fuente: ${esc(info.source)}</div>
      </div>
    `;
  }
  html += `</div>`;

  $('comparatorContent').innerHTML = html;
}

/* Render Legislative Section (Decretos de vivienda y votaciones) */
function renderLegislativeSection() {
  $('legislativeContent').innerHTML = `
    <div class="topic-card">
       <h3>Caso Específico: Los Decretos de Vivienda</h3>
       <p style="font-size:13px;line-height:1.55;color:#c9bdb0">Análisis riguroso de las normas y reales decretos en materia de vivienda y alquiler debatidos en el Congreso de los Diputados, su tramitación parlamentaria y el sentido del voto de cada grupo.</p>
    </div>
    <div class="topic-card">
       <h3>1. Normativa y Contenido de los Decretos</h3>
       <p style="font-size:13px;line-height:1.55;color:#c9bdb0">Los decretos del Gobierno recogen medidas sobre prórrogas extraordinarias de contratos de alquiler en vigor, limitación temporal de actualización de rentas (tope del IPC o del 2%/3%), declaración de zonas de mercado residencial tensionado y medidas de protección ante desahucios para hogares vulnerables sin alternativa habitacional.</p>
       <div style="font-size:12px;margin-top:8px;color:var(--gold)"><b>Verificación jurídica:</b> No existen contratos indefinidos automáticos ni expropiaciones de viviendas particulares en la legislación vigente; las medidas se centran en la prórroga temporal de contratos sujetos a la LAU y límites extraordinarios a la actualización de rentas.</div>
    </div>
    <div class="topic-card">
       <h3>2. Posición y Votaciones de los Partidos</h3>
       <p style="font-size:13px;line-height:1.55;color:#c9bdb0"><b>PSOE y Sumar / Frente Amplio / Podemos:</b> Apoyan firmemente los decretos, su convalidación parlamentaria y la ampliación de la Ley de Vivienda para contener los precios.<br><br>
       <b>PP:</b> Vota en contra de los decretos y de los límites a los precios por considerar que reducen la oferta de alquiler y generan inseguridad jurídica a los propietarios.<br><br>
       <b>VOX:</b> Oposición frontal a la intervención del mercado de alquiler y defensa de la desregulación y de leyes estrictas antiokupación.<br><br>
       <b>Se Acabó La Fiesta:</b> Apuesta por la eliminación de impuestos a la compra y aumento de suelo, con postura crítica hacia la limitación de alquileres.</p>
    </div>
    <div class="topic-card">
       <h3>3. Consecuencias para Propietarios e Inquilinos</h3>
       <p style="font-size:13px;line-height:1.55;color:#c9bdb0"><b>Para inquilinos:</b> Protección frente a subidas abusivas en zonas tensionadas y prórrogas extraordinarias en situaciones de vulnerabilidad.<br><br>
       <b>Para propietarios:</b> Limitaciones en la fijación de la renta inicial en áreas tensionadas e incentivos fiscales reducidos según las comunidades autónomas. Reclamación por parte de asociaciones de propietarios de mayor seguridad jurídica.</p>
    </div>
  `;
}

/* Render Sources Section */
function renderSourcesSection() {
  // Already static in HTML, but we can enrich or ensure it renders cleanly.
}

/* Event Listeners for Navigation */
document.querySelectorAll('.nav-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    switchSection(tab.dataset.target);
  });
});

$('start').addEventListener('click', start);
$('goTopics').addEventListener('click', () => switchSection('topicsSection'));
$('goComparator').addEventListener('click', () => switchSection('comparatorSection'));
$('next').addEventListener('click', next);
$('prev').addEventListener('click', previous);
$('skip').addEventListener('click', skip);
$('restart').addEventListener('click', () => {
  switchSection('home');
});
$('export').addEventListener('click', exportResults);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
}
