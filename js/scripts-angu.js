var app = angular.module('FM5HD', ['ngRoute']);
var token = ""; 
app
	.config(function($routeProvider){
		$routeProvider
		.when('/',{ 
			templateUrl:'section/home.html',
			controller: 'home'
		})
		.when('/about-me',{ 
			templateUrl:'section/about-me.html'
		})
		.when('/about-me/cv',{ 
			templateUrl:'section/cv.html'
		})
		.when('/portfolio',{ 
			templateUrl:'section/portfolio.html'
		})
		.when('/portfolio/lantalks',{ 
			templateUrl:'section/lantalks.html'
		})
		.when('/portfolio/cursadaUNSAM-2016',{ 
			templateUrl:'section/UNSAM2016.html'
		})
		.when('/youtube',{ 
			templateUrl:'section/youtube.html',
			controller: 'youtube'
		})
		.when('/401',{ 
			templateUrl:'section/401.html' 
		})
		.when('/404',{ 
			templateUrl:'section/404.html' 
		})
		.otherwise({
			templateUrl:'section/404.html' 
		});
	})

	.controller('mainctrl', function ($scope) {
		console.log('Default'); 
		//$scope.agregar = function(){};
	})

	.controller('home', ['$http', '$scope', 'fact_youtube', function ($http, $scope, fact_youtube) {
		console.log('Home'); 
		var d = new Date();
		var year = d.getFullYear();
		var birth = moment("1994-11-05");
		var birthday = moment(year+"-11-05");
		var todaysdate = moment();
		$scope.age = todaysdate.diff(birth, 'years');
		$scope.nextbirthday = birthday.diff(todaysdate, 'days');
		$scope.nextage = todaysdate.diff(birth, 'years')+1;

		fact_youtube.getPlaylists("Fermoto5HD").then(function (response) {
			$scope.$apply(function () {
				$scope.playlists = response.items;
			})
		})

		fact_youtube.getPlaylistVideos('UUBnPjaDK2VBKTtPOeNF-GIQ').then(function (response) {
			$scope.ytuploads = response;
			console.log(response); 
		})
		fact_youtube.getChannelInfo("Fermoto5HD").then(function (response) {
			$scope.ytchannelinfo = response;
			console.log(response); 
		});

		$scope.getPlaylistVideos = function (selection) {
			fact_youtube.getPlaylistVideos(selection.snippets.id).then(function (response) {
				$scope.playlistvideos = response.data.items;
			});
		}
	}])

	.controller('youtube', ['$http', '$scope', 'fact_youtube', function ($http, $scope, fact_youtube) {
		//console.log('YouTube'); 
		//fact_youtube.getPlaylists('UCBnPjaDK2VBKTtPOeNF-GIQ').then(function (response) {
		//  $scope.$apply(function () {
		//    $scope.playlists = response.items;
		//	})
		//});

		fact_youtube.getPlaylists("Fermoto5HD").then(function (response) {
			$scope.$apply(function () {
				$scope.playlists = response.items;
			})
		})

		fact_youtube.getPlaylistVideos('UUBnPjaDK2VBKTtPOeNF-GIQ').then(function (response) {
			$scope.ytuploads = response;
			console.log(response); 
		})
		fact_youtube.getChannelInfo("Fermoto5HD").then(function (response) {
			$scope.ytchannelinfo = response;
			console.log(response); 
		});

		$scope.getPlaylistVideos = function (selection) {
			fact_youtube.getPlaylistVideos(selection.snippets.id).then(function (response) {
				$scope.playlistvideos = response.data.items;
			});
		}
	}])

	.factory('fact_InstagramAPI', ['$http', function($http) {
		return {
			fetchPhotos : function(callback) {
				var tokenURL = 'https://www.instagram.com/oauth/authorize/?client_id=3c38d510e4ce43b08f4157fd0ee381fb&redirect_uri=http://localhost/&response_type=token';
				$http.jsonp(tokenURL).success(function(response) {
					token = response.data;
				});
				var endpoint = 'https://api.instagram.com/v1/users/1631184808/media/recent/?count=1&access_token=1631184808.3c38d51.06928053fc3a4bacb7562a6b2a5e0245&callback=JSON_CALLBACK';
				$http.jsonp(endpoint).success(function(response) {
					callback(response.data);
				}).error(function() {
					callback(false);
				});
			}
		}
	}])
	.factory('fact_portfolioList', ['$http', function($http) {
		return {
			listPortfolio: function(callback) {
				$http.get('data/portfolio.json').success(function(data){
					callback(data);
				});
			}
		};
	}])
	.factory('fact_youtube', ['$http', function ($http) {
		//var channelId = "UCBnPjaDK2VBKTtPOeNF-GIQ"; 
		var key = 'AIzaSyAp2-KIKz8vpd0GgObEMpC2vFdAktw7KB0'; 
		//function getPlaylists(channelId) {
		//	return $.get("https://www.googleapis.com/youtube/v3/channels", { part: 'snippet', channelId: channelId, key: key, categoryId: "GCQmVzdCBvZiBZb3VUdWJl" });
		//}
		//function getPlaylistVideos(id) {
		//	return $http.get('https://www.googleapis.com/youtube/v3/videos', { params: { part: 'snippet', id: id, key: key } });
		//}
		function getChannelInfo(ytchannel) {
			return $.get("https://www.googleapis.com/youtube/v3/channels", {
				part : 'statistics', 
				forUsername : ytchannel,
				key: key
			});
		}
		function getPlaylists(ytchannel) {
			return $.get("https://www.googleapis.com/youtube/v3/channels", {
				part : 'contentDetails', 
				forUsername : ytchannel,
				key: key
			});
		}
		function getPlaylistVideos(id) {
			return $http.get('https://www.googleapis.com/youtube/v3/playlistItems', {
				params: {
					part : 'snippet', 
					maxResults : 10,
					playlistId : id,
					key: key
				} 
			});
		}
		return {getChannelInfo: getChannelInfo, getPlaylists: getPlaylists, getPlaylistVideos: getPlaylistVideos }
	}])

	.controller('Saitama', function($scope, fact_InstagramAPI) {
		$scope.layout = 'list';
		$scope.data = {};
		$scope.pics = [];

		fact_InstagramAPI.fetchPhotos(function(data) {
			if (data !== false) {
				$scope.pics = data;
			}
		});
	})
	.controller('listPortfolio', ['$scope', 'fact_portfolioList', function ($scope, fact_portfolioList) {
		$scope.portfolio = []; 
		fact_portfolioList.listPortfolio(function(data) {
			$scope.portfolio = data;
		});
	}]); 