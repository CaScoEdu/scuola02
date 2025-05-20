const PATH_FILE_JSON = './scuola02.json';
fetch(PATH_FILE_JSON)
    .then(response => response.json())
    .then(SCUOLA => displayScuola(SCUOLA));

function displayScuola(SCUOLA){
    // ciclo sull'array delle classi
    SCUOLA.forEach(CLASSE =>{
        // creo la sezione per la nuova classe
        const SEZIONE_CLASSE = document.createElement("section");
        
        // creo l'intestazione per la classe
        const TITOLO_CLASSE = document.createElement("h1");
        TITOLO_CLASSE.innerHTML += CLASSE.anno + CLASSE.sezione +
            " " + CLASSE.indirizzo + " " + CLASSE.numeroAlunni+ " alunni";
        SEZIONE_CLASSE.appendChild(TITOLO_CLASSE);
        
        // creo la lista non ordinata per le materie
        const LISTA_MATERIE = document.createElement("ul");
        SEZIONE_CLASSE.appendChild(LISTA_MATERIE);
        
        // aggiungo la section della nuova classe alla section delle classi
        document.getElementById('svolgimento').appendChild(SEZIONE_CLASSE);
        
        // ciclo sulle materie della classe
        CLASSE.materie.forEach(MATERIA => {

            // creo l'elemento nella lista non ordinata di materie della classe corrente
            const LINE_ITEM = document.createElement("li");

            LINE_ITEM.innerHTML = MATERIA.nome + " " + MATERIA.ore + " ore ";
            if (MATERIA.obbligatoria)
                LINE_ITEM.innerHTML += " obbligatoria";
            else
                LINE_ITEM.innerHTML += " non obbligatoria";

            LISTA_MATERIE.appendChild(LINE_ITEM);                        
        });
    })

}
