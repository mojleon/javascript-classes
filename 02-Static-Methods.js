class Person {
  // static species = "Homo Sapiens"; // Static properties are not for ecmaScript 6. We use Babel in order to use these extra features!

  // Static does not belong to the instance but to the class!
  static species() {
    return "Homo Sapiens";
  }

  static speciesSentence() {
    return `Human are classified as ${this.species()}`; // I am invoking species method from the class by adding () after it. Functions get invoke. This does not point to the instance but to the static methods.
  }

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.hasJob = false;
  }

  // Instance methods are methods that are used if you use the NEW keyword. They are instances of the const or let variables.
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

const john = new Person("John", "Doe"); // Instance of a new Person object. Species does not belong to the instance but does to the class!

console.log(Person.speciesSentence());
