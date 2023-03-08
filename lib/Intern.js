// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

class Intern {
    constructor(name, id, email, school) {
        this.school = school;
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        const internName = `${this.name}`;
        return internName;
    }

    getId() {
        const internId = `${this.id}`;
        return internId;
    }

    getEmail() {
        const internEmail = `${this.email}`;
        return internEmail;
    }

    getSchool(school) {
        // console.log(`${this.school}`);
        const schoolName = `${this.school}`;
        return schoolName;
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;