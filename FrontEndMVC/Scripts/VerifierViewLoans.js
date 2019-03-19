$(document).ready(function () {

   

    $.ajax({

        url: "http://localhost:64294/api/admin/VerifierViewLoans",

        type: "GET",
        crossDomain: true,
        Accept: "application/json",


        success: function (resultdata) {

            $.each(resultdata, function (k, v) {

               


                var body = "<tr>";
                body += "<td><a data-toggle=\"modal\" data-target=\"#myModal\" onclick='CallMe(" + v.Id + ")' >" + v.Id + "</a> </td>";
                body += "<td>" + v.Username + "</td>";
                body += "<td>" + v.AccountNumber + "</td>";
                body += "<td>" + v.Income + "</td>";
                body += "<td>" + v.LoanAmount + "</td>";
                body += "<td>" + v.LoanType + "</td>";
                body += "<td>" + v.status + "</td>";
               
               
                body += "</tr>";
                $("#tb1 tbody").append(body);


                //$("#tb1").append("<tr><td>" + id + "</td><td>" + accountno + "</td><td>" + amount + "</td><td>" + approval + "</td><td>" + approvedTime + "</td></tr>")

            });
            $("#tb1").DataTable();


        },

        error: function (e) {

            alert(JSON.stringify(e));

        }

    });


    //$("#approve").click(function () {
    //    jQuery.support.cors = true;

    //    var loanid = $('#loanid').val();





    //    $.ajax({

    //        url: "http://localhost:64294/api/admin/approveloans",

    //        type: "POST",

    //        ContentType: "application/json",

    //        dataType: "json",

    //        data: loanid,

    //        Success: function (resultdata) {

    //            alert("Inserted successfully");

    //        },

    //        error: function (e) {

    //            alert(JSON.stringify(e));

    //        }

    //    });

    //});

});