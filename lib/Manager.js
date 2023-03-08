// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

class Manager {
    constructor(name, id, email, officeNumber) {
        this.officeNumber = officeNumber;
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(name) {
        const managerName = `${this.name}`;
        return managerName;
    }

    getId() {
        const managerId = `${this.id}`;
        return managerId;
    }

    getEmail() {
        const managerEmail = `${this.email}`;
        return managerEmail;
    }


    getOfficeNumber(officeNumber) {
        // console.log(`${this.officeNumber}`);
        // Use Number() to convert string to number
        const offNo = Number(`${this.officeNumber}`);
        return offNo;
    }
    
    getRole() {
        return "Manager";
    } 
}

module.exports = Manager;