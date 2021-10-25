'use strict';

angular.module('newApp').controller('RPTCtrl', function ($scope) {
    $(document).ready(function () {
        var username = localStorage.getItem("username");

        var register = localStorage.getItem("register");

        var ref = firebase.database().ref("datasets/users");

        var userVerify = firebase.auth().currentUser;

        var refYear = " ";


        $scope.mYear = function () {
            // var payment = document.getElementById("payment");
            var mYear = $('#mYear').val();
            // if (mYear == "2016") {
            //     console.log("2016-2017");
            //     $('span.info-box-number').eq(0).html("---");
            //     $('span.info-box-number').eq(1).html("---");
            //     $('span.info-box-number').eq(2).html("---");
            //     $('span.info-box-number').eq(3).html("---");
            //     $('span.info-box-number').eq(4).html("---");
            //     $('span.info-box-number').eq(5).html("---");
            // } else if (mYear == "2017") {
            //     console.log("2017-2018");
            //     $('span.info-box-number').eq(0).html("---");
            //     $('span.info-box-number').eq(1).html("---");
            //     $('span.info-box-number').eq(2).html("---");
            //     $('span.info-box-number').eq(3).html("---");
            //     $('span.info-box-number').eq(4).html("---");
            //     $('span.info-box-number').eq(5).html("---");
            // } else if (mYear == "2018") {
            //     console.log("2018-2019");
            //     $('span.info-box-number').eq(0).html("---");
            //     $('span.info-box-number').eq(1).html("---");
            //     $('span.info-box-number').eq(2).html("---");
            //     $('span.info-box-number').eq(3).html("---");
            //     $('span.info-box-number').eq(4).html("---");
            //     $('span.info-box-number').eq(5).html("---");
            // } else if (mYear == "2019") {
            //     console.log("2019-2020");
            //     $('span.info-box-number').eq(0).html("---");
            //     $('span.info-box-number').eq(1).html("---");
            //     $('span.info-box-number').eq(2).html("---");
            //     $('span.info-box-number').eq(3).html("---");
            //     $('span.info-box-number').eq(4).html("---");
            //     $('span.info-box-number').eq(5).html("---");
            // } else if (mYear == "2020") {
            //     console.log("2020-2021");
            //     $('span.info-box-number').eq(0).html("---");
            //     $('span.info-box-number').eq(1).html("---");
            //     $('span.info-box-number').eq(2).html("---");
            //     $('span.info-box-number').eq(3).html("---");
            //     $('span.info-box-number').eq(4).html("---");
            //     $('span.info-box-number').eq(5).html("---");
            // } else 
            if (mYear == "2021") {
                refYear = "2021to2022";
                var year = mYear + "to" + (1 + (mYear * 1));
                console.log("2021-2022");
                var ref2 = firebase.database().ref(year);
                // var ref2 = firebase.database().ref("r8" + mYear);
                console.log(year);
                var aiagoals;
                var gangoals;
                var srgoals;
                var jfgoals;
                var gcmmgoals;
                var r8goals;
                var goals = [];

                ref2.orderByChild("team").equalTo("aia").on("child_added", function (snapshot) {
                    var goalevan = snapshot.val().evangelism,
                        goalsfu = snapshot.val().sfu,
                        goalst = snapshot.val().st,
                        goalcmd = snapshot.val().cmd,
                        goalchurches = snapshot.val().churches,
                        goalbudget = snapshot.val().budget;
                    // console.log(snapshot.val());
                    aiagoals = snapshot.val();

                });
                ref2.orderByChild("team").equalTo("gan").on("child_added", function (snapshot) {
                    var goalevan = snapshot.val().evangelism,
                        goalsfu = snapshot.val().sfu,
                        goalst = snapshot.val().st,
                        goalcmd = snapshot.val().cmd,
                        goalchurches = snapshot.val().churches,
                        goalbudget = snapshot.val().budget;
                    // console.log(snapshot.val());
                    gangoals = snapshot.val();

                });
                ref2.orderByChild("team").equalTo("sr").on("child_added", function (snapshot) {
                    var goalevan = snapshot.val().evangelism,
                        goalsfu = snapshot.val().sfu,
                        goalst = snapshot.val().st,
                        goalcmd = snapshot.val().cmd,
                        goalchurches = snapshot.val().churches,
                        goalbudget = snapshot.val().budget;
                    // console.log(snapshot.val());
                    srgoals = snapshot.val();

                });
                ref2.orderByChild("team").equalTo("jf").on("child_added", function (snapshot) {
                    var goalevan = snapshot.val().evangelism,
                        goalsfu = snapshot.val().sfu,
                        goalst = snapshot.val().st,
                        goalcmd = snapshot.val().cmd,
                        goalchurches = snapshot.val().churches,
                        goalbudget = snapshot.val().budget;
                    // console.log(snapshot.val());
                    jfgoals = snapshot.val();

                });
                ref2.orderByChild("team").equalTo("gcmm").on("child_added", function (snapshot) {
                    var goalevan = snapshot.val().evangelism,
                        goalsfu = snapshot.val().sfu,
                        goalst = snapshot.val().st,
                        goalcmd = snapshot.val().cmd,
                        goalchurches = snapshot.val().churches,
                        goalbudget = snapshot.val().budget;
                    // console.log(snapshot.val());
                    gcmmgoals = snapshot.val();

                });
                ref2.orderByChild("team").equalTo("r8").on("child_added", function (snapshot) {
                    var goalevan = snapshot.val().evangelism,
                        goalsfu = snapshot.val().sfu,
                        goalst = snapshot.val().st,
                        goalcmd = snapshot.val().cmd,
                        goalchurches = snapshot.val().churches,
                        goalbudget = snapshot.val().budget;
                    // console.log(snapshot.val());
                    r8goals = snapshot.val();

                });

                ref2.on("value", function (snapshot) {
                    console.log(snapshot.val());
                    snapshot.forEach((data) => {
                        goals.push(data.val());
                    });

                });

                setTimeout(() => {
                    console.log(aiagoals);
                    document.getElementById("tableAIAeva").innerHTML = aiagoals.evangelism;
                    document.getElementById("tableAIAsfu").innerHTML = aiagoals.sfu;
                    document.getElementById("tableAIAst").innerHTML = aiagoals.st;
                    document.getElementById("tableAIAcmd").innerHTML = aiagoals.cmd;
                    document.getElementById("tableAIAchurches").innerHTML = aiagoals.churches;
                    document.getElementById("tableAIAbudget").innerHTML = "₱" + aiagoals.budget;

                    document.getElementById("tableGANeva").innerHTML = gangoals.evangelism;
                    document.getElementById("tableGANsfu").innerHTML = gangoals.sfu;
                    document.getElementById("tableGANst").innerHTML = gangoals.st;
                    document.getElementById("tableGANcmd").innerHTML = gangoals.cmd;
                    document.getElementById("tableGANchurches").innerHTML = gangoals.churches;
                    document.getElementById("tableGANbudget").innerHTML = "₱" + gangoals.budget;

                    document.getElementById("tableSReva").innerHTML = srgoals.evangelism;
                    document.getElementById("tableSRsfu").innerHTML = srgoals.sfu;
                    document.getElementById("tableSRst").innerHTML = srgoals.st;
                    document.getElementById("tableSRcmd").innerHTML = srgoals.cmd;
                    document.getElementById("tableSRchurches").innerHTML = srgoals.churches;
                    document.getElementById("tableSRbudget").innerHTML = "₱" + srgoals.budget;

                    document.getElementById("tableJFeva").innerHTML = jfgoals.evangelism;
                    document.getElementById("tableJFsfu").innerHTML = jfgoals.sfu;
                    document.getElementById("tableJFst").innerHTML = jfgoals.st;
                    document.getElementById("tableJFcmd").innerHTML = jfgoals.cmd;
                    document.getElementById("tableJFchurches").innerHTML = jfgoals.churches;
                    document.getElementById("tableJFbudget").innerHTML = "₱" + jfgoals.budget;

                    document.getElementById("tableGCMMeva").innerHTML = gcmmgoals.evangelism;
                    document.getElementById("tableGCMMsfu").innerHTML = gcmmgoals.sfu;
                    document.getElementById("tableGCMMst").innerHTML = gcmmgoals.st;
                    document.getElementById("tableGCMMcmd").innerHTML = gcmmgoals.cmd;
                    document.getElementById("tableGCMMchurches").innerHTML = gcmmgoals.churches;
                    document.getElementById("tableGCMMbudget").innerHTML = "₱" + gcmmgoals.budget;

                    document.getElementById("tableR8eva").innerHTML = r8goals.evangelism;
                    document.getElementById("tableR8sfu").innerHTML = r8goals.sfu;
                    document.getElementById("tableR8st").innerHTML = r8goals.st;
                    document.getElementById("tableR8cmd").innerHTML = r8goals.cmd;
                    document.getElementById("tableR8churches").innerHTML = r8goals.churches;
                    document.getElementById("tableR8budget").innerHTML = "₱" + r8goals.budget;

                    document.getElementById("tableTOTALeva").innerHTML = (aiagoals.evangelism * 1) + (gangoals.evangelism * 1) + (srgoals.evangelism * 1) + (jfgoals.evangelism * 1) + (gcmmgoals.evangelism * 1) + (r8goals.evangelism * 1);
                    document.getElementById("tableTOTALsfu").innerHTML = (aiagoals.sfu * 1) + (gangoals.sfu * 1) + (srgoals.sfu * 1) + (jfgoals.sfu * 1) + (gcmmgoals.sfu * 1) + (r8goals.sfu * 1);
                    document.getElementById("tableTOTALst").innerHTML = (aiagoals.st * 1) + (gangoals.st * 1) + (srgoals.st * 1) + (jfgoals.st * 1) + (gcmmgoals.st * 1) + (r8goals.st * 1);
                    document.getElementById("tableTOTALcmd").innerHTML = (aiagoals.cmd * 1) + (gangoals.cmd * 1) + (srgoals.cmd * 1) + (jfgoals.cmd * 1) + (gcmmgoals.cmd * 1) + (r8goals.cmd * 1);
                    document.getElementById("tableTOTALchurches").innerHTML = (aiagoals.churches * 1) + (gangoals.churches * 1) + (srgoals.churches * 1) + (jfgoals.churches * 1) + (gcmmgoals.churches * 1) + (r8goals.churches * 1);
                    document.getElementById("tableTOTALbudget").innerHTML = "₱" + ((aiagoals.budget * 1) + (gangoals.budget * 1) + (srgoals.budget * 1) + (jfgoals.budget * 1) + (gcmmgoals.budget * 1) + (r8goals.budget * 1));
                }, 500);

            } else if (mYear == "2022") {
                refYear = "2022to2023";
                // console.log("2022-2023");
                $("#evan_num").html("---");
                $("#sfu_num").html("---");
                $("#st_num").html("---");
                $("#cmd_num").html("---");
                $("#churches_num").html("---");
                $("#budget_num").html("---");

                document.getElementById("tableAIAeva").innerHTML = "---";
                document.getElementById("tableAIAsfu").innerHTML = "---";
                document.getElementById("tableAIAst").innerHTML = "---";
                document.getElementById("tableAIAcmd").innerHTML = "---";
                document.getElementById("tableAIAchurches").innerHTML = "---";
                document.getElementById("tableAIAbudget").innerHTML = "---";

                document.getElementById("tableGANeva").innerHTML = "---";
                document.getElementById("tableGANsfu").innerHTML = "---";
                document.getElementById("tableGANst").innerHTML = "---";
                document.getElementById("tableGANcmd").innerHTML = "---";
                document.getElementById("tableGANchurches").innerHTML = "---";
                document.getElementById("tableGANbudget").innerHTML = "---";

                document.getElementById("tableSReva").innerHTML = "---";
                document.getElementById("tableSRsfu").innerHTML = "---";
                document.getElementById("tableSRst").innerHTML = "---";
                document.getElementById("tableSRcmd").innerHTML = "---";
                document.getElementById("tableSRchurches").innerHTML = "---";
                document.getElementById("tableSRbudget").innerHTML = "---";

                document.getElementById("tableJFeva").innerHTML = "---";
                document.getElementById("tableJFsfu").innerHTML = "---";
                document.getElementById("tableJFst").innerHTML = "---";
                document.getElementById("tableJFcmd").innerHTML = "---";
                document.getElementById("tableJFchurches").innerHTML = "---";
                document.getElementById("tableJFbudget").innerHTML = "---";

                document.getElementById("tableGCMMeva").innerHTML = "---";
                document.getElementById("tableGCMMsfu").innerHTML = "---";
                document.getElementById("tableGCMMst").innerHTML = "---";
                document.getElementById("tableGCMMcmd").innerHTML = "---";
                document.getElementById("tableGCMMchurches").innerHTML = "---";
                document.getElementById("tableGCMMbudget").innerHTML = "---";

                document.getElementById("tableR8eva").innerHTML = "---";
                document.getElementById("tableR8sfu").innerHTML = "---";
                document.getElementById("tableR8st").innerHTML = "---";
                document.getElementById("tableR8cmd").innerHTML = "---";
                document.getElementById("tableR8churches").innerHTML = "---";
                document.getElementById("tableR8budget").innerHTML = "---";

                document.getElementById("tableTOTALeva").innerHTML = "---";
                document.getElementById("tableTOTALsfu").innerHTML = "---";
                document.getElementById("tableTOTALst").innerHTML = "---";
                document.getElementById("tableTOTALcmd").innerHTML = "---";
                document.getElementById("tableTOTALchurches").innerHTML = "---";
                document.getElementById("tableTOTALbudget").innerHTML = "---";
            } else if (mYear == "2023") {
                // console.log("2023-2024");
                refYear = "2023to2024";
                $("#evan_num").html("---");
                $("#sfu_num").html("---");
                $("#st_num").html("---");
                $("#cmd_num").html("---");
                $("#churches_num").html("---");
                $("#budget_num").html("---");

                document.getElementById("tableAIAeva").innerHTML = "---";
                document.getElementById("tableAIAsfu").innerHTML = "---";
                document.getElementById("tableAIAst").innerHTML = "---";
                document.getElementById("tableAIAcmd").innerHTML = "---";
                document.getElementById("tableAIAchurches").innerHTML = "---";
                document.getElementById("tableAIAbudget").innerHTML = "---";

                document.getElementById("tableGANeva").innerHTML = "---";
                document.getElementById("tableGANsfu").innerHTML = "---";
                document.getElementById("tableGANst").innerHTML = "---";
                document.getElementById("tableGANcmd").innerHTML = "---";
                document.getElementById("tableGANchurches").innerHTML = "---";
                document.getElementById("tableGANbudget").innerHTML = "---";

                document.getElementById("tableSReva").innerHTML = "---";
                document.getElementById("tableSRsfu").innerHTML = "---";
                document.getElementById("tableSRst").innerHTML = "---";
                document.getElementById("tableSRcmd").innerHTML = "---";
                document.getElementById("tableSRchurches").innerHTML = "---";
                document.getElementById("tableSRbudget").innerHTML = "---";

                document.getElementById("tableJFeva").innerHTML = "---";
                document.getElementById("tableJFsfu").innerHTML = "---";
                document.getElementById("tableJFst").innerHTML = "---";
                document.getElementById("tableJFcmd").innerHTML = "---";
                document.getElementById("tableJFchurches").innerHTML = "---";
                document.getElementById("tableJFbudget").innerHTML = "---";

                document.getElementById("tableGCMMeva").innerHTML = "---";
                document.getElementById("tableGCMMsfu").innerHTML = "---";
                document.getElementById("tableGCMMst").innerHTML = "---";
                document.getElementById("tableGCMMcmd").innerHTML = "---";
                document.getElementById("tableGCMMchurches").innerHTML = "---";
                document.getElementById("tableGCMMbudget").innerHTML = "---";

                document.getElementById("tableR8eva").innerHTML = "---";
                document.getElementById("tableR8sfu").innerHTML = "---";
                document.getElementById("tableR8st").innerHTML = "---";
                document.getElementById("tableR8cmd").innerHTML = "---";
                document.getElementById("tableR8churches").innerHTML = "---";
                document.getElementById("tableR8budget").innerHTML = "---";

                document.getElementById("tableTOTALeva").innerHTML = "---";
                document.getElementById("tableTOTALsfu").innerHTML = "---";
                document.getElementById("tableTOTALst").innerHTML = "---";
                document.getElementById("tableTOTALcmd").innerHTML = "---";
                document.getElementById("tableTOTALchurches").innerHTML = "---";
                document.getElementById("tableTOTALbudget").innerHTML = "---";
            } else if (mYear == "2024") {
                // console.log("2024-2025");
                refYear = "2024to2025";
                $("#evan_num").html("---");
                $("#sfu_num").html("---");
                $("#st_num").html("---");
                $("#cmd_num").html("---");
                $("#churches_num").html("---");
                $("#budget_num").html("---");

                document.getElementById("tableAIAeva").innerHTML = "---";
                document.getElementById("tableAIAsfu").innerHTML = "---";
                document.getElementById("tableAIAst").innerHTML = "---";
                document.getElementById("tableAIAcmd").innerHTML = "---";
                document.getElementById("tableAIAchurches").innerHTML = "---";
                document.getElementById("tableAIAbudget").innerHTML = "---";

                document.getElementById("tableGANeva").innerHTML = "---";
                document.getElementById("tableGANsfu").innerHTML = "---";
                document.getElementById("tableGANst").innerHTML = "---";
                document.getElementById("tableGANcmd").innerHTML = "---";
                document.getElementById("tableGANchurches").innerHTML = "---";
                document.getElementById("tableGANbudget").innerHTML = "---";

                document.getElementById("tableSReva").innerHTML = "---";
                document.getElementById("tableSRsfu").innerHTML = "---";
                document.getElementById("tableSRst").innerHTML = "---";
                document.getElementById("tableSRcmd").innerHTML = "---";
                document.getElementById("tableSRchurches").innerHTML = "---";
                document.getElementById("tableSRbudget").innerHTML = "---";

                document.getElementById("tableJFeva").innerHTML = "---";
                document.getElementById("tableJFsfu").innerHTML = "---";
                document.getElementById("tableJFst").innerHTML = "---";
                document.getElementById("tableJFcmd").innerHTML = "---";
                document.getElementById("tableJFchurches").innerHTML = "---";
                document.getElementById("tableJFbudget").innerHTML = "---";

                document.getElementById("tableGCMMeva").innerHTML = "---";
                document.getElementById("tableGCMMsfu").innerHTML = "---";
                document.getElementById("tableGCMMst").innerHTML = "---";
                document.getElementById("tableGCMMcmd").innerHTML = "---";
                document.getElementById("tableGCMMchurches").innerHTML = "---";
                document.getElementById("tableGCMMbudget").innerHTML = "---";

                document.getElementById("tableR8eva").innerHTML = "---";
                document.getElementById("tableR8sfu").innerHTML = "---";
                document.getElementById("tableR8st").innerHTML = "---";
                document.getElementById("tableR8cmd").innerHTML = "---";
                document.getElementById("tableR8churches").innerHTML = "---";
                document.getElementById("tableR8budget").innerHTML = "---";

                document.getElementById("tableTOTALeva").innerHTML = "---";
                document.getElementById("tableTOTALsfu").innerHTML = "---";
                document.getElementById("tableTOTALst").innerHTML = "---";
                document.getElementById("tableTOTALcmd").innerHTML = "---";
                document.getElementById("tableTOTALchurches").innerHTML = "---";
                document.getElementById("tableTOTALbudget").innerHTML = "---";
            } else if (mYear == "2025") {
                // console.log("2025-2026");
                refYear = "2025to2026";
                $("#evan_num").html("---");
                $("#sfu_num").html("---");
                $("#st_num").html("---");
                $("#cmd_num").html("---");
                $("#churches_num").html("---");
                $("#budget_num").html("---");

                document.getElementById("tableAIAeva").innerHTML = "---";
                document.getElementById("tableAIAsfu").innerHTML = "---";
                document.getElementById("tableAIAst").innerHTML = "---";
                document.getElementById("tableAIAcmd").innerHTML = "---";
                document.getElementById("tableAIAchurches").innerHTML = "---";
                document.getElementById("tableAIAbudget").innerHTML = "---";

                document.getElementById("tableGANeva").innerHTML = "---";
                document.getElementById("tableGANsfu").innerHTML = "---";
                document.getElementById("tableGANst").innerHTML = "---";
                document.getElementById("tableGANcmd").innerHTML = "---";
                document.getElementById("tableGANchurches").innerHTML = "---";
                document.getElementById("tableGANbudget").innerHTML = "---";

                document.getElementById("tableSReva").innerHTML = "---";
                document.getElementById("tableSRsfu").innerHTML = "---";
                document.getElementById("tableSRst").innerHTML = "---";
                document.getElementById("tableSRcmd").innerHTML = "---";
                document.getElementById("tableSRchurches").innerHTML = "---";
                document.getElementById("tableSRbudget").innerHTML = "---";

                document.getElementById("tableJFeva").innerHTML = "---";
                document.getElementById("tableJFsfu").innerHTML = "---";
                document.getElementById("tableJFst").innerHTML = "---";
                document.getElementById("tableJFcmd").innerHTML = "---";
                document.getElementById("tableJFchurches").innerHTML = "---";
                document.getElementById("tableJFbudget").innerHTML = "---";

                document.getElementById("tableGCMMeva").innerHTML = "---";
                document.getElementById("tableGCMMsfu").innerHTML = "---";
                document.getElementById("tableGCMMst").innerHTML = "---";
                document.getElementById("tableGCMMcmd").innerHTML = "---";
                document.getElementById("tableGCMMchurches").innerHTML = "---";
                document.getElementById("tableGCMMbudget").innerHTML = "---";

                document.getElementById("tableR8eva").innerHTML = "---";
                document.getElementById("tableR8sfu").innerHTML = "---";
                document.getElementById("tableR8st").innerHTML = "---";
                document.getElementById("tableR8cmd").innerHTML = "---";
                document.getElementById("tableR8churches").innerHTML = "---";
                document.getElementById("tableR8budget").innerHTML = "---";

                document.getElementById("tableTOTALeva").innerHTML = "---";
                document.getElementById("tableTOTALsfu").innerHTML = "---";
                document.getElementById("tableTOTALst").innerHTML = "---";
                document.getElementById("tableTOTALcmd").innerHTML = "---";
                document.getElementById("tableTOTALchurches").innerHTML = "---";
                document.getElementById("tableTOTALbudget").innerHTML = "---";
            }
        };


        $scope.print = function () {
            var ref = firebase.database().ref("/" + refYear);
            var aiagoals = {};
            var gangoals = {};
            var srgoals = {};
            var jfgoals = {};
            var gcmmgoals = {};
            var r8goals = {};
            var goals = [];

            ref.orderByChild("team").equalTo("aia").on("child_added", function (snapshot) {
                var goalevan = snapshot.val().evangelism,
                    goalsfu = snapshot.val().sfu,
                    goalst = snapshot.val().st,
                    goalcmd = snapshot.val().cmd,
                    goalchurches = snapshot.val().churches,
                    goalbudget = snapshot.val().budget;
                // console.log(snapshot.val());
                aiagoals = snapshot.val();

            });
            ref.orderByChild("team").equalTo("gan").on("child_added", function (snapshot) {
                var goalevan = snapshot.val().evangelism,
                    goalsfu = snapshot.val().sfu,
                    goalst = snapshot.val().st,
                    goalcmd = snapshot.val().cmd,
                    goalchurches = snapshot.val().churches,
                    goalbudget = snapshot.val().budget;
                // console.log(snapshot.val());
                gangoals = snapshot.val();

            });
            ref.orderByChild("team").equalTo("sr").on("child_added", function (snapshot) {
                var goalevan = snapshot.val().evangelism,
                    goalsfu = snapshot.val().sfu,
                    goalst = snapshot.val().st,
                    goalcmd = snapshot.val().cmd,
                    goalchurches = snapshot.val().churches,
                    goalbudget = snapshot.val().budget;
                // console.log(snapshot.val());
                srgoals = snapshot.val();

            });
            ref.orderByChild("team").equalTo("jf").on("child_added", function (snapshot) {
                var goalevan = snapshot.val().evangelism,
                    goalsfu = snapshot.val().sfu,
                    goalst = snapshot.val().st,
                    goalcmd = snapshot.val().cmd,
                    goalchurches = snapshot.val().churches,
                    goalbudget = snapshot.val().budget;
                // console.log(snapshot.val());
                jfgoals = snapshot.val();

            });
            ref.orderByChild("team").equalTo("gcmm").on("child_added", function (snapshot) {
                var goalevan = snapshot.val().evangelism,
                    goalsfu = snapshot.val().sfu,
                    goalst = snapshot.val().st,
                    goalcmd = snapshot.val().cmd,
                    goalchurches = snapshot.val().churches,
                    goalbudget = snapshot.val().budget;
                // console.log(snapshot.val());
                gcmmgoals = snapshot.val();

            });
            ref.orderByChild("team").equalTo("r8").on("child_added", function (snapshot) {
                var goalevan = snapshot.val().evangelism,
                    goalsfu = snapshot.val().sfu,
                    goalst = snapshot.val().st,
                    goalcmd = snapshot.val().cmd,
                    goalchurches = snapshot.val().churches,
                    goalbudget = snapshot.val().budget;
                // console.log(snapshot.val());
                r8goals = snapshot.val();

            });

            // ref.on("value", function (snapshot) {
            //     console.log(snapshot.val());
            //     snapshot.forEach((data) => {
            //         goals.push(data.val());
            //     });

            // });

            setTimeout(function () {
                // console.log(data);
                // const report_date = data.date.split(":");
                // const months = [
                //     "January",
                //     "February",
                //     "March",
                //     "April",
                //     "May",
                //     "June",
                //     "July",
                //     "August",
                //     "September",
                //     "October",
                //     "November",
                //     "December",
                // ];
                const subHeader2 = {
                    //     second: `As of ${months[report_date[0] * 1 - 1]} ${report_date[1]}, ${
                    //     report_date[2]
                    //   }`,
                };
                const pdfDefinition = {
                    content: [{
                            stack: [
                                // {
                                //     text: "Department of Education"
                                // },
                                // {
                                //     text: "Regional Office V"
                                // },
                                // {
                                //     text: "SCHOOLS DIVISION OF ALBAY",
                                // },
                            ],
                            style: "header",
                        },
                        {
                            style: "table",
                            table: {
                                widths: ["*", "*", "*", "*", "*", "*", "*"],
                                headers: 2,
                                body: [
                                    [{
                                            text: "Team",
                                            alignment: "center",
                                            bold: true
                                        },
                                        {
                                            text: "Lead",
                                            alignment: "center",
                                            bold: true,
                                            colSpan: 3
                                        },
                                        {

                                        },
                                        {

                                        },
                                        {
                                            text: "Lag",
                                            alignment: "center",
                                            bold: true,
                                            colSpan: 2
                                        },
                                        {

                                        },
                                        {
                                            text: "Budget",
                                            alignment: "center",
                                            bold: true
                                        },
                                    ],
                                    [{},
                                        {
                                            text: "Evangelism",
                                            alignment: "center",
                                            bold: true
                                        },
                                        {
                                            text: "Started FU",
                                            alignment: "center",
                                            bold: true
                                        },
                                        {
                                            text: "Started Training",
                                            alignment: "center",
                                            bold: true
                                        },
                                        {
                                            text: "CMDs",
                                            alignment: "center",
                                            bold: true
                                        },
                                        {
                                            text: "Churches",
                                            alignment: "center",
                                            bold: true
                                        },
                                        {},
                                    ],
                                    [{
                                            text: "Athletes in Action",
                                            alignment: "left",
                                        },
                                        {
                                            text: aiagoals.evangelism,
                                            alignment: "center",
                                        },
                                        {
                                            text: aiagoals.sfu,
                                            alignment: "center",
                                        },
                                        {
                                            text: aiagoals.st,
                                            alignment: "center",
                                        },
                                        {
                                            text: aiagoals.cmd,
                                            alignment: "center",
                                        },
                                        {
                                            text: aiagoals.churches,
                                            alignment: "center",
                                        },
                                        {
                                            text: "₱" + aiagoals.budget,
                                            alignment: "center",
                                        },
                                    ],
                                    [{
                                            text: "Global Aid Network",
                                            alignment: "left",
                                        },
                                        {
                                            text: gangoals.evangelism,
                                            alignment: "center",
                                        },
                                        {
                                            text: gangoals.sfu,
                                            alignment: "center",
                                        },
                                        {
                                            text: gangoals.st,
                                            alignment: "center",
                                        },
                                        {
                                            text: gangoals.cmd,
                                            alignment: "center",
                                        },
                                        {
                                            text: gangoals.churches,
                                            alignment: "center",
                                        },
                                        {
                                            text: "₱" + gangoals.budget,
                                            alignment: "center",
                                        },
                                    ],
                                    [{
                                            text: "Story Runners",
                                            alignment: "left",
                                        },
                                        {
                                            text: srgoals.evangelism,
                                            alignment: "center",
                                        },
                                        {
                                            text: srgoals.sfu,
                                            alignment: "center",
                                        },
                                        {
                                            text: srgoals.st,
                                            alignment: "center",
                                        },
                                        {
                                            text: srgoals.cmd,
                                            alignment: "center",
                                        },
                                        {
                                            text: srgoals.churches,
                                            alignment: "center",
                                        },
                                        {
                                            text: "₱" + srgoals.budget,
                                            alignment: "center",
                                        },
                                    ],
                                    [{
                                            text: "Jesus Film",
                                            alignment: "left",
                                        },
                                        {
                                            text: jfgoals.evangelism,
                                            alignment: "center",
                                        },
                                        {
                                            text: jfgoals.sfu,
                                            alignment: "center",
                                        },
                                        {
                                            text: jfgoals.st,
                                            alignment: "center",
                                        },
                                        {
                                            text: jfgoals.cmd,
                                            alignment: "center",
                                        },
                                        {
                                            text: jfgoals.churches,
                                            alignment: "center",
                                        },
                                        {
                                            text: "₱" + jfgoals.budget,
                                            alignment: "center",
                                        },
                                    ],
                                    [{
                                            text: "GCM Manila",
                                            alignment: "left",
                                        },
                                        {
                                            text: gcmmgoals.evangelism,
                                            alignment: "center",
                                        },
                                        {
                                            text: gcmmgoals.sfu,
                                            alignment: "center",
                                        },
                                        {
                                            text: gcmmgoals.st,
                                            alignment: "center",
                                        },
                                        {
                                            text: gcmmgoals.cmd,
                                            alignment: "center",
                                        },
                                        {
                                            text: gcmmgoals.churches,
                                            alignment: "center",
                                        },
                                        {
                                            text: "₱" + gcmmgoals.budget,
                                            alignment: "center",
                                        },
                                    ],
                                    [{
                                            text: "R8 (Special Project)",
                                            alignment: "left",
                                        },
                                        {
                                            text: r8goals.evangelism,
                                            alignment: "center",
                                        },
                                        {
                                            text: r8goals.sfu,
                                            alignment: "center",
                                        },
                                        {
                                            text: r8goals.st,
                                            alignment: "center",
                                        },
                                        {
                                            text: r8goals.cmd,
                                            alignment: "center",
                                        },
                                        {
                                            text: r8goals.churches,
                                            alignment: "center",
                                        },
                                        {
                                            text: "₱" + r8goals.budget,
                                            alignment: "center",
                                        },
                                    ],
                                    [{
                                            text: " ",
                                            alignment: "left",
                                        },
                                        {
                                            text: " ",
                                            alignment: "center",
                                        },
                                        {
                                            text: " ",
                                            alignment: "center",
                                        },
                                        {
                                            text: " ",
                                            alignment: "center",
                                        },
                                        {
                                            text: " ",
                                            alignment: "center",
                                        },
                                        {
                                            text: " ",
                                            alignment: "center",
                                        },
                                        {
                                            text: " ",
                                            alignment: "center",
                                        },
                                    ],
                                    [{
                                            text: "Total",
                                            alignment: "left",
                                            bold: true
                                        },
                                        {
                                            text: (aiagoals.evangelism * 1) + (gangoals.evangelism * 1) + (srgoals.evangelism * 1) + (jfgoals.evangelism * 1) + (gcmmgoals.evangelism * 1) + (r8goals.evangelism * 1),
                                            alignment: "center",
                                        },
                                        {
                                            text: (aiagoals.sfu * 1) + (gangoals.sfu * 1) + (srgoals.sfu * 1) + (jfgoals.sfu * 1) + (gcmmgoals.sfu * 1) + (r8goals.sfu * 1),
                                            alignment: "center",
                                        },
                                        {
                                            text: (aiagoals.st * 1) + (gangoals.st * 1) + (srgoals.st * 1) + (jfgoals.st * 1) + (gcmmgoals.st * 1) + (r8goals.st * 1),
                                            alignment: "center",
                                        },
                                        {
                                            text: (aiagoals.cmd * 1) + (gangoals.cmd * 1) + (srgoals.cmd * 1) + (jfgoals.cmd * 1) + (gcmmgoals.cmd * 1) + (r8goals.cmd * 1),
                                            alignment: "center",
                                        },
                                        {
                                            text: (aiagoals.churches * 1) + (gangoals.churches * 1) + (srgoals.churches * 1) + (jfgoals.churches * 1) + (gcmmgoals.churches * 1) + (r8goals.churches * 1),
                                            alignment: "center",
                                        },
                                        {
                                            text: "₱" + ((aiagoals.budget * 1) + (gangoals.budget * 1) + (srgoals.budget * 1) + (jfgoals.budget * 1) + (gcmmgoals.budget * 1) + (r8goals.budget * 1)),
                                            alignment: "center",
                                        },
                                    ],
                                ],
                            },
                        },
                    ],
                    styles: {
                        header: {
                            fontSize: 10,
                            alignment: "center",
                            margin: [0, 0, 0, 10],
                            bold: true
                        },
                        footer: {
                            fontSize: 10,
                            alignment: "center",
                            margin: [0, 0, 0, 10],
                        },
                        footer1: {
                            fontSize: 10,
                            alignment: "left",
                            margin: [0, 10, 0, 10],
                        },
                        footNote: {
                            fontSize: 8,
                            alignment: "left",
                            italics: true,
                            bold: true,
                        },
                        subHeader1: {
                            fontSize: 10,
                            alignment: "left",
                            bold: true,
                            color: "green",
                            margin: [0, 0, 0, 15],
                        },
                        subHeader2: {
                            fontSize: 10,
                            alignment: "center",
                            margin: [0, 0, 0, 15],

                        },
                        paragraph: {
                            fontSize: 10,
                            alignment: "left",
                            margin: [10, 0, 0, 10],
                        },
                        table: {
                            fontSize: 10,
                            margin: [0, 0, 0, 15],
                        },
                    },
                    pageSize: "LETTER",
                    pageOrientation: "landscape",
                    pageMargins: [48, 48, 48, 48],
                };
                $scope.filename = `Per Team Report`;
                $("#RPTViewer").modal("show");


                const pdfDocGenerator = pdfMake.createPdf(pdfDefinition);
                pdfDocGenerator.getDataUrl((dataUrl) => {
                    const targetElement = document.querySelector("#iframeContainer");
                    const iframe = document.createElement("iframe");
                    iframe.style = "width: 100%; height: 100%;";
                    iframe.src = `${dataUrl}`;
                    iframe.id = "rd";
                    targetElement.appendChild(iframe);
                });
                // console.log(aiagoals);
                // console.log(gangoals);
                // console.log(srgoals);
                // console.log(jfgoals);
                // console.log(gcmmgoals);
                // console.log(r8goals);
                // console.log(goals);
            }, 500);






        };

        $scope.closeModal = function () {
            $("#RPTViewer").modal("hide");
            $("#iframeContainer iframe").remove();
        };






        var bc = [];
        var hc = [];


        var currentUrl = window.location.hostname;



        var ref = firebase.database().ref("/datasets/human/");
        ref.orderByChild("url").equalTo(currentUrl).on("child_added", function (snapshot) {
            hc.push(snapshot.val());
            console.log('Human:', hc.length)
            $('#humancliks').text(hc.length)
            $('#traffic').text(bc.length + hc.length)
        });

        var ref = firebase.database().ref("/datasets/bot/");
        ref.orderByChild("url").equalTo(currentUrl).on("child_added", function (snapshot) {
            bc.push(snapshot.val());
            console.log('Bot:', bc.length)
            $('#botcliks').text(bc.length)
            $('#traffic').text(bc.length + hc.length)
        });

        var ref = firebase.database().ref("/datasets/adscount");
        ref.orderByChild("domain").equalTo(currentUrl).on("child_added", function (snapshot) {
            console.log("Data:", snapshot.val().count);
            $('#Campaign').text(snapshot.val().count);
        });




    });
});