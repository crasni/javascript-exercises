const findTheOldest = function(ppl) {
    return ppl.reduce((oldest, person) => {
        const currentYear = new Date().getFullYear();
        const personDeath = person.yearOfDeath ?? currentYear;
        const oldestDeath = oldest.yearOfDeath ?? currentYear;
        return oldestDeath - oldest.yearOfBirth > personDeath - person.yearOfBirth ? oldest : person;
    }, {name: "baby", yearOfBirth: 0, yearOfDeath: 0});
};

// Do not edit below this line
module.exports = findTheOldest;
