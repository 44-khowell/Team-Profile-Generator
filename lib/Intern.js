// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

class Intern {
    constructor(name, id, email, school) {
        this.school = school;
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