"use strict"

class UserStorage {
    static #users = {
     id: ["zzmn", "zzmn1", "zzmn12"],
     psword: ["1234", "1234", "12345"],
     name: ["우리", "워리", "허리"],
    };

    static getUsers(...fields){
        const users =  this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;