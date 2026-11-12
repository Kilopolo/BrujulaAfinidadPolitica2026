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
    ['PP', 'Aplicar un IVA del 0 % a los alimentos básicos.'],
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
    ['PP', 'Eliminar el impuesto a la generación eléctrica.'],
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
  $('home').classList.add('hidden');
  $('results').classList.add('hidden');
  $('quiz').classList.remove('hidden');
  renderQuestion();
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
  $('quiz').classList.add('hidden');
  $('results').classList.remove('hidden');

  const ranked = partyScores();
  const valid = ranked.filter(x => x.value !== null);
  const winner = valid[0];
  const second = valid[1];

  $('winner').textContent = winner ? winner.party : 'Sin datos suficientes';
  $('winnerScore').textContent = winner ? `${Math.round(winner.value)} % de afinidad` : 'No has respondido propuestas puntuables';
  $('resultSummary').textContent = winner
    ? `Tu mayor coincidencia en las propuestas respondidas es ${winner.party}${second ? `, seguido de ${second.party} (${Math.round(second.value)} %)` : ''}. Has respondido ${Object.values(answers).filter(v => v > 0).length} de ${questions.length} afirmaciones. Se recomienda interpretar diferencias pequeñas como un empate técnico.`
    : 'Responde al menos una propuesta para calcular una comparación.';

  bars('partyChart', ranked);

  $('topicChart').innerHTML = topics.map(([name]) => {
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
  window.scrollTo({ top: 0, behavior: 'smooth' });
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
    'BRÚJULA — INFORME DE AFINIDAD POLÍTICA',
    'Fuente: infografía aportada por el usuario; posiciones no verificadas.',
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

$('start').addEventListener('click', start);
$('method').addEventListener('click', () => $('methodBox').classList.toggle('hidden'));
$('next').addEventListener('click', next);
$('prev').addEventListener('click', previous);
$('skip').addEventListener('click', skip);
$('restart').addEventListener('click', () => {
  $('results').classList.add('hidden');
  $('home').classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
$('export').addEventListener('click', exportResults);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
}
