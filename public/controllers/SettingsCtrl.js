'use strict';


angular.module('newApp').controller('SettingsCtrl', function ($firebaseArray, $scope) {

    // console.log("Settings");

    // Get the modal
    var modal = document.getElementById('myModal');
    var modal2 = document.getElementById('myModal2');

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var accept = document.getElementById("accept");

    $("#editBtn").click(function () {
        modal.style.display = "block";
    });

    var ref = firebase.database().ref('datasets/users');

    var username, email, role, id;

    $scope.clickedUser = {};

    $scope.data = $firebaseArray(ref);
    ref.once('value', function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
            // var childKey = childSnapshot.key();
            var childData = childSnapshot.val();
            // $scope.data = childSnapshot.val();
            // console.log($scope.data);

            username = childSnapshot.child('username').val();
            // fullname = childSnapshot.child('fullname').val();
            // address = childSnapshot.child('address').val();
            // country = childSnapshot.child('country').val();
            // number = childSnapshot.child('number').val();
            email = childSnapshot.child('email').val();
            role = childSnapshot.child('role').val();

        })
    });

    $scope.selectUser = function (users) {
        // console.log(users);
        $scope.clickedUser = users;
        id = users;
        modal.style.display = "block";
    };

    $scope.selectUser2 = function (users) {
        // console.log(users);
        $scope.clickedUser = users;
        id = users;
        modal2.style.display = "block";
    };

    $scope.updateUser = function () {
        var ref2 = firebase.database().ref("datasets/users/" + id.$id);
        ref2.update({
            username: $scope.clickedUser.username,
            email: $scope.clickedUser.email,
            // country: $scope.clickedUser.country,
            // gender: $scope.clickedUser.gender,
            role: $scope.clickedUser.role
        })

        modal.style.display = "none";

    };

    $scope.deleteUser = function () {
        var ref = firebase.database().ref("datasets/users/" + id.$id);
        ref.remove();
        modal2.style.display = "none";
    };

    $scope.close = function () {
        modal.style.display = "none";
    };

    $scope.close2 = function () {
        modal2.style.display = "none";
    };

    $scope.saveGoal = function () {
        var current = firebase.auth().currentUser;
        var evangelism = $("#evangelism").val();
        var sfu = $("#sfu").val();
        var st = $("#st").val();
        var cmd = $("#cmd").val();
        var churches = $("#churches").val();
        var budget = $("#budget").val();

        let currentDate = new Date();
        let cDay = currentDate.getDate();
        let cMonth = currentDate.getMonth() + 1;
        let cYear = currentDate.getFullYear();
        var ministryYear = $("#dropdownYear").val();
        var team = $("#team").val();
        var mYear = ministryYear + "to" + (1 + (ministryYear * 1));
        var ref2 = firebase.database().ref("/" + mYear);
        // console.log(mYear);


        // console.log("<b>" + cDay + "/" + cMonth + "/" + cYear + "</b>");

        if (evangelism && sfu && st && cmd && churches) {
            ref2.push({
                    team: $("#team").val(),
                    evangelism: $("#evangelism").val(),
                    sfu: $("#sfu").val(),
                    st: $("#st").val(),
                    cmd: $("#cmd").val(),
                    churches: $("#churches").val(),
                    budget: $("#budget").val()
                    // date: cMonth + "/" + cDay + "/" + cYear,

                })
                .then(function (ref) {
                    // var ref3 = firebase.database().ref("aia");
                    // ref2.update({
                    //     goalKey: ref.key
                    // })

                    console.log('Added to database');
                    $("#evangelism").val("");
                    $("#sfu").val("");
                    $("#st").val("");
                    $("#cmd").val("");
                    $("#churches").val("");
                    $("#budget").val("");
                    // document.getElementById("success").innerHTML = "Data have been saved!";

                    // setTimeout(() => {
                    //     document.getElementById("success").innerHTML = "";
                    //     window.location.href = "#"
                    //     window.location.href = "#AthletesInAction"
                    // }, 3000);

                    // $("#buyerLog").show();
                    // $("#buyerInfo").hide();
                    // $("#addBuyer").hide();
                });
        } else {
            // document.getElementById("messages").innerHTML = "You need to fill up Atleast the evangelism field";

            // setTimeout(() => {
            //     // document.getElementById("messages").innerHTML = "";

            // }, 5000);
        }




    };


    // console.log(email);

    // $('#dropdownYear').each(function () {

    //     var year = (new Date()).getFullYear();
    //     var current = year;
    //     year -= 0;
    //     for (var i = 0; i < 5; i++) {
    //         if ((year + i) == current)
    //             $(this).append('<option selected value="' + (year + i) + '">' + (year + i) + '</option>');
    //         else
    //             $(this).append('<option value="' + (year + i) + '">' + (year + i) + '</option>');
    //     }

    // })





});