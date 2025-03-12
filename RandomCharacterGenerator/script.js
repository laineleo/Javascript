
let character={
    name: 'Hero',
    health: 100,
    class: ["Warrior", "Mage", "Archer", "Healer", "Assassin"] [Math.floor(Math.random() * 5)],         //Random class
    specialAbility: ["Fireball", "Healing Touch", "Stealth", "Lightning Strike", "Power Slash"] [Math.floor(Math.random() * 5)],    // random special ability

    //set the character’s health to a random number between 50 and 150.
    randomizeHealth: function() {           
        this.health = Math.floor(Math.random() * 101) + 50;
    }

};

// Function to generate a new character
function generateCharacter(name) {
    const names = ["Thorin", "Elara", "Zane", "Ivy", "Dante"];
    return {
        name: name || names[Math.floor(Math.random() * names.length)],
        health: Math.floor(Math.random() * 101) + 50,
        class: ["Warrior", "Mage", "Archer", "Healer", "Assassin"][Math.floor(Math.random() * 5)],
        specialAbility: ["Fireball", "Healing Touch", "Stealth", "Lightning Strike", "Power Slash"][Math.floor(Math.random() * 5)],

        //When one character attacks another, the opponent’s health should decrease by a random amount between 5 and 20.
        battle: function (otherCharacter) {
            const damage = Math.floor(Math.random() * 16) + 5;
            const initialHealth = otherCharacter.health;
            otherCharacter.health = Math.max(0, otherCharacter.health - damage);
            console.log(`Character ${this.name} attacked Character ${otherCharacter.name} with ${this.specialAbility}. ${otherCharacter.name}'s health dropped from ${initialHealth} to ${otherCharacter.health}.`);
        }
    };
}

// Function to generate multiple characters
function generateMultipleCharacters(x) {
    const characters = [];
    for (let i = 0; i < x; i++) {
        characters.push(generateCharacter());
    }
    return characters;
}

character.randomizeHealth();
console.log(character.health);
// console.log(character.class);
// console.log(character.specialAbility);
// const randomCharacter=generateCharacter();
// console.dir(randomCharacter);
// const character1 = generateCharacter("Zane");
// const character2 = generateCharacter("Elara");

// character1.battle(character2);
// const party = generateMultipleCharacters(5);
// console.dir(party);