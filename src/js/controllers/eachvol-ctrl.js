angular.module('RDash')
    .controller('eachvolctrl', ['$scope', '$http', '$stateParams','$window',  eachvolctrl]);


function eachvolctrl($scope, $http, $stateParams, $window) {
    console.log("Entered!");
   
    var volName = $stateParams.volname;
    
    console.log("name in eachuser2 "+volName);
     $http({
        method: 'GET',
        url:'http://52.53.236.5:8000/api/users/'+volName,
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
   
}