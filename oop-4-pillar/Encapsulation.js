class Player {
  #name;
  #age;
  #category;

  constructor(name, age, category) {
    this.#name = name;
    this.#age = age;
    this.#category = category;
  }

  // শুধু method দিয়েই data পাওয়া যাবে
  getDetails() {
    return `I am ${this.#name}, ${this.#age} years old and I play ${
      this.#category
    }`;
  }

  // Setter দিয়ে data আপডেট করা যাবে
  setAge(age) {
    if (age > 0) {
      this.#age = age;
    } else {
      console.log("Invalid age!");
    }
  }
}

const reaz = new Player("Reaz", 26, "Football");
console.log(reaz.getDetails()); // Access method

reaz.setAge(27); // নিরাপদভাবে data আপডেট
console.log(reaz.getDetails());
//

