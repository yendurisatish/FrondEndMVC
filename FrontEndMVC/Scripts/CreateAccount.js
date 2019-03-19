$(document).ready(function () {
    $('#dob').datepicker({

        changeMonth: true,

        changeYear: true,

        format: "dd/mm/yyyy",

    });

    $("#Createform").validate({

        rules: {

            username: "required",

            firstName: "required",

            lastname: "required",

            //phone: "required",

            adharno: "required",

            dob: "required",

            balance: "required",

            address: "required",

            drpdwnaccount_type: "required",

            drpisadmin: "required",



            phone: {

                required: true,

                minlength: 10,

                maxlength:10

            },



            emailid: {

                required: true,

                email: true

            },

            password: {

                required: true,

                minlength: 5

            },

            cpassword: {

                required: true,

                minlength: 5,

                equalTo: "#password"

            },

        },

        messages: {

            username: {

                required: "Please enter your name",

            },

            firstName: "Please enter your first name",

            lastname: "Please enter your last name",

            phone: "Please enter your 10 digit number",

            emailid: "Please enter a valid email Address",

            adharno: "Please enter your aadhar number",



            password: {

                required: "Please provide a password",

                minlength: "Your password must be at least 5 characters long"

            },

            cpassword: {

                required: "Please provide a password",

                minlength: "Your password must be at least 5 characters long",

                equalTo: "Please enter the same password as above"

            },

            drpdwnaccount_type: {

                required: "Please select an option from the list, if none are appropriate please select 'Other'",

            },

            drpisadmin: {

                required: "Please select an option from the list, if none are appropriate please select 'Other'",

            },



        },


        submitHandler: function (form) {

            jQuery.support.cors = true;

        var username = $("#username").val();

        var firstname = $("#firstname").val();
        var lastname = $("#lastname").val();
        var dob = $("#dob").val();
        var phoneno = $("#phoneno").val();
        var email = $("#email").val();
        var password = $("#password").val();

        var confirmpassword = $("#cpassword").val();

        var aadhar = $("#aadhar").val();
        var acctype = $("#account_type").val();
        var balance = $("#balance").val();

        var address = $("#address").val();

        var isadmin = $("#Isadmin").val();





        $.ajax({

            url: "http://localhost:64294/api/admin/createaccount",

            type: "POST",

            contentType: "application/json; charset=utf-8",

            dataType: "text",

            data: '{"UserName":"' + username + '","FirstName":"' + firstname + '","LastName":"' + lastname + '","Dob":"' + dob + '","PhoneNumber":"' + phoneno + '","Email":"' + email + '","Aadhar":"' + aadhar + '","AccountType":"' + acctype + '","Balance":"' + balance + '","Address":"' + address + '","Password":"' + password + '","IsAdmin":"' + isadmin + ' "}',

            success: function (resultdata) {

                console.log(resultdata);
                alert("Inserted successfully");

            },

            error: function (e) {

                alert(JSON.stringify(e));

            }

        });
        var elements = document.getElementsByTagName("input");
for (var ii=0; ii < elements.length; ii++) {
    if (elements[ii].type == "text" || elements[ii].type == "password") {
    elements[ii].value = "";
  }
}

        }

    });

});
$("#btnsubmit").click(function () {

});
