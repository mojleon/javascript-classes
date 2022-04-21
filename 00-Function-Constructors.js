// Verbose means using or expressed in more words than are needed.

function Person(firstName, lastName) {
  var secret = "I am a secret"; // Private!
  this.firstName = firstName; // Properties!
  this.lastName = lastName; // Properties!
  this.hasJob = false; // Properties!

  this.fullName = function () {
    // This is a method!
    return this.firstName + " " + this.lastName;
  };

  this.setFirstName = function (firstName) {
    // This is a method!

    this.firstName = firstName;
  };

  this.setLastName = function (lastName) {
    // This is a method!

    this.lastName = lastName;
  };

  this.getSecret = function () {
    // This is a method!

    return secret;
  };
}

var john = new Person("John", "Doe");

console.log(john.getSecret());
