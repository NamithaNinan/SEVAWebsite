angular.module('RDash')
    .controller('loginctrl', ['$scope','$rootScope', '$http', '$window', '$state', loginctrl]);


function loginctrl($scope, $rootScope, $http, $window, $state) {
//    $scope.authenticate = function (){
        
//    var url = 'http://52.53.236.5:8000/api/authenticate';
//    var parameter = JSON.stringify({userName:"karan", password:"karan123"});
//    $http.post(url, parameter)
//    .success(function(data, status, headers, config) {
//        // this callback will be called asynchronously
//        // when the response is available
//        console.log(data);
//      })
//      .error(function(data, status, headers, config) {
//        console.log(data);
//        // called asynchronously if an error occurs
//        // or server returns response with an error status.
//      });
//    }
    $scope.authenticate = function (){
        var parameter = JSON.stringify({userName:$scope.username, password:$scope.password});
        $http({
        method: 'POST',
        url:'http://52.53.236.5:8000/api/authenticate',
        data: parameter
    }).then(function mySuccess(response) {
            $scope.result = response.data;
            console.log($scope.result);
            if(response.data.message=="Success: User authenticated !") {
                console.log("go to");
                $window.localStorage.setItem("username",$scope.username);
                $window.localStorage.setItem("token", response.data.token);
                $rootScope.loggedin=true;
                 $state.go('index');
            }
        }, function myError(response) {
         $scope.result = response.status;
         console.log(response);
         console.log("hello !");
         $scope.errorMessage = response.data.message;
     });
    }
}