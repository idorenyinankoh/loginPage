// adding event listener to the whole page for a click to triger the field checks
document.addEventListener("click", check);

function check() {
    // storing the value of all fields in variables
    var firstName = document.querySelector('#firstName').value.length;
    var lastName = document.querySelector('#lastName').value.length;
    var email = document.querySelector('#email').value.length;
    var male = document.querySelector("#male").value.length;
    var female = document.querySelector("#female").value.length;
    var other = ('#other');
    var password = document.querySelector("#password").value.length;
    var confirmPass = document.querySelector("#confirmPass").value.length;
    var xpLevel = document.querySelector('#xpLevel').value.length;
    var create = document.querySelector("#create").value.length;
    var count = document.getElementsByTagName("input").length;

    // looping through all fields
    for (let index = 0; index < count; index++) {
        var textState = document.getElementsByTagName("input")[index].value.length;

        // checking if all fields have values and enabling the button
        if (firstName > 0 && lastName > 0 && email > 0 && password > 0 && confirmPass > 0 && xpLevel > 0) {
            document.getElementById("create").disabled = false;
            document.querySelector('#create').classList.add('enabled');

            // diabling the button if all fields dont have values
        } else {
            document.getElementById("create").disabled = true;
            document.querySelector('#create').classList.remove('enabled');


        }

    }
}