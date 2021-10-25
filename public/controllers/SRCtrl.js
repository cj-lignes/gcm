'use strict';

angular.module('newApp').controller('SRCtrl', function ($scope) {
    $(document).ready(function () {
        var username = localStorage.getItem("username");

        var register = localStorage.getItem("register");

        var ref = firebase.database().ref("sr");

        var userVerify = firebase.auth().currentUser;
        $scope.months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];

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
                var year = mYear + "to" + (1 + (mYear * 1));
                console.log("2021-2022");
                var ref2021 = firebase.database().ref(year);
                var ref2 = firebase.database().ref("sr" + mYear);
                // console.log(year);
                ref2021.orderByChild("team").equalTo("sr").on("child_added", function (snapshot) {
                    var goalevan = snapshot.val().evangelism,
                        goalsfu = snapshot.val().sfu,
                        goalst = snapshot.val().st,
                        goalcmd = snapshot.val().cmd,
                        goalchurches = snapshot.val().churches,
                        goalbudget = snapshot.val().budget;
                    // console.log(snapshot.val());
                    $scope.goal = snapshot.val();
                    ref2.on("value", (snapshot2) => {
                        // do some stuff once
                        console.log(snapshot2.val());
                        let returnArr = [];
                        var evan = 0,
                            sfu = 0,
                            st = 0,
                            cmd = 0,
                            churches = 0;
                        snapshot2.forEach((data) => {
                            // console.log('The ' + data.key + ' Evangelism is ' + data.val().evangelism);
                            returnArr.push(data.val());
                            evan = evan + (data.val().evangelism * 1);
                            sfu = sfu + (data.val().sfu * 1);
                            st = st + (data.val().st * 1);
                            cmd = cmd + (data.val().cmd * 1);
                            churches = churches + (data.val().churches * 1);
                            // console.log(evan);
                        });
                        $scope.data = returnArr;
                        $scope.ave_evan = evan / $scope.data.length;
                        $scope.ave_sfu = sfu / $scope.data.length;
                        $scope.ave_st = st / $scope.data.length;
                        $scope.ave_cmd = cmd / $scope.data.length;
                        $scope.ave_churches = churches / $scope.data.length;
                        $scope.evancompletion = evan;
                        $scope.sfucompletion = sfu;
                        $scope.stcompletion = st;
                        $scope.cmdcompletion = cmd;
                        $scope.churchescompletion = churches;
                        // console.log($scope.data);
                        document.getElementById("evan_prog").style.width = ((evan / goalevan) * 100) + "%";
                        document.getElementById("sfu_prog").style.width = ((sfu / goalsfu) * 100) + "%";
                        document.getElementById("st_prog").style.width = ((st / goalst) * 100) + "%";
                        document.getElementById("cmd_prog").style.width = ((cmd / goalcmd) * 100) + "%";
                        document.getElementById("churches_prog").style.width = ((churches / goalchurches) * 100) + "%";

                        $('span.info-box-number').eq(0).html(goalevan - evan);
                        $('span.info-box-number').eq(1).html(goalsfu - sfu);
                        $('span.info-box-number').eq(2).html(goalst - st);
                        $('span.info-box-number').eq(3).html(goalcmd - cmd);
                        $('span.info-box-number').eq(4).html(goalchurches - churches);
                        $('span.info-box-number').eq(5).html("₱" + goalbudget);
                    });
                });
            } else if (mYear == "2022") {
                console.log("2022-2023");
                $('span.info-box-number').eq(0).html("---");
                $('span.info-box-number').eq(1).html("---");
                $('span.info-box-number').eq(2).html("---");
                $('span.info-box-number').eq(3).html("---");
                $('span.info-box-number').eq(4).html("---");
                $('span.info-box-number').eq(5).html("---");
            } else if (mYear == "2023") {
                console.log("2023-2024");
                $('span.info-box-number').eq(0).html("---");
                $('span.info-box-number').eq(1).html("---");
                $('span.info-box-number').eq(2).html("---");
                $('span.info-box-number').eq(3).html("---");
                $('span.info-box-number').eq(4).html("---");
                $('span.info-box-number').eq(5).html("---");
            } else if (mYear == "2024") {
                console.log("2024-2025");
                $('span.info-box-number').eq(0).html("---");
                $('span.info-box-number').eq(1).html("---");
                $('span.info-box-number').eq(2).html("---");
                $('span.info-box-number').eq(3).html("---");
                $('span.info-box-number').eq(4).html("---");
                $('span.info-box-number').eq(5).html("---");
            } else if (mYear == "2025") {
                console.log("2025-2026");
                $('span.info-box-number').eq(0).html("---");
                $('span.info-box-number').eq(1).html("---");
                $('span.info-box-number').eq(2).html("---");
                $('span.info-box-number').eq(3).html("---");
                $('span.info-box-number').eq(4).html("---");
                $('span.info-box-number').eq(5).html("---");
            }
        };

        $scope.addData = function () {
            var current = firebase.auth().currentUser;
            var evangelism = $("#evangelism").val();
            var sfu = $("#sfu").val();
            var st = $("#st").val();
            var cmd = $("#evangelism").val();
            var churches = $("#churches").val();

            let currentDate = new Date();
            let cDay = currentDate.getDate();
            let cMonth = currentDate.getMonth() + 1;
            let cYear = currentDate.getFullYear();

            var ref2 = firebase.database().ref("/sr" + cYear);
            var ref3 = firebase.database().ref("/sr" + (cYear - 1));
            // console.log("<b>" + cDay + "/" + cMonth + "/" + cYear + "</b>");

            if (evangelism && sfu && st && cmd && churches) {
                if (cMonth >= 7) {
                    ref2.push({
                            fulldate: cMonth + "/" + cDay + "/" + cYear,
                            month: cMonth,
                            year: cYear,
                            evangelism: $("#evangelism").val(),
                            sfu: $("#sfu").val(),
                            st: $("#st").val(),
                            cmd: $("#cmd").val(),
                            churches: $("#churches").val(),
                        })
                        .then(function (ref) {
                            console.log(ref.key);
                            ref2.child(ref.key).update({
                                key: ref.key
                            })

                            console.log('Added to database');
                            $("#myModal").modal('hide');
                            $("#evangelism").val("");
                            $("#sfu").val("");
                            $("#st").val("");
                            $("#cmd").val("");
                            $("#churches").val("");
                        });
                } else {
                    ref3.push({
                            fulldate: cMonth + "/" + cDay + "/" + cYear,
                            month: cMonth,
                            year: cYear,
                            evangelism: $("#evangelism").val(),
                            sfu: $("#sfu").val(),
                            st: $("#st").val(),
                            cmd: $("#cmd").val(),
                            churches: $("#churches").val(),
                        })
                        .then(function (ref) {
                            console.log(ref.key);
                            ref2.child(ref.key).update({
                                key: ref.key
                            })

                            console.log('Added to database');
                            $("#myModal").modal('hide');
                            $("#evangelism").val("");
                            $("#sfu").val("");
                            $("#st").val("");
                            $("#cmd").val("");
                            $("#churches").val("");
                        });
                }
            } else {
                // document.getElementById("messages").innerHTML = "You need to fill up Atleast the evangelism field";

                // setTimeout(() => {
                //     // document.getElementById("messages").innerHTML = "";

                // }, 5000);
            }




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