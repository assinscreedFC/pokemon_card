function getRandomNumberInRange(min, max) {
    // Vérifiez si les arguments sont des nombres
    if (typeof min !== 'number' || typeof max !== 'number') {
      throw new Error('Les arguments doivent être des nombres.');
    }
  
    // Vérifiez si min est inférieur à max
    if (min > max) {
      throw new Error('L\'argument "min" doit être inférieur ou égal à "max".');
    }
  
    // Générez un nombre aléatoire entre min et max (inclus)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  export default getRandomNumberInRange