angular.module('RDash')
    .controller('eachuserctrl', ['$scope', '$http', '$stateParams','$window',  eachuserctrl]);


function eachuserctrl($scope, $http, $stateParams, $window) {
    console.log("Entered each userctrl"+$stateParams.username);
    var userName = $stateParams.username;
    console.log("name in eachuser1 "+userName);
     $http({
        method: 'GET',
        url:'http://52.53.236.5:8000/api/users/'+userName,
        headers:{
            'x-access-token': $window.localStorage.getItem("token")
        }
    }).then(function mySuccess(response) {
            $scope.answer = response.data;
         console.log("input received");
         console.log($scope.answer);
        }, function myError(response) {
         $scope.answer = response.status;
         console.log(response);
         console.log("hello !");
     });
    $scope.firstName = "Namitha";
}