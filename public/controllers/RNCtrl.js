'use strict';

angular.module('newApp').controller('RNCtrl', function ($scope) {
    $(document).ready(function () {
        var username = localStorage.getItem("username");

        var register = localStorage.getItem("register");

        var userVerify = firebase.auth().currentUser;

        var refYear = " ";
        var refMinistryYear = " ";
        let currentDate = new Date();
        let cDay = currentDate.getDate();
        let cMonth = currentDate.getMonth() + 1;
        let cYear = currentDate.getFullYear();

        var quarters = " ";
        var quarterYear = " ";

        if (cMonth == 7 || cMonth == 8 || cMonth == 9) {
            quarters = "1 quarter";
        } else if (cMonth == 10 || cMonth == 11 || cMonth == 12) {
            quarters = "2 quarters";
        } else if (cMonth == 1 || cMonth == 2 || cMonth == 3) {
            quarters = "3 quarters";
        } else if (cMonth == 4 || cMonth == 5 || cMonth == 6) {
            quarters = "4 quarters";
        }
        $scope.deadline;


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
                $scope.deadline = "2022";
                refYear = "2021";
                quarterYear = "2021-2022";
                refMinistryYear = "2021to2022";
                var year = mYear + "to" + (1 + (mYear * 1));
                console.log("2021-2022");
                var ref2 = firebase.database().ref(year);
                // var ref2 = firebase.database().ref("r8" + mYear);
                // console.log(year);
                var refaia = firebase.database().ref("aia" + refYear);
                var refgan = firebase.database().ref("gan" + refYear);
                var refsr = firebase.database().ref("sr" + refYear);
                var refjf = firebase.database().ref("jf" + refYear);
                var refgcmm = firebase.database().ref("gcmm" + refYear);
                var refr8 = firebase.database().ref("r8" + refYear);

                var refXY = firebase.database().ref("XY" + refMinistryYear);
                var AIAevan = 0,
                    AIAsfu = 0,
                    AIAst = 0,
                    AIAcmd = 0,
                    AIAchurches = 0;
                var GANevan = 0,
                    GANsfu = 0,
                    GANst = 0,
                    GANcmd = 0,
                    GANchurches = 0;
                var SRevan = 0,
                    SRsfu = 0,
                    SRst = 0,
                    SRcmd = 0,
                    SRchurches = 0;
                var JFevan = 0,
                    JFsfu = 0,
                    JFst = 0,
                    JFcmd = 0,
                    JFchurches = 0;
                var GCMMevan = 0,
                    GCMMsfu = 0,
                    GCMMst = 0,
                    GCMMcmd = 0,
                    GCMMchurches = 0;
                var R8evan = 0,
                    R8sfu = 0,
                    R8st = 0,
                    R8cmd = 0,
                    R8churches = 0;
                var TOTALevan = 0,
                    TOTALsfu = 0,
                    TOTALst = 0,
                    TOTALcmd = 0,
                    TOTALchurches = 0;
                var Xevangelism = 0,
                    Xsfu = 0,
                    Xst = 0,
                    Xcmd = 0,
                    Xchurches = 0,
                    Yevangelism = 0,
                    Ysfu = 0,
                    Yst = 0,
                    Ycmd = 0,
                    Ychurches = 0;
                var goals = [];

                refaia.orderByChild("year").equalTo(2021).on("value", (snapshot) => {
                    // do some stuff once
                    // console.log(snapshot.val());
                    snapshot.forEach((data) => {
                        AIAevan = AIAevan + (data.val().evangelism * 1);
                        AIAsfu = AIAsfu + (data.val().sfu * 1);
                        AIAst = AIAst + (data.val().st * 1);
                        AIAcmd = AIAcmd + (data.val().cmd * 1);
                        AIAchurches = AIAchurches + (data.val().churches * 1);
                        // console.log(evan);
                    });
                    refgan.orderByChild("year").equalTo(2021).on("value", (snapshot) => {
                        // do some stuff once
                        // console.log(snapshot.val());
                        snapshot.forEach((data) => {
                            GANevan = GANevan + (data.val().evangelism * 1);
                            GANsfu = GANsfu + (data.val().sfu * 1);
                            GANst = GANst + (data.val().st * 1);
                            GANcmd = GANcmd + (data.val().cmd * 1);
                            GANchurches = GANchurches + (data.val().churches * 1);
                            // console.log(evan);
                        });
                        refsr.orderByChild("year").equalTo(2021).on("value", (snapshot) => {
                            // do some stuff once
                            // console.log(snapshot.val());
                            snapshot.forEach((data) => {
                                SRevan = SRevan + (data.val().evangelism * 1);
                                SRsfu = SRsfu + (data.val().sfu * 1);
                                SRst = SRst + (data.val().st * 1);
                                SRcmd = SRcmd + (data.val().cmd * 1);
                                SRchurches = SRchurches + (data.val().churches * 1);
                                // console.log(evan);
                            });
                            refjf.orderByChild("year").equalTo(2021).on("value", (snapshot) => {
                                // do some stuff once
                                // console.log(snapshot.val());
                                snapshot.forEach((data) => {
                                    JFevan = JFevan + (data.val().evangelism * 1);
                                    JFsfu = JFsfu + (data.val().sfu * 1);
                                    JFst = JFst + (data.val().st * 1);
                                    JFcmd = JFcmd + (data.val().cmd * 1);
                                    JFchurches = JFchurches + (data.val().churches * 1);
                                    // console.log(evan);
                                });
                                refgcmm.orderByChild("year").equalTo(2021).on("value", (snapshot) => {
                                    // do some stuff once
                                    // console.log(snapshot.val());
                                    snapshot.forEach((data) => {
                                        GCMMevan = GCMMevan + (data.val().evangelism * 1);
                                        GCMMsfu = GCMMsfu + (data.val().sfu * 1);
                                        GCMMst = GCMMst + (data.val().st * 1);
                                        GCMMcmd = GCMMcmd + (data.val().cmd * 1);
                                        GCMMchurches = GCMMchurches + (data.val().churches * 1);
                                        // console.log(evan);
                                    });
                                    refr8.orderByChild("year").equalTo(2021).on("value", (snapshot) => {
                                        // do some stuff once
                                        // console.log(snapshot.val());
                                        snapshot.forEach((data) => {
                                            R8evan = R8evan + (data.val().evangelism * 1);
                                            R8sfu = R8sfu + (data.val().sfu * 1);
                                            R8st = R8st + (data.val().st * 1);
                                            R8cmd = R8cmd + (data.val().cmd * 1);
                                            R8churches = R8churches + (data.val().churches * 1);
                                            // console.log(evan);
                                        });

                                        TOTALevan = AIAevan + GANevan + SRevan + JFevan + GCMMevan + R8evan;
                                        TOTALsfu = AIAsfu + GANsfu + SRsfu + JFsfu + GCMMsfu + R8sfu;
                                        TOTALst = AIAst + GANst + SRst + JFst + GCMMst + R8st;
                                        TOTALcmd = AIAcmd + GANcmd + SRcmd + JFcmd + GCMMcmd + R8cmd;
                                        TOTALchurches = AIAchurches + GANchurches + SRchurches + JFchurches + GCMMchurches + R8churches;

                                    });

                                });

                            });

                        });

                    });

                });

                refXY.on("child_added", function (snapshot) {
                    console.log(snapshot.val());
                    Xevangelism = snapshot.val().Xevangelism;
                    Xsfu = snapshot.val().Xsfu;
                    Xst = snapshot.val().Xst;
                    Xcmd = snapshot.val().Xcmd;
                    Xchurches = snapshot.val().Xchurches;

                    Yevangelism = snapshot.val().Yevangelism;
                    Ysfu = snapshot.val().Ysfu;
                    Yst = snapshot.val().Yst;
                    Ycmd = snapshot.val().Ycmd;
                    Ychurches = snapshot.val().Ychurches;
                });

                setTimeout(() => {
                    // console.log(aiagoals);
                    document.getElementById("Xevangelism").innerHTML = Xevangelism;
                    document.getElementById("Yevangelism").innerHTML = Yevangelism;
                    document.getElementById("currentevangelism").innerHTML = TOTALevan;

                    document.getElementById("Xsfu").innerHTML = Xsfu;
                    document.getElementById("Ysfu").innerHTML = Ysfu;
                    document.getElementById("currentsfu").innerHTML = TOTALsfu;

                    document.getElementById("Xst").innerHTML = Xst;
                    document.getElementById("Yst").innerHTML = Yst;
                    document.getElementById("currentst").innerHTML = TOTALst;

                    document.getElementById("Xcmd").innerHTML = Xcmd;
                    document.getElementById("Ycmd").innerHTML = Ycmd;
                    document.getElementById("currentcmd").innerHTML = TOTALcmd;

                    document.getElementById("Xchurches").innerHTML = Xchurches;
                    document.getElementById("Ychurches").innerHTML = Ychurches;
                    document.getElementById("currentchurches").innerHTML = TOTALchurches;

                    document.getElementById("quarters").innerHTML = quarters + " (" + quarterYear + ")";
                }, 1000);

            } else if (mYear == "2022") {
                $scope.deadline = "2023";
                refYear = "2022";
                refMinistryYear = "2022to2023";
                quarterYear = "2022-2023";

                // console.log("2022-2023");
                document.getElementById("Xevangelism").innerHTML = "---";
                document.getElementById("Yevangelism").innerHTML = "---";
                document.getElementById("currentevangelism").innerHTML = "---";

                document.getElementById("Xsfu").innerHTML = "---";
                document.getElementById("Ysfu").innerHTML = "---";
                document.getElementById("currentsfu").innerHTML = "---";

                document.getElementById("Xst").innerHTML = "---";
                document.getElementById("Yst").innerHTML = "---";
                document.getElementById("currentst").innerHTML = "---";

                document.getElementById("Xcmd").innerHTML = "---";
                document.getElementById("Ycmd").innerHTML = "---";
                document.getElementById("currentcmd").innerHTML = "---";

                document.getElementById("Xchurches").innerHTML = "---";
                document.getElementById("Ychurches").innerHTML = "---";
                document.getElementById("currentchurches").innerHTML = "---";

                document.getElementById("quarters").innerHTML = "---";
            } else if (mYear == "2023") {
                // console.log("2023-2024");
                $scope.deadline = "2024";
                refYear = "2023";
                refMinistryYear = "2023to2024";
                quarterYear = "2023-2024";

                document.getElementById("Xevangelism").innerHTML = "---";
                document.getElementById("Yevangelism").innerHTML = "---";
                document.getElementById("currentevangelism").innerHTML = "---";

                document.getElementById("Xsfu").innerHTML = "---";
                document.getElementById("Ysfu").innerHTML = "---";
                document.getElementById("currentsfu").innerHTML = "---";

                document.getElementById("Xst").innerHTML = "---";
                document.getElementById("Yst").innerHTML = "---";
                document.getElementById("currentst").innerHTML = "---";

                document.getElementById("Xcmd").innerHTML = "---";
                document.getElementById("Ycmd").innerHTML = "---";
                document.getElementById("currentcmd").innerHTML = "---";

                document.getElementById("Xchurches").innerHTML = "---";
                document.getElementById("Ychurches").innerHTML = "---";
                document.getElementById("currentchurches").innerHTML = "---";

                document.getElementById("quarters").innerHTML = "---";
            } else if (mYear == "2024") {
                // console.log("2024-2025");
                $scope.deadline = "2025";
                refYear = "2024";
                refMinistryYear = "2024to2025";
                quarterYear = "2024-2025";

                document.getElementById("Xevangelism").innerHTML = "---";
                document.getElementById("Yevangelism").innerHTML = "---";
                document.getElementById("currentevangelism").innerHTML = "---";

                document.getElementById("Xsfu").innerHTML = "---";
                document.getElementById("Ysfu").innerHTML = "---";
                document.getElementById("currentsfu").innerHTML = "---";

                document.getElementById("Xst").innerHTML = "---";
                document.getElementById("Yst").innerHTML = "---";
                document.getElementById("currentst").innerHTML = "---";

                document.getElementById("Xcmd").innerHTML = "---";
                document.getElementById("Ycmd").innerHTML = "---";
                document.getElementById("currentcmd").innerHTML = "---";

                document.getElementById("Xchurches").innerHTML = "---";
                document.getElementById("Ychurches").innerHTML = "---";
                document.getElementById("currentchurches").innerHTML = "---";

                document.getElementById("quarters").innerHTML = "---";
            } else if (mYear == "2025") {
                // console.log("2025-2026");
                $scope.deadline = "2026";
                refYear = "2025";
                refMinistryYear = "2025to2026";
                quarterYear = "2025-2026";

                document.getElementById("Xevangelism").innerHTML = "---";
                document.getElementById("Yevangelism").innerHTML = "---";
                document.getElementById("currentevangelism").innerHTML = "---";

                document.getElementById("Xsfu").innerHTML = "---";
                document.getElementById("Ysfu").innerHTML = "---";
                document.getElementById("currentsfu").innerHTML = "---";

                document.getElementById("Xst").innerHTML = "---";
                document.getElementById("Yst").innerHTML = "---";
                document.getElementById("currentst").innerHTML = "---";

                document.getElementById("Xcmd").innerHTML = "---";
                document.getElementById("Ycmd").innerHTML = "---";
                document.getElementById("currentcmd").innerHTML = "---";

                document.getElementById("Xchurches").innerHTML = "---";
                document.getElementById("Ychurches").innerHTML = "---";
                document.getElementById("currentchurches").innerHTML = "---";

                document.getElementById("quarters").innerHTML = "---";
            }
        };

        $scope.print = function () {
            console.log(refYear);
            var refaia = firebase.database().ref("aia" + refYear);
            var refgan = firebase.database().ref("gan" + refYear);
            var refsr = firebase.database().ref("sr" + refYear);
            var refjf = firebase.database().ref("jf" + refYear);
            var refgcmm = firebase.database().ref("gcmm" + refYear);
            var refr8 = firebase.database().ref("r8" + refYear);

            var refXY = firebase.database().ref("XY" + refMinistryYear);

            var AIAevan = 0,
                AIAsfu = 0,
                AIAst = 0,
                AIAcmd = 0,
                AIAchurches = 0;
            var GANevan = 0,
                GANsfu = 0,
                GANst = 0,
                GANcmd = 0,
                GANchurches = 0;
            var SRevan = 0,
                SRsfu = 0,
                SRst = 0,
                SRcmd = 0,
                SRchurches = 0;
            var JFevan = 0,
                JFsfu = 0,
                JFst = 0,
                JFcmd = 0,
                JFchurches = 0;
            var GCMMevan = 0,
                GCMMsfu = 0,
                GCMMst = 0,
                GCMMcmd = 0,
                GCMMchurches = 0;
            var R8evan = 0,
                R8sfu = 0,
                R8st = 0,
                R8cmd = 0,
                R8churches = 0;
            var TOTALevan = 0,
                TOTALsfu = 0,
                TOTALst = 0,
                TOTALcmd = 0,
                TOTALchurches = 0;
            var Xevangelism = 0,
                Xsfu = 0,
                Xst = 0,
                Xcmd = 0,
                Xchurches = 0,
                Yevangelism = 0,
                Ysfu = 0,
                Yst = 0,
                Ycmd = 0,
                Ychurches = 0;
            var goals = [];

            refaia.on("value", (snapshot) => {
                // do some stuff once
                // console.log(snapshot.val());
                snapshot.forEach((data) => {
                    AIAevan = AIAevan + (data.val().evangelism * 1);
                    AIAsfu = AIAsfu + (data.val().sfu * 1);
                    AIAst = AIAst + (data.val().st * 1);
                    AIAcmd = AIAcmd + (data.val().cmd * 1);
                    AIAchurches = AIAchurches + (data.val().churches * 1);
                    // console.log(evan);
                });
                refgan.on("value", (snapshot) => {
                    // do some stuff once
                    // console.log(snapshot.val());
                    snapshot.forEach((data) => {
                        GANevan = GANevan + (data.val().evangelism * 1);
                        GANsfu = GANsfu + (data.val().sfu * 1);
                        GANst = GANst + (data.val().st * 1);
                        GANcmd = GANcmd + (data.val().cmd * 1);
                        GANchurches = GANchurches + (data.val().churches * 1);
                        // console.log(evan);
                    });
                    refsr.on("value", (snapshot) => {
                        // do some stuff once
                        // console.log(snapshot.val());
                        snapshot.forEach((data) => {
                            SRevan = SRevan + (data.val().evangelism * 1);
                            SRsfu = SRsfu + (data.val().sfu * 1);
                            SRst = SRst + (data.val().st * 1);
                            SRcmd = SRcmd + (data.val().cmd * 1);
                            SRchurches = SRchurches + (data.val().churches * 1);
                            // console.log(evan);
                        });
                        refjf.on("value", (snapshot) => {
                            // do some stuff once
                            // console.log(snapshot.val());
                            snapshot.forEach((data) => {
                                JFevan = JFevan + (data.val().evangelism * 1);
                                JFsfu = JFsfu + (data.val().sfu * 1);
                                JFst = JFst + (data.val().st * 1);
                                JFcmd = JFcmd + (data.val().cmd * 1);
                                JFchurches = JFchurches + (data.val().churches * 1);
                                // console.log(evan);
                            });
                            refgcmm.on("value", (snapshot) => {
                                // do some stuff once
                                // console.log(snapshot.val());
                                snapshot.forEach((data) => {
                                    GCMMevan = GCMMevan + (data.val().evangelism * 1);
                                    GCMMsfu = GCMMsfu + (data.val().sfu * 1);
                                    GCMMst = GCMMst + (data.val().st * 1);
                                    GCMMcmd = GCMMcmd + (data.val().cmd * 1);
                                    GCMMchurches = GCMMchurches + (data.val().churches * 1);
                                    // console.log(evan);
                                });
                                refr8.on("value", (snapshot) => {
                                    // do some stuff once
                                    // console.log(snapshot.val());
                                    snapshot.forEach((data) => {
                                        R8evan = R8evan + (data.val().evangelism * 1);
                                        R8sfu = R8sfu + (data.val().sfu * 1);
                                        R8st = R8st + (data.val().st * 1);
                                        R8cmd = R8cmd + (data.val().cmd * 1);
                                        R8churches = R8churches + (data.val().churches * 1);
                                        // console.log(evan);
                                    });

                                    TOTALevan = AIAevan + GANevan + SRevan + JFevan + GCMMevan + R8evan;
                                    TOTALsfu = AIAsfu + GANsfu + SRsfu + JFsfu + GCMMsfu + R8sfu;
                                    TOTALst = AIAst + GANst + SRst + JFst + GCMMst + R8st;
                                    TOTALcmd = AIAcmd + GANcmd + SRcmd + JFcmd + GCMMcmd + R8cmd;
                                    TOTALchurches = AIAchurches + GANchurches + SRchurches + JFchurches + GCMMchurches + R8churches;

                                });

                            });

                        });

                    });

                });

            });

            // refaia.on("value", function (snapshot) {
            //     // console.log(snapshot.val());


            // });

            refXY.on("child_added", function (snapshot) {
                console.log(snapshot.val());
                Xevangelism = snapshot.val().Xevangelism;
                Xsfu = snapshot.val().Xsfu;
                Xst = snapshot.val().Xst;
                Xcmd = snapshot.val().Xcmd;
                Xchurches = snapshot.val().Xchurches;

                Yevangelism = snapshot.val().Yevangelism;
                Ysfu = snapshot.val().Ysfu;
                Yst = snapshot.val().Yst;
                Ycmd = snapshot.val().Ycmd;
                Ychurches = snapshot.val().Ychurches;
            });

            setTimeout(function () {
                // console.log(TOTALevan);
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
                            stack: [{
                                    text: "2021-2022 Tactical Plan",
                                    bold: true
                                },
                                {
                                    text: "For National Reporting",
                                    bold: true
                                },
                            ],
                            style: "header",
                        },
                        {
                            style: "table",
                            table: {
                                widths: ["*", "*", "*", "*"],
                                headers: 2,
                                body: [
                                    [{
                                            text: "Team's LEAD Measures by June " + $scope.deadline + " (preferably 3-4 only)",
                                            alignment: "center",
                                            bold: true
                                        },
                                        {
                                            text: "From X",
                                            alignment: "center",
                                            bold: true,
                                        },
                                        {
                                            text: "To Y",
                                            alignment: "center",
                                            bold: true,
                                        },
                                        {
                                            text: "Current X (to be updated quarterly for accountability)",
                                            alignment: "center",
                                            bold: true
                                        },
                                    ],
                                    [{
                                            text: "Evangelism",
                                            alignment: "left",
                                        },
                                        {
                                            text: Xevangelism,
                                            alignment: "center",
                                        },
                                        {
                                            text: Yevangelism,
                                            alignment: "center",
                                        },
                                        {
                                            text: TOTALevan,
                                            alignment: "center",
                                        }
                                    ],
                                    [{
                                            text: "Started FU",
                                            alignment: "left",
                                        },
                                        {
                                            text: Xsfu,
                                            alignment: "center",
                                        },
                                        {
                                            text: Ysfu,
                                            alignment: "center",
                                        },
                                        {
                                            text: TOTALsfu,
                                            alignment: "center",
                                        }
                                    ],
                                    [{
                                            text: "Started Training",
                                            alignment: "left",
                                        },
                                        {
                                            text: Xst,
                                            alignment: "center",
                                        },
                                        {
                                            text: Yst,
                                            alignment: "center",
                                        },
                                        {
                                            text: TOTALst,
                                            alignment: "center",
                                        }
                                    ],
                                    [{
                                            text: "LAG MEASURES",
                                            alignment: "center",
                                            bold: true
                                        },
                                        {},
                                        {},
                                        {

                                        }
                                    ],
                                    [{
                                            text: "CMDs",
                                            alignment: "left",
                                        },
                                        {
                                            text: Xcmd,
                                            alignment: "center",
                                        },
                                        {
                                            text: Ycmd,
                                            alignment: "center",
                                        },
                                        {
                                            text: TOTALcmd,
                                            alignment: "center",
                                        }
                                    ],
                                    [{
                                            text: "Churches",
                                            alignment: "left",
                                        },
                                        {
                                            text: Xchurches,
                                            alignment: "center",
                                        },
                                        {
                                            text: Ychurches,
                                            alignment: "center",
                                        },
                                        {
                                            text: TOTALchurches,
                                            alignment: "center",
                                        }
                                    ],
                                    [{},
                                        {},
                                        {},
                                        {
                                            text: quarters + " (" + quarterYear + ")",
                                            alignment: "center",
                                            bold: true
                                        }
                                    ]
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
                $scope.filename = `National Report`;
                $("#RNViewer").modal("show");


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
            }, 1000);

        };

        $scope.closeModal = function () {
            $("#RNViewer").modal("hide");
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