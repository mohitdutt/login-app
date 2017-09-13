myApp.controller('loginController', ['$scope', '$location' ,function($scope , $location){

    $scope.submit =function() {
    var username = $scope.username ; 
    var password = $scope.password ;
    
    if($scope.username == "admin" && $scope.password == "admin")
        
        {
            $location.path("/dashboard");
            
        } else {
            alert ("wrong stuff") ;
        }

    };                                      

}]);
