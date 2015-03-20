 var paper = new Raphael('paper','100%');
  var cx = 150;
  var cy = 150;

  var circle = paper.circle(0, 0, 110).attr({stroke:'#870C4F', 'stroke-width': 25});
 
  var list = document.getElementById("paper").childNodes[0].childNodes;
  for(var i = 0, l = list.length; i < l; i++){
      list[i].setAttribute("transform", "translate(150,150)");
    }

//   var duration = moment.duration({
//     'seconds': 30,
//         'hour': 2,
//         'minutes': 10
// });


//   
angular.module('pomodoro', [
  // Declare here all AngularJS dependencies that are shared by the example module.
  'supersonic','common'
])

.directive('timer', function ($interval) {
  return {
    /*templateUrl:'/pomodoro/views/timer.html',*/
   template: '<div><img ng-show="starting" src="/assets/icons/home.svg">\
    <div class="clock-timer " ng-bind="timerdata"><h3></h3></div>\
    <button class="btn btn-success" ng-click="start();">Start</button>\
    <button class="btn btn-danger" ng-click="stop();">Stop</button>\
    <button class="btn btn-default" ng-click="reset();">Reset</button>\
    </div>',
    restrict: 'AE',
    scope: {
      timerInfo: '=length',
      time:'=time'
    },
    link: function postLink(scope, element, attrs) {
      //element.text(scope.duration.seconds());
      scope.timerdata = '25:00';
      scope.starting = false;
      var millis = function (seconds) {
        return seconds * 1000;
      };

      var oneSecond = millis(1);

      var time = millis(scope.timerInfo);

      var counter = time / oneSecond;

      var interval;

      var setTimer = function () {
        var duration = window.moment.duration(time);
        scope.timerdata = ('0' + duration.minutes()).slice(-2) + ':' + ('0' + duration.seconds()).slice(-2);
        time -= oneSecond;

      };

      //setTimer();

      scope.start = function () {
        interval = $interval(setTimer, oneSecond, counter);
        scope.starting = true;
      };

      scope.stop = function () {
        scope.starting = false;
        $interval.cancel(interval);
      };

      scope.reset = function () {
        scope.stop()
        time = millis(attrs.length);
        scope.timerdata = '25:00';
        //setTimer();
      };
    }
  };
});