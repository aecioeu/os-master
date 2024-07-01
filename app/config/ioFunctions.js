const users = [];

 
const addUser = ({id, name}) => {
   
    const existingUser = users.find((user) => {
       return user.name === name
   //item => item === 'one'
    })

 
    if(existingUser) {
        return { error: "Usuario já registrado"};

    }
    const user = {id,name};
 
    users.push(user);
    return {user};
 
}
 
const removeUser = (id) => {
    const index = users.findIndex((user) => {
       return  user.id === id
    });
 
    if(index !== -1) {
        return users.splice(index,1)[0];
    }
}
 
const getUser = (id) => users
        .find((user) => user.id === id);
 
const getUsersInRoom = (room) => users
        .filter((user) => user.room === room);
 
module.exports = {addUser, removeUser,
        getUser, getUsersInRoom};