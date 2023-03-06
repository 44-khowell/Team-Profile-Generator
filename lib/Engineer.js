// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

class Engineer {
    constructor(name, id, email, github) {
        this.github = github;
    }

    getGithub(github) {
        //console.log(`${this.github}`);
        const usr = `${this.github}`;
        return usr;
    }
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;