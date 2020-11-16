// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require("./employee");

class Intern extends Employee {
  constructor(school) {
    this.school = school;
  }
//   useHorn() {
//     console.log(this.sound);
//   }
//   crewSoundOff() {
//     this.crew.forEach(member => {
//       console.log(`${member.name} reporting for duty!`);
//     });
//   }
}

// const boatPassengers = [
//   {
//     name: "Blackbeard"
//   },
//   {
//     name: "Mary Read"
//   },
//   {
//     name: "Henry Morgan"
//   },
//   {
//     name: "Madame Cheng"
//   }
// ];

// const boat = new Boat(16, "sailboat", boatPassengers);

// console.log("---BOAT---");
// boat.printInfo();
// boat.useHorn();
// boat.crewSoundOff();
module.exports = Intern;