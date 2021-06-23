// // console.log("Khalifa")


function changeFirstLetter(firstNameInput, lastNameInput) {
    const firstName = firstNameInput.trim().toString()
    let lastName = lastNameInput.trim().toString()
    let newFirstName = "";
    let newLastName = "";
    // for loop for first name only
    for (var i = 0; i < firstName.length; i++) {
        if (i === 0 && firstName[i] !== firstName[i].toUpperCase()) {
            newFirstName = newFirstName + firstName[i].toUpperCase()
        }
        else {
            newFirstName = newFirstName + firstName[i]
        }
    }
    // for loop for last name only
    for (var l = 0; l < lastName.length; l++) {
        if (l === 0 && lastName[l] !== lastName[l].toUpperCase()) {
            newLastName = newLastName + lastName[l].toUpperCase()
        }
        else {
            newLastName = newLastName + lastName[l]
        }
    }
    console.log(`${newFirstName} ${newLastName}`)
}

changeFirstLetter("xya", "abc")


