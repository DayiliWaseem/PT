
let checklistData = null;

function renderChecklist(filter = '') {
  const container = document.getElementById('checklist-container');
  container.innerHTML = '';
  if (!checklistData) return;

  Object.entries(checklistData.categories).forEach(([category, items]) => {
    const filteredItems = items.filter(item =>
      item.name.toLowerCase().includes(filter) || item.description.toLowerCase().includes(filter)
    );

    if (filteredItems.length === 0) return;

    const catDiv = document.createElement('div');
    catDiv.className = 'category';
    const title = document.createElement('h2');
    title.textContent = category;
    catDiv.appendChild(title);

    filteredItems.forEach((item, index) => {
      const div = document.createElement('div');
      div.className = 'checklist-item';
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      const id = `${category}-${index}`;
      checkbox.id = id;

      browser.storage.local.get(id).then(result => {
        checkbox.checked = result[id] || false;
      });

      checkbox.addEventListener('change', () => {
        browser.storage.local.set({ [id]: checkbox.checked });
      });

      const label = document.createElement('label');
      label.htmlFor = id;
      label.textContent = item.name;

      const desc = document.createElement('p');
      desc.className = 'description';
      desc.textContent = item.description;

      div.appendChild(checkbox);
      div.appendChild(label);
      catDiv.appendChild(div);
      catDiv.appendChild(desc);
    });

    container.appendChild(catDiv);
  });
}

fetch('checklist_detailed.json')
  .then(res => res.json())
  .then(data => {
    checklistData = data;
    renderChecklist('');
  });

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search');
  searchInput.addEventListener('input', () => {
    renderChecklist(searchInput.value.toLowerCase());
  });
});
