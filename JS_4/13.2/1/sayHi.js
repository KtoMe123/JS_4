
function sayHi(user) {
    alert(`Hello, ${user}`)
}

function sayBye(user) {
    alert(`bye, ${user}`)
}

// export {sayHi, sayBye}
export {sayHi as hi, sayBye as bye}

