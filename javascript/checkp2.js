// 1. Inverser une chaîne de caractères
function inverserChaine(chaine) {
  // On transforme la chaîne en tableau, on inverse, puis on retransforme en chaîne
  return chaine.split('').reverse().join('');
}
// Exemple
console.log(inverserChaine("bonjour")); // bonjour


// 2. Compter le nombre de caractères d’une chaîne
function compterCaracteres(chaine) {
  // On retourne la longueur de la chaîne
  return chaine.length;
}
// Exemple
console.log(compterCaracteres("bonjour")); // 7


// 3. Mettre en majuscule la première lettre de chaque mot
function capitaliserMots(phrase) {
  // On sépare la phrase en mots, on met la 1ère lettre en majuscule, puis on rassemble
  return phrase.split(' ').map(mot => mot.charAt(0).toUpperCase() + mot.slice(1)).join(' ');
}
// Exemple
console.log(capitaliserMots("bonjour tout le monde")); // Bonjour Tout Le Monde


// 4. Trouver le maximum dans un tableau de nombres
function trouverMax(tableau) {
  return Math.max(...tableau);
}
// Exemple
console.log(trouverMax([1, 5, 10, 3])); // 10


// 5. Trouver le minimum dans un tableau de nombres
function trouverMin(tableau) {
  return Math.min(...tableau);
}
// Exemple
console.log(trouverMin([1, 5, 10, 3])); // 1


// 6. Faire la somme des éléments d’un tableau
function sommeTableau(tableau) {
  return tableau.reduce((acc, val) => acc + val, 0);
}
// Exemple
console.log(sommeTableau([1, 2, 3, 4])); // 10


// 7. Filtrer les éléments d’un tableau selon une condition donnée
function filtrerTableau(tableau, condition) {
  return tableau.filter(condition);
}
// Exemple : garder les nombres pairs
console.log(filtrerTableau([1, 2, 3, 4, 5, 6], n => n % 2 === 0)); // [2, 4, 6]


// 8. Calculer la factorielle d’un nombre (n!)
function factorielle(n) {
  if (n <= 1) return 1;
  return n * factorielle(n - 1);
}
// Exemple
console.log(factorielle(5)); // 120


// 9. Vérifier si un nombre est premier
function estPremier(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
// Exemple
console.log(estPremier(7)); // true
console.log(estPremier(10)); // false


// 10. Générer la suite de Fibonacci jusqu’à n termes
function fibonacci(n) {
  let suite = [0, 1];
  for (let i = 2; i < n; i++) {
    suite.push(suite[i - 1] + suite[i - 2]);
  }
  return suite.slice(0, n);
}
// Exemple
console.log(fibonacci(7)); // [0, 1, 1, 2, 3, 5, 8]
