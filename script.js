const isLogIn = (user) => {
    if (user.name === 'ehsan') {
        return true
    }

    return false
}

let someChanges = (isLogIn) => {
    if (isLogIn) {
        //do what you want if isLogIn true
        return true
    }

    return false
}

const testVariable = () => false