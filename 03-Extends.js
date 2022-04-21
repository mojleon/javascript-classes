class Person {
  static species() {
    return "Homo Sapiens";
  }

  static speciesSentence() {
    return `Human are classified as ${this.species()}`;
  }

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.hasJob = false;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  setFirstName(firstName) {
    this.firstName = firstName;
  }

  setLastName(lastName) {
    this.lastName = lastName;
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
}

const worker1 = new Worker("John", "Doe", "Developer");

worker1.setLastName("Smith");

console.log(worker1.fullName());
