// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./employee");

class Manager extends Employee {
  
  constructor(office) {
    this.office = office;
  }

  getRole() {
      return 'Manager';
  }
  getOffice() {
    this.office;
}


}

module.exports = Manager;