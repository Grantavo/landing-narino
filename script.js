document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-toggle");

  menuBtn.addEventListener("click", () => {
    alert("Aquí podrías abrir un menú lateral o desplegable 😉");
  });

  document.querySelector(".edit-btn").addEventListener("click", () => {
    alert("Modo edición activado ✏️");
  });

  document.querySelector(".add-btn").addEventListener("click", () => {
    alert("Elemento agregado con éxito ➕");
  });
});
