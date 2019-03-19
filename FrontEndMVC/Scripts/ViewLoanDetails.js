﻿$(document).ready(function () {
    jQuery.support.cors = true;


    jQuery.support.cors = true;
    $.ajax({

        url: "http://localhost:64294/api/user/loandetails?accountnumber="+sessionStorage.getItem("accountno"),

        type: "GET",
        crossDomain: true,

        Accept: "application/json",


        success: function (resultdata) {

            $.each(resultdata, function (k, v) {



                var body = "<tr>";
                body += "<td><a data-toggle=\"modal\" data-target=\"#myModal\" onclick='CallMe(" + v.Id + ")' >" + v.Id + "</a> </td>";
                body += "<td>" + v.AccountNumber + "</td>";
                body += "<td>" + v.Income + "</td>";
                body += "<td>" + v.LoanAmount + "</td>";
                body += "<td>" + v.LoanType + "</td>";
                body += "<td>" + v.City + "</td>";
                body += "<td>" + v.EmpType + "</td>";
                body += "<td>" + v.status + "</td>";
                body += "<td>" + v.Approval + "</td>";
                body += "<td>" + v.ApprovedTime + "</td>";
                body += "<td>" + v.withdrawn + "</td>";
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