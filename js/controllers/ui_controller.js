app.controller('UiController', ['$scope', function($scope) {
	$scope.title = "User Interface";
	$scope.images = [{
		thumbnail: 'img/ui/YanareKu_Scifi_UI_thumb.jpg',
		image: 'img/ui/YanareKu_Scifi_UI.jpg',
		title: 'Scifi'
	},
	{
		thumbnail: 'img/ui/YanareKu_Lions_Ui_thumb.jpg',
		image: 'img/ui/YanareKu_Lions_Ui.jpg',
		title: 'Fantasy'
	},
	{
		thumbnail: 'img/ui/YanareKu_Ui_thumb.jpg',
		image: 'img/ui/YanareKu_Ui.jpg',
		title: 'Start Page'
	},
	{
		thumbnail: 'img/ui/YanareKu_casual_ui_thumb.jpg',
		image: 'img/ui/YanareKu_casual_ui.jpg',
		title: 'Casual'
	}];
}]);