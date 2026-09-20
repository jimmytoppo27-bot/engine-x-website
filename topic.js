const params = new URLSearchParams(location.search);
const topicKey = params.get('topic') || 'machines';
const data = TOPIC_DATA[topicKey] || TOPIC_DATA.machines;

document.getElementById('topicIcon').textContent = data.icon;
document.getElementById('topicTitle').textContent = data.name + ' Anatomy';
document.getElementById('livesText').textContent = data.lives;
document.getElementById('detailsPanel').innerHTML = '<p>' + data.description + '</p>';
document.title = 'ENGINE-X | ' + data.name + ' Anatomy';

const stackSpin = document.getElementById('stackSpin');
const layersPanel = document.getElementById('layersPanel');
const partsPanel = document.getElementById('partsPanel');

function engineSVG(){
  return '<div class="eng-svg-wrap"><svg viewBox="0 0 120 170">' +
    '<g class="eng-part" data-layer="oil-pan"><rect x="25" y="112" width="70" height="24" rx="8" fill="#3a4a63"></rect></g>' +
    '<g class="eng-part" data-layer="rotating-assembly"><line x1="40" y1="60" x2="60" y2="95" stroke="#8a6cff" stroke-width="4"></line><line x1="80" y1="60" x2="60" y2="95" stroke="#8a6cff" stroke-width="4"></line><circle cx="60" cy="95" r="8" fill="#8a6cff"></circle></g>' +
    '<g class="eng-part" data-layer="manifolds"><path d="M15,40 q-12,12 0,28" stroke="#b98a5e" stroke-width="6" fill="none"></path><path d="M105,40 q12,12 0,28" stroke="#b98a5e" stroke-width="6" fill="none"></path></g>' +
    '<g class="eng-part" data-layer="engine-block"><rect x="15" y="52" width="90" height="55" rx="8" fill="#5ea7ff"></rect></g>' +
    '<g class="eng-part" data-layer="cylinder-head"><rect x="20" y="28" width="80" height="20" rx="6" fill="#8fa1bc"></rect></g>' +
    '<g class="eng-part" data-layer="valve-cover"><rect x="25" y="4" width="70" height="20" rx="6" fill="#c94b4b"></rect><circle cx="40" cy="14" r="3" fill="#07101e"></circle><circle cx="60" cy="14" r="3" fill="#07101e"></circle><circle cx="80" cy="14" r="3" fill="#07101e"></circle></g>' +
    '</svg></div>';
}

function genericStack(){
  const n = data.layers.length;
  return data.layers.map((layer, i) => {
    const offset = (i - (n - 1) / 2) * 46;
    return '<div class="layer-block" data-layer="' + layer.id + '" style="background:' + layer.color + ';transform:translate(-50%,-50%) translateY(' + offset + 'px)">' + layer.name + '</div>';
  }).join('');
}

stackSpin.innerHTML = data.engine ? engineSVG() : genericStack();

function partEls(){
  return data.engine
    ? Array.from(stackSpin.querySelectorAll('.eng-part'))
    : Array.from(stackSpin.querySelectorAll('.layer-block'));
}
const hiddenCls = data.engine ? 'hidden-layer' : 'hidden-layer';

layersPanel.innerHTML = data.layers.map(layer =>
  '<div class="layer-row" data-layer="' + layer.id + '">' +
    '<span class="layer-dot" style="background:' + layer.color + '"></span>' +
    '<span class="layer-label">' + layer.name + '</span>' +
  '</div>'
).join('');

partsPanel.innerHTML = data.layers.map(layer =>
  '<div class="part-item"><span class="layer-dot" style="background:' + layer.color + '"></span>' + layer.name + '</div>'
).join('');

let isolated = null;
function applyState(){
  partEls().forEach(el => {
    const id = el.dataset.layer;
    const row = layersPanel.querySelector('.layer-row[data-layer="' + id + '"]');
    const off = row.classList.contains('layer-off');
    el.classList.toggle('hidden-layer', off);
    el.classList.toggle('dim', !off && isolated && isolated !== id);
  });
}

layersPanel.addEventListener('click', e => {
  const row = e.target.closest('.layer-row');
  if(!row) return;
  const id = row.dataset.layer;
  if(e.detail === 2 || e.shiftKey){
    isolated = isolated === id ? null : id;
    layersPanel.querySelectorAll('.layer-row').forEach(r => r.classList.toggle('layer-isolated', r.dataset.layer === isolated));
  } else {
    row.classList.toggle('layer-off');
  }
  applyState();
});
applyState();

document.getElementById('layersToggle').addEventListener('click', () => {
  layersPanel.classList.toggle('open');
});

const controlsBtn = document.getElementById('controlsBtn');
controlsBtn.addEventListener('click', () => {
  const paused = stackSpin.classList.toggle('paused');
  controlsBtn.textContent = paused ? '▶ Controls' : '⏸ Controls';
});

document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const which = tab.dataset.tab;
    document.getElementById('partsPanel').classList.toggle('hidden', which !== 'parts');
    document.getElementById('detailsPanel').classList.toggle('hidden', which !== 'details');
  });
});
