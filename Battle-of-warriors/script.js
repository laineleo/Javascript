let firstWarrior={
    name: 'Thor',
    hp: 100,
    strength: 50,
    attack: function () {
        return this.strength;
    }
};

let secondWarrior={
    name: 'Odin',
    hp: 100,
    strength: 10,
    attack: function () {
        return this.strength;
    }
}

//loop for 10 rounds
for (let i=1; i<=10; i++){
    console.log(`Round ${i}:`);
    
    let damage1= firstWarrior.attack();
    let damage2= secondWarrior.attack();

    secondWarrior.hp -= damage1;
    firstWarrior.hp -= damage2;

    secondWarrior.hp= Math.max (0, secondWarrior.hp);
    firstWarrior.hp = Math.max(0, firstWarrior.hp);

    console.log(`${firstWarrior.name} attacks ${secondWarrior.name} for ${damage1} damage. ${secondWarrior.name} HP: ${Math.max(0, secondWarrior.hp)} `);
    console.log(`${secondWarrior.name} attacks ${firstWarrior.name} for ${damage2} damage. ${firstWarrior.name} HP: ${Math.max(0, firstWarrior.hp)} `);

    if (firstWarrior.hp ===0) break;
    if (secondWarrior.hp === 0) break;
}

console.log("\nGame Over!");
if (firstWarrior.hp>secondWarrior.hp){
    console.log(`${firstWarrior.name} wins`);
}else if (secondWarrior.hp > firstWarrior.hp){
    console.log(`${secondWarrior.name} wins`);
}else{
    console.log(`It's a draw`);
}