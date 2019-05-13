// Main object declaration
var Polygon = function(height, width){
  this.height = height;
  this.width = width;

  this.logDimension = function(){
    Logger.log('Height: ' + this.height);
    Logger.log('Width: ' + this.width);
  }
};

function testPoly(){
  var poly1 = new Polygon(1,2);
  var poly2 = new Polygon(3,4);

  /* Logger.log(poly1);
  Logger.log(poly2); */
  poly1.logDimension();
  poly2.logDimension();
}