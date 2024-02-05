// 1
var calcul = function(x, y) {
    var pi = 3.14;
    if (x > 0) {
      return (x + y) * pi;
    } else {
      return y * pi;
    }
  };
  
  console.log(calcul(2, 3));
  console.log(calcul(-1, 4));
  

//2
function estNombreParfait(nombre) {
    let sommeDiviseurs = 0;
    for (let i = 1; i < nombre; i++) {
      if (nombre % i === 0) {
        sommeDiviseurs += i;
      }
    }
    return sommeDiviseurs === nombre;
}

function nombresParfaits(n) {
    for (let i = 1; i < n; i++) {
      if (estNombreParfait(i)) {
        console.log(i);
      }
    }
}

nombresParfaits(30);


//3
const chaine1 = "abc";
const chaine2 = "de";

const resultat = [];

for (let i = 0; i < chaine2.length; i++) {
    for (let j = 0; j < chaine1.length; j++) {
        resultat.push(chaine1[j] + chaine2[i]);
    }
}

console.log(resultat);

  