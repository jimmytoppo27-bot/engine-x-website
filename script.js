const $ = (selector) => document.querySelector(selector);
const categoryGrid = $('#categoryGrid');
const itemGrid = $('#itemGrid');

// NOTE: If your repo already has a separate data.js defining ENGINE_CATEGORIES / ENGINE_ITEMS,
// remove the block below (or remove this file's duplicate) to avoid a "already declared" error.
const ENGINE_CATEGORIES = [
  { icon: '⚙️', name: 'Machines', description: 'Core mechanisms, engines and moving parts that power everyday devices.', link: '#featured', category: 'Machines' },
  { icon: '💡', name: 'Innovation', description: 'Emerging ideas and breakthroughs reshaping how things are engineered.', link: '#featured', category: 'Innovation' },
  { icon: '💻', name: 'Technology', description: 'Software, sensors and smart systems behind modern engineering.', link: '#featured', category: 'Technology' },
  { icon: '🚗', name: 'Automobile', description: 'Engines, drivetrains and the systems that make vehicles run.', link: '#featured', category: 'Automobile' },
  { icon: '🚀', name: 'Space', description: 'Rockets, propulsion and the hardware that leaves the atmosphere.', link: '#featured', category: 'Space' },
  { icon: '🚢', name: 'Marine', description: 'Ship engines, propulsion and engineering beneath the waves.', link: '#featured', category: 'Marine' }
];

const ENGINE_ITEMS = [
  { icon: '🛠️', name: 'Hydraulic Press', description: 'Uses fluid pressure to generate massive compressive force.', link: '#', category: 'Machines' },
  { icon: '🔩', name: 'CNC Milling Machine', description: 'Computer-controlled cutting for precision manufacturing.', link: '#', category: 'Machines' },
  { icon: '🖨️', name: '3D Printing', description: 'Additive manufacturing that builds parts layer by layer.', link: '#', category: 'Innovation' },
  { icon: '📡', name: 'Smart Sensors', description: 'Devices that detect and report real-world engineering data.', link: '#', category: 'Innovation' },
  { icon: '🤖', name: 'AI in Engineering', description: 'Machine learning applied to design, testing and diagnostics.', link: '#', category: 'Technology' },
  { icon: '🌐', name: 'IoT Systems', description: 'Connected devices sharing data across engineering systems.', link: '#', category: 'Technology' },
  { icon: '🔥', name: 'Combustion Engine', description: 'Converts fuel into motion through controlled internal explosions.', link: '#', category: 'Automobile' },
  { icon: '🔋', name: 'Electric Powertrain', description: 'Battery-driven motor systems replacing traditional engines.', link: '#', category: 'Automobile' },
  { icon: '🚀', name: 'Rocket Engine', description: 'High-thrust propulsion systems built for spaceflight.', link: '#', category: 'Space' },
  { icon: '🛰️', name: 'Satellite Systems', description: 'Orbital hardware for communication, imaging and navigation.', link: '#', category: 'Space' },
  { icon: '⚓', name: 'Ship Propulsion', description: 'Engines and propellers that move vessels through water.', link: '#', category: 'Marine' },
  { icon: '🌊', name: 'Submarine Engineering', description: 'Systems built to operate under extreme underwater pressure.', link: '#', category: 'Marine' }
];

function cardTemplate(item, isCategory=false){
  return `<article class="card">
    <div class="card-icon">${item.icon}</div>
    <h3>${item.name}</h3>
    <p>${item.description}</p>
    <a class="card-link" href="${item.link}" ${isCategory ? `data-category="${item.category}"` : ''}>${isCategory ? 'Explore category →' : 'View details →'}</a>
  </article>`;
}
function renderCategories(){categoryGrid.innerHTML = ENGINE_CATEGORIES.map(c=>cardTemplate(c,true)).join('');}
function renderItems(query=''){
  const filtered = ENGINE_ITEMS.filter(item => `${item.name} ${item.category} ${item.description}`.toLowerCase().includes(query.toLowerCase()));
  itemGrid.innerHTML = filtered.length ? filtered.map(item=>cardTemplate(item)).join('') : '<p>No matching items found.</p>';
}
$('#searchInput')?.addEventListener('input', e=>renderItems(e.target.value));
$('#menuToggle')?.addEventListener('click',()=>$('#mainNav').classList.toggle('open'));
categoryGrid?.addEventListener('click', e=>{
  const link = e.target.closest('a[data-category]');
  if(!link) return;
  e.preventDefault();
  const cat = link.dataset.category;
  const input = $('#searchInput');
  if(input) input.value = cat;
  renderItems(cat);
  $('#featured')?.scrollIntoView({behavior:'smooth'});
});
$('#year').textContent = new Date().getFullYear();
renderCategories(); renderItems();

