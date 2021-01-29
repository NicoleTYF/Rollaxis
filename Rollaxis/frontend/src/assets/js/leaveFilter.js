

angular.module('app-leave', [])
    .filter('filterData', function (item) {
      return (item.FromDate >= $scope.fromDate && 
              item.ToDate <= $scope.toDate && 
              item.Description.includes($scope.word) && 
              item.Type.trim() === $scope.type && 
              item.Status.trim() === $scope.status );
    }
  )
