function findUserByUsername(usersArray, username) {
    return usersArray.find(function (user) {
        return user.username === username;

    })

}

function removeUser(userArray, username) {
    return userArray.find(function (user) {
        return user.username === username;

    })
    if (foundIndex === -1) return;
    return usersArray.splice(foundIndex, 1)[0];

}