angular.module('RDash')
    .controller('userctrl2', ['$scope', '$http', '$rootScope', '$state','$window', userctrl2]);


function userctrl2($scope, $http, $rootScope,$state, $window) {
    if(!$rootScope.loggedin){
        console.log("Not logged in...");
        $state.go('login');
    }
     $http({
        method: 'GET',
        url:'http://52.53.236.5:8000/api/users',
        headers:{
            'x-access-token': $window.localStorage.getItem("token")
        }
    }).then(function mySuccess(response) {
            $scope.greeting = response.data;
         for(var i=0;i<$scope.greeting.length;i++){
             $scope.greeting[i].isEnabled= true;
             if($scope.greeting[i].isEnabled){
                 $scope.class1="text-success";
                 $scope.class2="fa fa-check";
             }else{
                 $scope.class1="text-danger";
                 $scope.class2="fa fa-warning";
             }
         }
         console.log($scope.greeting);
        }, function myError(response) {
         $scope.greeting = response.status;
         console.log(response);

     });
   
    $scope.logout = function(){
        $window.localStorage.removeItem("username");
        $window.localStorage.removeItem("token");
        $rootScope.loggedin=false;
    }
}