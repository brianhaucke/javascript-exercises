//videogame_character
class VideoGameCharacter {
  #health = 100;
  #level = 1;

  constructor(name) {
    this.name = name;
  }

  get health() {
    return this.#health;
  }

  get level() {
    return this.#level;
  }

  takeDamage(amount) {
    if (amount >= 0) {
      this.#health -= amount;
      console.log(`You took ${amount} damage. Your health is now ${this.#health}`);
      if (this.#health <= 0) {
        console.log("💀 You are dead");
      }
    } else {
      console.warn("Invalid amount of damage");
    }
  }

  levelUp() {
    this.#level += 1;
    console.log(`🎉 You leveled up! You are now level ${this.#level}`);
  }

  heal(amount) {
  	if (amount >= 0){
  		this.#health += amount;
  		console.log(`Your health has increased by ${amount}`);
  	} 
  }

}

// class VideoGameCharacter {
//   constructor (name) {
//     this.name = name;
// }
//   #health = 100;
//   #level = 1;
// }
//   get health(){
//     return this.#health;
// }
//   get level(){
//     return this.#level;
// }
//   takeDamage(amount) {
//   	if (amount >= 0) {
//   		this.#health -= amount;
//   		console.log(`You took ${amount} damage. Your health is now ${this.#health}`)
//   		if (this.#health <= 0) {
//   			console.log("You are dead")
//   		}
//   	} else {
//   		console.warn("Invalid amount of damage")
//   	}
//   }

//   levelUp(){
//   	#level += 1;
//   	console.log(`You leveled up. You are now level ${this.#level}`)
//   }

