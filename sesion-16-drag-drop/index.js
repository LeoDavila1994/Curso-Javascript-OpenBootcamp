const parrafos = document.querySelectorAll(".parrafo");
const secciones = document.querySelectorAll(".drag");

parrafos.forEach(parrafo => {
  parrafo.addEventListener("dragstart", e =>{
    parrafo.classList.add("dragging");
    e.dataTransfer.setData("id", parrafo.id);
  })

  parrafo.addEventListener("dragend", () => {
    parrafo.classList.remove("dragging");
  })
});

secciones.forEach(seccion => {
  seccion.addEventListener("dragover", e => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  });

  seccion.addEventListener("drop", e => {
    const parrafo_id = e.dataTransfer.getData("id");
    const new_position = document.getElementById(parrafo_id);
    seccion.appendChild(new_position);
    new_position.classList.add("deleted");
  });
});


