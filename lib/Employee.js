// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    }
    
    getName(name) {
       //console.log(`${this.name}`);
        const person = `${this.name}`;
        return person;
    }
    getId(id) {
        //console.log(`${this.id}`);
        // Use Number() to convert string to number
        const personId = Number(`${this.id}`);
        return personId;
    }
    getEmail(email) {
        //console.log(`${this.email}`);
        const personEmail = `${this.email}`;
        return personEmail;
    }

    getRole() {
        return "Employee";
    }
}

module.exports = Employee;