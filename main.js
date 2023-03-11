function losowyCytat(){
    var cytaty = {
        " - Jonathan Carroll" : '"To, że milczę, nie znaczy, że nie mam nic do powiedzenia."',
        " - Andrzej Sapkowski" : '"Lepiej zaliczac sie do niektorych, niz do wszystkich"',
        " - Wieslawa Szymborska" : '"Czytanie ksiazek to najpioekniejsza zabawa, jaka sobie ludzkosc wymyslila"',
        " - Antoine de Saint-Exupery" : '"Dobrze widzi sie tylko sercem. Najwazniejsze jest niewidoczne dla oczu."'
    }

    var autorzy = Object.keys(cytaty);

    var autor = autorzy[Math.floor(Math.random() * autorzy.length)];

    var cytat = cytaty[autor];

    document.getElementById("cytaty").innerHTML = cytat;
    document.getElementById("autorzy").innerHTML = autor;

    
}