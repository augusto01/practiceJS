const apiUrl = "https://jsonplaceholder.typicode.com/users";
const inputUI = document.querySelector("#buscador");
const listaUI = document.querySelector("#lista-usuarios");

let usuariosOriginales = []; // Nuestra "base de datos" local

// 1. Función para traer los datos
const getData = async () => {
  try {
    const res = await fetch(apiUrl);
    if (!res.ok) throw new Error("Error en la red");

    // ¡OJO ACÁ!: Sin el 'const', para usar la variable de afuera
    usuariosOriginales = await res.json(); 
    
    // Mostramos todos al cargar por primera vez
    renderizar(usuariosOriginales);

  } catch (err) {
    console.error(err.message);
  }
};

// 2. Función para "dibujar" en el HTML
function renderizar(pArray) {
    // Correcto: propiedad = valor
    listaUI.innerHTML = ""; 

    pArray.forEach(user => {
        const li = document.createElement("li");
        li.textContent = user.name;
        listaUI.appendChild(li);
    });
}

// 3. Evento del buscador
inputUI.addEventListener("input", (event) => {
    const busqueda = event.target.value.toLowerCase();

    const filtrados = usuariosOriginales.filter(user => {
        // Agregamos los paréntesis () a toLowerCase
        return user.name.toLowerCase().includes(busqueda);
    });

    renderizar(filtrados);
});

getData();