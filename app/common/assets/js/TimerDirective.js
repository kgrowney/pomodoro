

angular.module('pomodoro',[])
.directive('timer', function ($interval, $window) {
  return {
    template: '<div><h2>{{timerdata}}</h2><button class="btn btn-success" ng-click="start();">Start</button><button class="btn btn-danger" ng-click="stop();">Stop</button><button class="btn btn-default" ng-click="reset();">Reset</button></div>',
    restrict: 'AE',
    replace:true,
    scope: {
      timerInfo: '=length'
    },
    link: function postLink(scope, element, attrs) {
      alert(scope.timerInfo);
      //element.text(scope.duration.seconds());
      scope.timerdata = scope.timerInfo;
      var millis = function (seconds) {
        return seconds * 1000;
      };

      var oneSecond = millis(1);

      var time = millis(attrs.length);

      var counter = time / oneSecond;

      var interval;

      /*var setTimer = function () {
        var duration = $window.moment.duration(time);

        scope.timerdata = ('0' + duration.minutes()).slice(-2) + ':' + ('0' + duration.seconds()).slice(-2);
        time -= oneSecond;
      };

      setTimer();*/
      scope.start = function () {
        console.log('starting')
        interval = $interval(setTimer, oneSecond, counter);
      };

      scope.stop = function () {
        $interval.cancel(interval);
      };

      scope.reset = function () {
        scope.stop();
        time = millis(attrs.length);
        setTimer();
      };
    }
  };
});