angular.module('example', [
  // Declare here all AngularJS dependencies that are shared by the example module.
  'supersonic' 'common'
]);

]).service('Rafael',function () {
      var paper = new Raphael(element, width, height);
      window.onload = function() {
      var paper = new Raphael(document.getElementById('canvas_container'), 500, 500);
    }
  }
});



}
