// Ricreazione della griglia 3x3 tramite JS
const container = document.getElementById("container");
for (let i = 0; i < 9; i++) {
    //Creazione nuova cella
    let cella = document.createElement("div");
    cella.classList.add("cella");
    cella.innerText = i+1;
    //Evento click cella
    cella.addEventListener("click", function() {
    console.log("Click su cella ", i+1);        
    });
    //Aggiunta cella alla griglia
    container.append(cella);
}