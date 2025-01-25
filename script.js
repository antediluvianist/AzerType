/*

// My methods

//console.log("Hello World")

let typedWordOK = true

let wordsList = ["Cachalot", "Pétunia", "Serviette"]
let sentencesList = ["Pas de panique!", "La vie, l'univers et le reste", "Merci pour le poisson"]
let userScore = 0
let currentIndex = 0 // Index pour suivre la position dans la liste

let choice = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
while (choice !== "mots" && choice !== "phrases") {
  choice = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
}

if (choice === "mots") {
  while (currentIndex < wordsList.length) {
    let actualWord = wordsList[currentIndex]; // Mot actuel
    let userWord = prompt("Entrez le mot : " + actualWord)
  
    switch (userWord) {
      case actualWord:
        console.log("Bravo !")
        userScore++;
        console.log("Score actuel :" + " " + userScore)
        currentIndex++ // Passe au mot suivant
        break;
      case "Gredin":
      case "Mécréant":
      case "Vilain":
        console.log("Restez correct !")
        break;
      default:
        console.log("Vous avez fait une erreur de frappe.")
        break;
    }
  }
} else {
  while (currentIndex < sentencesList.length) {
    let actualSentence = sentencesList[currentIndex]; // Phrase actuel
    let userSentence = prompt("Entrez le mot : " + actualSentence)
  
    switch (userSentence) {
      case actualSentence:
        console.log("Bravo !")
        userScore++;
        console.log("Score actuel :" + " " + userScore)
        currentIndex++ // Passe au mot suivant
        break;
      case "Gredin":
      case "Mécréant":
      case "Vilain":
        console.log("Restez correct !")
        break;
      default:
        console.log("Vous avez fait une erreur de frappe.")
        break;
    }
  }

}

console.log("Score initial :", userScore)
console.log("Partie terminée ! Score final : " + userScore + "/3")

*/



// Méthode du cours

// Déclaration des tableaux contenant les listes des mots proposés à l'utilisateur
const listeMots = ["Cachalot", "Pétunia", "Serviette"]
const listePhrases = ["Pas de panique !", "La vie, l'univers et le reste", "Merci pour le poisson"]

let score = 0

// Déclaration de la variable contenant le choix de l'utilisateur
let choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
// Tant que l'utilisateur n'a pas saisi "mots" ou "phrases", on lui redemande de saisir un choix
while (choix !== "mots" && choix !== "phrases") {
    choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
}

if (choix === "mots") {
    // On parcourt le tableau des mots
    for (let i = 0; i < listeMots.length; i++) {
        // On demande à l'utilisateur de saisir le mot correspondant à l'indice i
        let motUtilisateur = prompt("Entrez le mot : " + listeMots[i])
        if (motUtilisateur === listeMots[i]) {
            // Si le mot saisi par l'utilisateur est correct, on incrémente le score
            score++
        }
    }
    console.log("Votre score est de " + score + " sur " + listeMots.length)
} else {
    // On parcourt le tableau des phrases
    for (let i = 0; i < listePhrases.length; i++) {
        // On demande à l'utilisateur de saisir la phrase correspondant à l'indice i
        let phraseUtilisateur = prompt("Entrez la phrase : " + listePhrases[i])
        if (phraseUtilisateur === listePhrases[i]) {
            // Si la phrase saisi par l'utilisateur est correct, on incrémente le score
            score++
        }
    }
    console.log("Votre score est de " + score + " sur " + listePhrases.length)
}
    