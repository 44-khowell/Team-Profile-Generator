// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

class Engineer {
    constructor(name, id, email, github) {
        this.github = github;
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        const engName = `${this.name}`;
        return engName;
    }

    getId() {
        const engId = `${this.id}`;
        return engId;
    }

    getEmail() {
        const engEmail = `${this.email}`;
        return engEmail;
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