// Ricreazione della griglia 3x3 tramite JS
const container = document.getElementById("container");
for (let i = 0; i < 9; i++) {
    let cella = document.createElement("div");
    cella.classList.add("cella");
    container.append(cella);
}