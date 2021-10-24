//cache dom elements into variables for performance
// var firstName = $("#firstName");
// var lastName = $("#lastName");
// var email = $('#email');
// var male = $("#male");
// var female = $("#female");
// var other = $('#other');
// var password = $("#password");
// var confirmPass = $("#confirmPass");
// var xpLevel = $('#xpLevel');
// var create = $("#create");

//trigger checking if anything changes in textbox or checkox
// firstName.bind("keyup change", checker);
// lastName.bind("keyup change", checker);
// email.bind("keyup change", checker);
// male.change(checker);
// female.change(checker);
// other.change(checker);
// password.bind("keyup change", checker);
// confirmPass.bind("keyup change", checker);
// xpLevel.bind("keyup change", checker);


// jQuery(function($) {
//     var $fields = $('#firstname, #lastName, #email, #password, #confirmPass, #xpLevel ');

//     $fields.on('input', function() {
//         if (allFilled($fields)) {
//             $('#create').removeAttr('disabled');
//             $('#create').addClass('enabled');
//         } else {
//             // $('#create').addAttr('disabled');
//             $('#create').removeClass('enabled')
//         }
//     });

//     function allFilled($fields) {
//         return $fields.filter(function() {
//             return this.value === '';
//         }).length == 0;
//     }
// });
// var count = document.getElementsByTagName("input").length;
// for (let index = 0; index < count; index++) {
//     var textState = this.value;
//     if (textState > 0) {
//         console.log("not")
//     } else {
//         console.log("empty")
//     }

// }


document.addEventListener("click", check);

function check() {
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
    for (let index = 0; index < count; index++) {
        var textState = document.getElementsByTagName("input")[index].value.length;
        // var o = document.getElementsByTagName("input")[index].value;
        //console.log(textState);
        if (firstName > 0 && lastName > 0 && email > 0 && password > 0 && confirmPass > 0 && xpLevel > 0) {
            // console.log("not")
            // console.log(o);
            console.log("not")
            document.getElementById("create").disabled = false;
            document.querySelector('#create').classList.add('enabled');

        } else {
            console.log("empty")
            document.getElementById("create").disabled = true;
            document.querySelector('#create').classList.remove('enabled');


        }

    }
}




//checker that evaluates conditions to disable or enable button
// function checker() {
//     var cond1 = male.is(":checked");
//     var cond2 = other.is(":checked");
//     var cond3 = female.is(":checked");
//     var cond4 = (firstName.val().length > 0);
//     var cond6 = (lastName.val().length > 0);
//     var cond7 = (email.val().length > 0);
//     var cond8 = (password.val().length > 0);
//     var cond9 = (confirmPass.val().length > 0);
//     var cond10 = (xpLevel.val().length > 0);
//     if ((cond1 || cond2 || cond3) && cond4 && cond5 && cond6 && cond7 && cond8 && cond9 && cond10) {
//         create.prop('disabled', false);
//         $('#create').addClass('enabled')
//     } else {
//         create.prop('disabled', true);
//         $('#create').removeClass('enabled')
//     }
// }