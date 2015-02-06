angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('BeersCtrl', [ '$scope', '$http', function($scope, $http) {
  $http.get('/beers/beers.json').success(function(data) {
    $scope.beers = data;
  });
}])
.controller('BeersDetailCtrl', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams) {
  $scope.beerId = $stateParams.beerId;
  $scope.beerName = $stateParams.beerName;
  $http.get('/beers/'+$stateParams.beerId+'.json').success(function(data) {
    $scope.beer = data;
    img = data.img.split('/');
    label = data.label.split('/');
    $scope.imgName = img[img.length-1];
    $scope.labelName = label[label.length-1];
  });
}])
.controller('BeersImgCtrl', ['$scope', '$stateParams', function($scope, $stateParams) {
  $scope.imageName = $stateParams.imgName;
  $scope.fullImagePath = 'beers/img/'+$stateParams.imgName;
}])
;
