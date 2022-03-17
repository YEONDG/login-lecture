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

    static getUserInfo(id){
        const users = this.#users;
        const ids = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce((newUserm, Info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }
}

module.exports = UserStorage;