angular.module('RDash')
    .controller('rqstctrl', ['$scope', '$http', '$stateParams','$window',  rqstctrl]);


function rqstctrl($scope, $http, $stateParams, $window) {
    console.log($stateParams.username);
    var userName = $stateParams.username;
     $http({
        method: 'GET',
        url:'http://52.53.236.5:8000/api/requests',
        headers:{
            'x-access-token': $window.localStorage.getItem("token")
        }
    }).then(function mySuccess(response) {
            $scope.req = response.data;
         $scope.name=userName;
         console.log("request page worked user name is "+userName);
         console.log($scope.req);
        }, function myError(response) {
         $scope.req = response.status;
         console.log(response);
         console.log("hello im in request page!");
     });
    $scope.firstName = "Namitha";
}