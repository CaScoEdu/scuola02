const REQUEST_URL = './scuola02.json';

fetch(REQUEST_URL, {
    headers: {
        'Accept': 'application/json'
    }
}).
    then(response => response.json()).
    then(json_object => elabora(json_object));

function elabora(json_object) {
    const SCUOLA = json_object;

    // ciclo sull'array delle classi
    SCUOLA.forEach(classe => {
        // creo il div per la nuova classe
        const NUOVA_CLASSE = document.createElement("section");

        // creo il titolo per la classe
        const TITOLO_CLASSE = document.createElement("h1");
        TITOLO_CLASSE.innerHTML += classe.anno + classe.sezione + " " + classe.indirizzo + " " + classe.numeroAlunni + " alunni";
        NUOVA_CLASSE.appendChild(TITOLO_CLASSE);

        // creo la lista non ordinata per le materie
        const LISTA_MATERIE = document.createElement("ul");
        NUOVA_CLASSE.appendChild(LISTA_MATERIE);

        // aggiungo la section della nuova classe alla section delle classi
        document.getElementById('svolgimento').appendChild(NUOVA_CLASSE);

        // ciclo sulle materie della classe
        classe.materie.forEach(materia => {

            // creo l'elemento nella lista non ordinata di materie della classe corrente
            const MATERIA = document.createElement("li");

            MATERIA.innerHTML = materia.nome + " " + materia.ore + " ore ";
            if (materia.obbligatoria)
                MATERIA.innerHTML += " obbligatoria";
            else
                MATERIA.innerHTML += " non obbligatoria";

            LISTA_MATERIE.appendChild(MATERIA);
        });
    })
}
