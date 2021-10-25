'use strict';

angular.module('newApp').controller('DashboardCtrl', function ($scope) {
    $(document).ready(function () {
        var username = localStorage.getItem("username");

        var register = localStorage.getItem("register");

        var ref = firebase.database().ref("datasets/users");

        var userVerify = firebase.auth().currentUser;

        $scope.evanGoal = 0;
        $scope.sfuGoal = 0;
        $scope.stGoal = 0;
        $scope.cmdGoal = 0;
        $scope.churchesGoal = 0;
        $scope.evanCurrent = 0;
        $scope.sfuCurrent = 0;
        $scope.stCurrent = 0;
        $scope.cmdCurrent = 0;
        $scope.churchesCurrent = 0;

        // $scope.mYear = function () {
        //     // var payment = document.getElementById("payment");
        //     var mYear = $('#mYear').val();
        //     // if (mYear == "2016") {
        //     //     console.log("2016-2017");
        //     //     $('span.info-box-number').eq(0).html("---");
        //     //     $('span.info-box-number').eq(1).html("---");
        //     //     $('span.info-box-number').eq(2).html("---");
        //     //     $('span.info-box-number').eq(3).html("---");
        //     //     $('span.info-box-number').eq(4).html("---");
        //     //     $('span.info-box-number').eq(5).html("---");
        //     // } else if (mYear == "2017") {
        //     //     console.log("2017-2018");
        //     //     $('span.info-box-number').eq(0).html("---");
        //     //     $('span.info-box-number').eq(1).html("---");
        //     //     $('span.info-box-number').eq(2).html("---");
        //     //     $('span.info-box-number').eq(3).html("---");
        //     //     $('span.info-box-number').eq(4).html("---");
        //     //     $('span.info-box-number').eq(5).html("---");
        //     // } else if (mYear == "2018") {
        //     //     console.log("2018-2019");
        //     //     $('span.info-box-number').eq(0).html("---");
        //     //     $('span.info-box-number').eq(1).html("---");
        //     //     $('span.info-box-number').eq(2).html("---");
        //     //     $('span.info-box-number').eq(3).html("---");
        //     //     $('span.info-box-number').eq(4).html("---");
        //     //     $('span.info-box-number').eq(5).html("---");
        //     // } else if (mYear == "2019") {
        //     //     console.log("2019-2020");
        //     //     $('span.info-box-number').eq(0).html("---");
        //     //     $('span.info-box-number').eq(1).html("---");
        //     //     $('span.info-box-number').eq(2).html("---");
        //     //     $('span.info-box-number').eq(3).html("---");
        //     //     $('span.info-box-number').eq(4).html("---");
        //     //     $('span.info-box-number').eq(5).html("---");
        //     // } else if (mYear == "2020") {
        //     //     console.log("2020-2021");
        //     //     $('span.info-box-number').eq(0).html("---");
        //     //     $('span.info-box-number').eq(1).html("---");
        //     //     $('span.info-box-number').eq(2).html("---");
        //     //     $('span.info-box-number').eq(3).html("---");
        //     //     $('span.info-box-number').eq(4).html("---");
        //     //     $('span.info-box-number').eq(5).html("---");
        //     // } else 
        //     if (mYear == "2021") {
        //         var year = mYear + "to" + (1 + (mYear * 1));
        //         console.log("2021-2022");
        //         var ref2021 = firebase.database().ref(year);
        //         var refaia = firebase.database().ref("aia");
        //         var refgan = firebase.database().ref("gan");
        //         var refsr = firebase.database().ref("sr");
        //         var refjf = firebase.database().ref("jf");
        //         var refgcmm = firebase.database().ref("gcmm");
        //         var refr8 = firebase.database().ref("r8");

        //         console.log(year);
        //         // ref2021.orderByChild("team").equalTo("aia").on("child_added", function (snapshot) {
        //         //     var goalevan = snapshot.val().evangelism,
        //         //         goalsfu = snapshot.val().sfu,
        //         //         goalst = snapshot.val().st,
        //         //         goalcmd = snapshot.val().cmd,
        //         //         goalchurches = snapshot.val().churches,
        //         //         goalbudget = snapshot.val().budget;
        //         //     console.log(snapshot.val());
        //         //     ref2.orderByChild("year").equalTo(2021).on("value", (snapshot2) => {
        //         //         // do some stuff once
        //         //         console.log(snapshot2.val());
        //         //         var evan = 0,
        //         //             sfu = 0,
        //         //             st = 0,
        //         //             cmd = 0,
        //         //             churches = 0;
        //         //         snapshot2.forEach((data) => {
        //         //             // console.log('The ' + data.key + ' Evangelism is ' + data.val().evangelism);
        //         //             evan = evan + (data.val().evangelism * 1);
        //         //             sfu = sfu + (data.val().sfu * 1);
        //         //             st = st + (data.val().st * 1);
        //         //             cmd = cmd + (data.val().cmd * 1);
        //         //             churches = churches + (data.val().churches * 1);
        //         //             // console.log(evan);
        //         //         });
        //         //         console.log(goalevan);
        //         //         $("#evan_num").html(goalevan - evan);
        //         //         $("#sfu_num").html(goalsfu - sfu);
        //         //         $("#st_num").html(goalst - st);
        //         //         $("#cmd_num").html(goalcmd - cmd);
        //         //         $("#churches_num").html(goalchurches - churches);
        //         //         $("#budget_num").html("₱" + goalbudget);
        //         //     });
        //         // });


        //         ref2021.on("value", (snapshot3) => {
        //             // do some stuff once
        //             console.log(snapshot3.val());
        //             var goalevan = 0,
        //                 goalsfu = 0,
        //                 goalst = 0,
        //                 goalcmd = 0,
        //                 goalchurches = 0,
        //                 goalbudget = 0;
        //             var AIAevan = 0,
        //                 AIAsfu = 0,
        //                 AIAst = 0,
        //                 AIAcmd = 0,
        //                 AIAchurches = 0;
        //             var GANevan = 0,
        //                 GANsfu = 0,
        //                 GANst = 0,
        //                 GANcmd = 0,
        //                 GANchurches = 0;
        //             var SRevan = 0,
        //                 SRsfu = 0,
        //                 SRst = 0,
        //                 SRcmd = 0,
        //                 SRchurches = 0;
        //             var JFevan = 0,
        //                 JFsfu = 0,
        //                 JFst = 0,
        //                 JFcmd = 0,
        //                 JFchurches = 0;
        //             var GCMMevan = 0,
        //                 GCMMsfu = 0,
        //                 GCMMst = 0,
        //                 GCMMcmd = 0,
        //                 GCMMchurches = 0;
        //             var R8evan = 0,
        //                 R8sfu = 0,
        //                 R8st = 0,
        //                 R8cmd = 0,
        //                 R8churches = 0;
        //             snapshot3.forEach((data) => {
        //                 // console.log('The ' + data.key + ' Evangelism is ' + data.val().evangelism);
        //                 goalevan = goalevan + (data.val().evangelism * 1);
        //                 goalsfu = goalsfu + (data.val().sfu * 1);
        //                 goalst = goalst + (data.val().st * 1);
        //                 goalcmd = goalcmd + (data.val().cmd * 1);
        //                 goalchurches = goalchurches + (data.val().churches * 1);
        //                 goalbudget = goalbudget + (data.val().budget * 1);
        //                 // console.log(evan);
        //                 // console.log(evan);
        //                 // console.log(evan);
        //                 // console.log(evan);
        //                 // console.log(evan);
        //             });
        //             refaia.on("value", (snapshot4) => {
        //                 console.log(snapshot4.val());
        //                 snapshot4.forEach((data) => {
        //                     // console.log('The ' + data.key + ' Evangelism is ' + data.val().evangelism);
        //                     AIAevan = AIAevan + (data.val().evangelism * 1);
        //                     AIAsfu = AIAsfu + (data.val().sfu * 1);
        //                     AIAst = AIAst + (data.val().st * 1);
        //                     AIAcmd = AIAcmd + (data.val().cmd * 1);
        //                     AIAchurches = AIAchurches + (data.val().churches * 1);
        //                     // console.log(data);
        //                     // console.log(AIAsfu);
        //                     // console.log(AIAst);
        //                     // console.log(AIAcmd);
        //                     // console.log(AIAchurches);
        //                 });
        //                 refgan.on("value", (snapshot5) => {
        //                     console.log(snapshot5.val());
        //                     snapshot5.forEach((data) => {
        //                         // console.log('The ' + data.key + ' Evangelism is ' + data.val().evangelism);
        //                         GANevan = GANevan + (data.val().evangelism * 1);
        //                         GANsfu = GANsfu + (data.val().sfu * 1);
        //                         GANst = GANst + (data.val().st * 1);
        //                         GANcmd = GANcmd + (data.val().cmd * 1);
        //                         GANchurches = GANchurches + (data.val().churches * 1);
        //                         // console.log(GANevan);
        //                         // console.log(GANsfu);
        //                         // console.log(GANst);
        //                         // console.log(GANcmd);
        //                         // console.log(GANchurches);
        //                     });
        //                     refsr.on("value", (snapshot6) => {
        //                         console.log(snapshot6.val());
        //                         snapshot6.forEach((data) => {
        //                             // console.log('The ' + data.key + ' Evangelism is ' + data.val().evangelism);
        //                             SRevan = SRevan + (data.val().evangelism * 1);
        //                             SRsfu = SRsfu + (data.val().sfu * 1);
        //                             SRst = SRst + (data.val().st * 1);
        //                             SRcmd = SRcmd + (data.val().cmd * 1);
        //                             SRchurches = SRchurches + (data.val().churches * 1);
        //                             // console.log(SRevan);
        //                             // console.log(SRsfu);
        //                             // console.log(SRst);
        //                             // console.log(SRcmd);
        //                             // console.log(SRchurches);
        //                         });
        //                         refjf.on("value", (snapshot7) => {
        //                             console.log(snapshot7.val());
        //                             snapshot7.forEach((data) => {
        //                                 // console.log('The ' + data.key + ' Evangelism is ' + data.val().evangelism);
        //                                 JFevan = JFevan + (data.val().evangelism * 1);
        //                                 JFsfu = JFsfu + (data.val().sfu * 1);
        //                                 JFst = JFst + (data.val().st * 1);
        //                                 JFcmd = JFcmd + (data.val().cmd * 1);
        //                                 JFchurches = JFchurches + (data.val().churches * 1);
        //                                 // console.log(JFevan);
        //                                 // console.log(JFsfu);
        //                                 // console.log(JFst);
        //                                 // console.log(JFcmd);
        //                                 // console.log(JFchurches);
        //                             });
        //                             refgcmm.on("value", (snapshot8) => {
        //                                 console.log(snapshot8.val());
        //                                 snapshot8.forEach((data) => {
        //                                     // console.log('The ' + data.key + ' Evangelism is ' + data.val().evangelism);
        //                                     GCMMevan = GCMMevan + (data.val().evangelism * 1);
        //                                     GCMMsfu = GCMMsfu + (data.val().sfu * 1);
        //                                     GCMMst = GCMMst + (data.val().st * 1);
        //                                     GCMMcmd = GCMMcmd + (data.val().cmd * 1);
        //                                     GCMMchurches = GCMMchurches + (data.val().churches * 1);
        //                                     // console.log(GCMMevan);
        //                                     // console.log(GCMMsfu);
        //                                     // console.log(GCMMst);
        //                                     // console.log(GCMMcmd);
        //                                     // console.log(GCMMchurches);
        //                                 });
        //                                 refr8.on("value", (snapshot9) => {
        //                                     console.log(snapshot9.val());
        //                                     snapshot9.forEach((data) => {
        //                                         // console.log('The ' + data.key + ' Evangelism is ' + data.val().evangelism);
        //                                         R8evan = R8evan + (data.val().evangelism * 1);
        //                                         R8sfu = R8sfu + (data.val().sfu * 1);
        //                                         R8st = R8st + (data.val().st * 1);
        //                                         R8cmd = R8cmd + (data.val().cmd * 1);
        //                                         R8churches = R8churches + (data.val().churches * 1);
        //                                         // console.log(R8evan);
        //                                         // console.log(R8sfu);
        //                                         // console.log(R8st);
        //                                         // console.log(R8cmd);
        //                                         // console.log(R8churches);
        //                                         $scope.evanGoal = goalevan;
        //                                         $scope.evanCurrent = goalevan - (AIAevan + GANevan + SRevan + JFevan + GCMMevan + R8evan);
        //                                         $scope.sfuGoal = goalsfu;
        //                                         $scope.sfuCurrent = goalsfu - (AIAsfu + GANsfu + SRsfu + JFsfu + GCMMsfu + R8sfu);
        //                                         $scope.stGoal = goalst;
        //                                         $scope.stCurrent = goalst - (AIAst + GANst + SRst + JFst + GCMMst + R8st);
        //                                         $scope.cmdGoal = goalcmd;
        //                                         $scope.cmdCurrent = goalcmd - (AIAcmd + GANcmd + SRcmd + JFcmd + GCMMcmd + R8cmd);
        //                                         $scope.churchesGoal = goalchurches;
        //                                         $scope.churchesCurrent = goalchurches - (AIAchurches + GANchurches + SRchurches + JFchurches + GCMMchurches + R8churches);

        //                                         $("#evan_num").html(goalevan - (AIAevan + GANevan + SRevan + JFevan + GCMMevan + R8evan));
        //                                         $("#sfu_num").html(goalsfu - (AIAsfu + GANsfu + SRsfu + JFsfu + GCMMsfu + R8sfu));
        //                                         $("#st_num").html(goalst - (AIAst + GANst + SRst + JFst + GCMMst + R8st));
        //                                         $("#cmd_num").html(goalcmd - (AIAcmd + GANcmd + SRcmd + JFcmd + GCMMcmd + R8cmd));
        //                                         $("#churches_num").html(goalchurches - (AIAchurches + GANchurches + SRchurches + JFchurches + GCMMchurches + R8churches));
        //                                         $("#budget_num").html("₱" + goalbudget);
        //                                     });
        //                                 });
        //                             });
        //                         });
        //                     });
        //                 });
        //             });

        //             // console.log(arrAIA);
        //             // console.log(goalevan - AIAevan);
        //             // console.log(goalsfu - AIAsfu);
        //             // console.log(goalst - AIAst);
        //             // console.log(goalcmd - AIAcmd);
        //             // console.log(goalchurches - AIAchurches);
        //             // $("#evan_num").html(goalevan - evan);
        //             // $("#sfu_num").html(goalsfu - sfu);
        //             // $("#st_num").html(goalst - st);
        //             // $("#cmd_num").html(goalcmd - cmd);
        //             // $("#churches_num").html(goalchurches - churches);
        //             // $("#budget_num").html("₱" + goalbudget);
        //         });
        //     } else if (mYear == "2022") {
        //         console.log("2022-2023");
        //         $("#evan_num").html("---");
        //         $("#sfu_num").html("---");
        //         $("#st_num").html("---");
        //         $("#cmd_num").html("---");
        //         $("#churches_num").html("---");
        //         $("#budget_num").html("---");
        //     } else if (mYear == "2023") {
        //         console.log("2023-2024");
        //         $("#evan_num").html("---");
        //         $("#sfu_num").html("---");
        //         $("#st_num").html("---");
        //         $("#cmd_num").html("---");
        //         $("#churches_num").html("---");
        //         $("#budget_num").html("---");
        //     } else if (mYear == "2024") {
        //         console.log("2024-2025");
        //         $("#evan_num").html("---");
        //         $("#sfu_num").html("---");
        //         $("#st_num").html("---");
        //         $("#cmd_num").html("---");
        //         $("#churches_num").html("---");
        //         $("#budget_num").html("---");
        //     } else if (mYear == "2025") {
        //         console.log("2025-2026");
        //         $("#evan_num").html("---");
        //         $("#sfu_num").html("---");
        //         $("#st_num").html("---");
        //         $("#cmd_num").html("---");
        //         $("#churches_num").html("---");
        //         $("#budget_num").html("---");
        //     }
        // };






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