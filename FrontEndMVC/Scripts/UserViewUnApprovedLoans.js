$(document).ready(function () {
    jQuery.support.cors = true;


    jQuery.support.cors = true;
    $.ajax({

        url: "http://localhost:64294/api/user/ViewUnApprovedLoans?accountnumber=" + sessionStorage.getItem("accountno"),

        type: "GET",
        crossDomain: true,

        Accept: "application/json",


        success: function (resultdata) {

            $.each(resultdata, function (k, v) {



                var body = "<tr>";
                body += "<td>" + v.Id + "</td>";
                body += "<td>" + v.AccountNumber + "</td>";
                body += "<td>" + v.Income + "</td>";
                body += "<td>" + v.LoanAmount + "</td>";
                body += "<td>" + v.LoanType + "</td>";
                body += "<td>" + v.City + "</td>";
                body += "<td>" + v.EmpType + "</td>";
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




});