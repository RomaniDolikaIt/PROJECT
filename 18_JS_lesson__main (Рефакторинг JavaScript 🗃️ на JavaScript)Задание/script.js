// до рефакторинга
function  processUserData(user) {
    const newUser = {...user}
    if (newUser.age > 18) {
        newUser.isAdult = true
    }else{
        newUser.isAdult = false
    }

    onSave(user)
}

//после рефакторинга
const modifyUserData = (user) => {
    const newUser = {...user}

    newUser.isAdult =newUser.age > 18

    return newUser
}

const saveUserData = (user) => {

}

cosnt user = {
    name: 'John',
    age: 18
}

processUserData(user)