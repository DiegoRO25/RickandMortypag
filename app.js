const btn = document.getElementById("btn");
const container = document.getElementById("container");

btn.addEventListener("click", () => {
  let search = document.getElementById("search").value.toLowerCase();

  fetch(`https://rickandmortyapi.com/api/character/?name=${search}`)
    .then(res => res.json())
    .then(data => renderCards(data.results))
    .catch(() => {
      container.innerHTML = `<h2>No se encontró el personaje :(</h2>`;
    });
});

function renderCards(data) {
  container.innerHTML = "";

  data.forEach(personaje => {
    container.innerHTML += `
      <div class="card">
        <img src="${personaje.image}" alt="${personaje.name}">
        <h3>${personaje.name}</h3>
        <p><strong>Estado:</strong> ${personaje.status}</p>
        <p><strong>Especie:</strong> ${personaje.species}</p>
        <p><strong>Origen:</strong> ${personaje.origin.name}</p>
      </div>
    `;
  });
}
