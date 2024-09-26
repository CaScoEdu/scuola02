let requestURL = './scuola02.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL, true);

request.responseType = 'json';
request.send();

request.onload = function() {
    const scuola = request.response;
    
    // ciclo sull'array delle classi
    scuola.forEach(classe =>{
        // creo il div per la nuova classe
        let nuovaClasse = document.createElement("div");
        
        // creo il titolo per la classe
        let titoloClasse = document.createElement("h1");
        titoloClasse.innerHTML += classe.anno + classe.sezione + " " + classe.indirizzo + " " + classe.numeroAlunni+ " alunni";
        nuovaClasse.appendChild(titoloClasse);
        
        // creo la lista non ordinata per le materie
        let listaMaterie = document.createElement("ul");
        nuovaClasse.appendChild(listaMaterie);
        
        // aggiungo il div della nuova classe al div delle classi
        document.getElementById('classi').appendChild(nuovaClasse);
        
        // ciclo sulle materie della classe
        classe.materie.forEach(materia => {

            // creo l'elemento nella lista non ordinata di materie della classe corrente
            let listItem = document.createElement("li");

            listItem.innerHTML = materia.nome + " " + materia.ore + " ore ";
            if (materia.obbligatoria)
                listItem.innerHTML += " obbligatoria";
            else
                listItem.innerHTML += " non obbligatoria";

            listaMaterie.appendChild(listItem);                        
        });
    })
}