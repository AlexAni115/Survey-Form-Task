


function submitForm() {
    let fname = document.getElementById("first-name");
    let lname = document.getElementById("last-name");
    let email = document.getElementById("email");
    let addressInput = document.getElementById("address");
    let pincodeInput = document.getElementById("pincode");
    let genderInputs = document.getElementsByName("gender");
    let foodChoiceInput = document.getElementById("food-choice");
    let stateInput = document.getElementById("state");
    let countryInput = document.getElementById("country");

   
    let firstName = fname.value;
    let lastName = lname.value;
    let emailvalue = email.value
    let address = addressInput.value;
    let pincode = pincodeInput.value;
    let gender = getSelectedRadioValue(genderInputs);
    let foodChoice = foodChoiceInput.value;
    let state = stateInput.value;
    let country = countryInput.value;

    
    if (firstName && lastName) {
        //  new row in the table
        let table = document.getElementById("dataTable");
        let newRow = table.insertRow(table.rows.length);

        // Insert cells with data
        let cell1 = newRow.insertCell(0);
        let cell2 = newRow.insertCell(1);
        let cell3 = newRow.insertCell(2);
        let cell4 = newRow.insertCell(3);
        let cell5 = newRow.insertCell(4);
        let cell6 = newRow.insertCell(5);
        let cell7 = newRow.insertCell(6);
        let cell8 = newRow.insertCell(7);
        let cell9 = newRow.insertCell(8);

        // Fill cells with input values
        cell1.innerHTML = firstName;
        cell2.innerHTML = lastName;
        cell3.innerHTML = emailvalue;
        cell4.innerHTML = address;
        cell5.innerHTML = pincode;
        cell6.innerHTML = gender;
        cell7.innerHTML = foodChoice;
        cell8.innerHTML = state;
        cell9.innerHTML = country;

        // Clear form data
        fname.value = "";
        lname.value = "";
        addressInput.value = "";
        pincodeInput.value = "";
        resetRadioButtons(genderInputs);
        foodChoiceInput.value = "";
        stateInput.value = "";
        countryInput.value = "";
    } else {
        alert("Please fill in all required fields...");
    }
}

//  function to get the value of the selected radio button
function getSelectedRadioValue(radioInputs) {
    for (let i = 0; i < radioInputs.length; i++) {
        if (radioInputs[i].checked) {
            return radioInputs[i].value;
        }
    }
    return null; // Return no value if no radio button is selected
}

//  function to reset all radio buttons
function resetRadioButtons(radioInputs) {
    for (let i = 0; i < radioInputs.length; i++) {
        radioInputs[i].checked = false;
    }
}
