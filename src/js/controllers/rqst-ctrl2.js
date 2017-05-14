angular.module('RDash')
    .controller('rqstctrl2', ['$scope', '$http', '$stateParams','$window',  rqstctrl2]);


function rqstctrl2($scope, $http, $stateParams, $window) {
    console.log($stateParams.volname);
    var volName = $stateParams.volname;
     $http({
        method: 'GET',
        url:'http://52.53.236.5:8000/api/requests',
        headers:{
            'x-access-token': $window.localStorage.getItem("token")
        }
    }).then(function mySuccess(response) {
            $scope.req = response.data;
         $scope.name=volName;
         console.log("request page worked vol name is "+volName);
         console.log($scope.req);
        }, function myError(response) {
         $scope.req = response.status;
         console.log(response);
         console.log("hello im in request page!");
     });
   
}