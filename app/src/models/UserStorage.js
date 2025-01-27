"use strict";


class UserStorage{
    static #users = {
        id:["lsk000125","이선기","이준기"],
        psword: ["1234","123456","971116"],
        name: ["이이이","선선선","기기기"],
    };
    static getUsers(...fields){
        const users = this.#users;
        const newUsers =fields.reduce((newUsers,field)=>{
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        
        return newUsers;
    }
    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users);
        const userInfo = userKeys.reduce((newUser,info) => {
            newUser[info] = users[info][idx];
            return newUser;
        },{});
        return userInfo;
    }
    static save(userInfo){
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        return { success: true};
    }
}

module.exports = UserStorage;