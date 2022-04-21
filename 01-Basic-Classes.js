class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.hasJob = false;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`; // ES6 String template literals.
  }

  setFirstName(firstName) {
    this.firstName = firstName;
  }

  setLastName(lastName) {
    this.lastName = lastName;
  }
}

const john = new Person("John", "Doe"); // Instance of a new Person object.
john.setFirstName("Jane");

console.log(john.fullName());
