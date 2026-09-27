/* ============================================================
   Repostería Mentor — Prototipo Hi-Fi · app.js
   SOLO navegación entre pantallas + toggles de presentación.
   Nada calcula de verdad.
   ============================================================ */
const stack = [];
const TAB_SCREENS = ['home', 'recetas', 'costeo', 'precios', 'mas'];

function currentId() {
  const el = document.querySelector('.screen.active');
  return el ? el.id.replace(/^s-/, '') : null;
}

function show(id) {
  document.querySelectorAll('.screen').forEach(s => {
    s.classList.remove('active', 'enter');
  });
  const el = document.getElementById('s-' + id);
  if (!el) return;
  el.classList.add('active');
  // reinicia la animación de entrada (cine solo en transición)
  void el.offsetWidth;
  el.classList.add('enter');
  el.scrollTop = 0;
  document.getElementById('tabbar').classList.toggle('show', TAB_SCREENS.includes(id));
  // tab activo
  document.querySelectorAll('#tabbar button').forEach(b =>
    b.classList.toggle('on', b.dataset.go === id));
  // selector del chrome
  const sel = document.getElementById('screenJump');
  if (sel) sel.value = id;
}

function go(id) {
  const cur = currentId();
  if (cur && cur !== id) stack.push(cur);
  show(id);
}

function back() {
  const prev = stack.pop();
  show(prev || 'home');
}

/* ---------- toast ---------- */
let toastTimer = null;
function toast(msgKey) {
  const el = document.getElementById('toast');
  el.textContent = t(msgKey);
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2200);
}
function toastRound2() { toast('toast.r2'); }

/* ---------- idioma ---------- */
function setLang(l) {
  LANG = (l === 'en') ? 'en' : 'es';
  applyLang();
}

/* ---------- tema ---------- */
function setTheme(mode) {
  document.documentElement.dataset.theme = (mode === 'dark') ? 'dark' : 'light';
  document.querySelectorAll('#themeSeg button').forEach(b =>
    b.classList.toggle('on', b.dataset.theme === mode));
}

/* ---------- PIN pad (visual) ---------- */
let pinLen = 0;
function pinPress(d) {
  const dots = document.querySelectorAll('#pinDots i');
  if (d === 'del') {
    if (pinLen > 0) { pinLen--; dots[pinLen].classList.remove('fill'); }
    return;
  }
  if (pinLen >= 4) return;
  dots[pinLen].classList.add('fill');
  pinLen++;
  if (pinLen === 4) {
    setTimeout(() => { pinLen = 0; dots.forEach(x => x.classList.remove('fill')); go('onb-disclaimer'); }, 450);
  }
}

/* ---------- selección de mentor ---------- */
function pickMentor(el) {
  document.querySelectorAll('.mentor-opt').forEach(o => o.classList.remove('sel'));
  el.classList.add('sel');
}

/* ---------- pregunta secreta ---------- */
function pickQ(el, custom) {
  document.querySelectorAll('.q-opt').forEach(o => o.classList.remove('sel'));
  el.classList.add('sel');
  document.getElementById('qCustomWrap').style.display = custom ? 'block' : 'none';
}

/* ---------- escalado modo A/B (visual) ---------- */
function setMode(m, btn) {
  document.querySelectorAll('#modeSeg button').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
  document.getElementById('modeA').style.display = (m === 'a') ? 'block' : 'none';
  document.getElementById('modeB').style.display = (m === 'b') ? 'block' : 'none';
}

/* ---------- init ---------- */
document.addEventListener('DOMContentLoaded', () => {
  applyLang();
  setTheme('light');
  const sel = document.getElementById('screenJump');
  if (sel) sel.addEventListener('change', e => { stack.length = 0; show(e.target.value); });
  show('onb-welcome');
});
