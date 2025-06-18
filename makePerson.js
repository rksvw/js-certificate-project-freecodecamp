const Person = function(first, last) {
    let firstname = first;
    let lastname = last;


    this.getFirstName = function () {
        return firstname;
    }

    this.getLastName = function () {
        return lastname;
    }

    this.getFullName = function () {
        return firstname + " " + lastname;
    }

    this.setFirstName = function (firstName) {
        firstname = firstName;
    }

    this.setLastName = function (lastName) {
        lastname = lastName;
    }

    this.setFullName = function (firstName, lastName) {
        firstname = firstName;
        lastname = lastName;
    }
};


const p = new Person("Bob", "Ross");
console.log(p.getFirstName());
console.log(p.getLastName());
console.log(p.getFullName());
p.setFirstName("Ritik");
p.setLastName("Sharma");
console.log(p.getFirstName());
console.log(p.getLastName());
console.log(p.getFullName());
p.setFullName("Aviral Martinex","Mohan pekalo");
console.log(p.getFirstName());
console.log(p.getLastName());
console.log(p.getFullName());


console.log(Object.keys(p))
