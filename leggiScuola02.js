const pathFileJson = './scuola02.json';

async function loadAndDisplayScuola() {
  const sezioneClassi = document.getElementById('classi');

  try {
    // 1. Richiesta di rete
    const response = await fetch(pathFileJson);

    if (!response.ok) {
      throw new Error(`Errore di rete: ${response.status}`);
    }

    // 2. Estrazione dei dati JSON
    const scuolaData = await response.json();

    // 3. Svuota il contenitore principale prima di inserire i nuovi elementi
    sezioneClassi.innerHTML = "";

    // 4. Elaborazione e rendering dei dati
    scuolaData.forEach(classe => {
      // Creo la sezione per la singola classe
      const sezioneClasse = document.createElement("section");

      // Intestazione della classe
      const titoloClasse = document.createElement("h1");
      titoloClasse.textContent =
        `${classe.anno}${classe.sezione} ${classe.indirizzo} - ${classe.numeroAlunni} alunni`;
      sezioneClasse.appendChild(titoloClasse);

      // Lista delle materie
      const listaMaterie = document.createElement("ul");
      sezioneClasse.appendChild(listaMaterie);

      // Ciclo interno per le materie della classe corrente
      classe.materie.forEach(materia => {
        const lineItem = document.createElement("li");
        const statoObbligatoria = materia.obbligatoria ? "obbligatoria" : "non obbligatoria";

        lineItem.textContent = `${materia.nome} (${materia.ore} ore) - ${statoObbligatoria}`;
        listaMaterie.appendChild(lineItem);
      });

      // Aggiungo la sezione completa al DOM
      sezioneClassi.appendChild(sezioneClasse);
    });

  } catch (errore) {
    console.error("Errore durante l'operazione:", errore);
    sezioneClassi.textContent = "Impossibile caricare o visualizzare i dati scolastici.";
  }
}

// Avvia l'intero processo
loadAndDisplayScuola();