let teamCount = 0;

function addToteam(pokemon) {
    const teamItems = document.getElementById("team-items");
    
    if (teamItems.childElementCount >= 6) {
      displayErrorMessage("La squadra è al completo. Non puoi aggiungere più Pokémon.");
      return;
    }
    
    const listItem = document.createElement("li");
    const img = document.createElement("img");
    img.src = window.location.href + "images/" + pokemon + ".png";
    img.alt = pokemon;
    
    const removeButton = document.createElement("button");
    removeButton.textContent = "Rimuovi";
    removeButton.addEventListener("click", function() {
      listItem.remove();
      teamCount--;
      document.getElementById("team-count").textContent = teamCount;
      if (teamCount === 0) {
        document.getElementById("team").classList.add("hidden");
      }
      const teamHeight = teamItems.childElementCount * 50;
      document.getElementById("team").style.height = `${Math.min(teamHeight+200, 1000)}px`;
    });
    
    listItem.appendChild(img);
    listItem.appendChild(removeButton);
    teamItems.appendChild(listItem);
    
    teamCount++;
    document.getElementById("team-count").textContent = teamCount;
    
    document.getElementById("team").classList.remove("hidden");
    
    const teamHeight = teamItems.childElementCount * 50;
    document.getElementById("team").style.height = `${Math.min(teamHeight+200, 500)}px`;
  }
  

function toggleteam() {
  document.getElementById("team").classList.toggle("hidden");
}

function clearteam() {
    const teamItems = document.getElementById("team-items");
    teamItems.innerHTML = "";
    
    teamCount = 0;
    document.getElementById("team-count").textContent = teamCount;
    
    document.getElementById("team").classList.add("hidden");
    
    document.getElementById("team").style.height = "auto";
  }


function displayErrorMessage(message) {
    const errorMessage = document.getElementById("error-message");
    errorMessage.textContent = message;
    errorMessage.classList.remove("hidden");

    setTimeout(() => {
        errorMessage.classList.add("hidden");
    }, 3000);
}