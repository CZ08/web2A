//4

function exerciceTableau() {
    var T = [17, 38, 10, 25, 72];

    T.sort(function(a, b) {
        return a - b;
    });
    console.log("Tableau trié :", T);

    T.push(12);
    console.log("Tableau avec élément 12 ajouté :", T);

    T.reverse();
    console.log("Tableau renversé :", T);

    console.log("Indice de l'élément 17 :", T.indexOf(17));

    T.splice(T.indexOf(38), 1);
    console.log("Tableau avec élément 38 enlevé :", T);

    console.log("Sous-tableau du 2ème au 3ème élément :", T.slice(1, 3));

    console.log("Sous-tableau du début au 2ème élément :", T.slice(0, 2));

    console.log("Sous-tableau du 3ème élément à la fin de la liste :", T.slice(2));
}

exerciceTableau();

//5

function entierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startGame() {
    var nombreAleatoire = entierAleatoire(0, 10);
    var essaisRestants = 3;

    for (var i = 0; i < 3; i++) {
        var essai = parseInt(prompt("Devinez le nombre (entre 0 et 10). Vous avez " + essaisRestants + " essai(s) restant(s)."));

        if (essai === nombreAleatoire) {
            alert("Bravo! Vous avez deviné le nombre.");
            return;
        } else if (essai < nombreAleatoire) {
            alert("Le nombre à deviner est plus grand.");
        } else {
            alert("Le nombre à deviner est plus petit.");
        }

        essaisRestants--;
    }

    alert("Vous avez épuisé vos essais. Le nombre à deviner était : " + nombreAleatoire);
}

//6

 function changeText() {
    const title = document.getElementById("myTitle");
    const paragraph = document.getElementById("myParagraph");

    title.innerHTML = "Hello !";
    paragraph.style.color = "black";
}