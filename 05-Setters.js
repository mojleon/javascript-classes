class Person {
  static get species() {
    return "Homo Sapiens";
  }

  static speciesSentence() {
    return `Human are classified as ${this.species}`; // No need to invoke this.species since it is a static get method.
  }

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.hasJob = false;
  }

  fullName() {
    // Instance method.
    return `${this.firstName} ${this.lastName}`;
  }

  setFirstName(firstName) {
    this.firstName = firstName;
  }

  setLastName(lastName) {
    this.lastName = lastName;
  }

  set setFullName(name) {
    name = name.split(" ");
    this.setFirstName(name[0]);
    this.setLastName(name[1]);
  }
}

class Worker extends Person {
  constructor(firstName, lastName, job) {
    super(firstName, lastName); // Super calls the constructor of the parent class. It invokes the constructor of the parent with the firstName and lastName parameters.
    this.job = job; // Job property.
    this.hasJob = true;
  }

  setJob(job) {
    // This is another property?
    this.job = job;
  }

  get bioGraphy() {
    // Method behaves like a property by placing get infront of it. You do not need to invoke it (placing the () after the method name). They are methods in disguise.
    const bio = `${this.fullName()} is a ${this.job}`.toUpperCase();
    return bio;
  }
}

const person1 = new Person("John", "Doe");

person1.setFullName = "Jane Doe";

console.log(person1.fullName());
