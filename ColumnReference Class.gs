var LETTERS = /^[a-zA-Z]+$/;    // All alphabetic letters only

var ColumnReference = function(){
  this._index = 0;
  this._letter = '';
  this._sheet = '';
  
  this.GetIndex = function() {
    return this._index;
  }
  
  this.SetIndex = function(index){
    if (index > 0 ) {
      this._index = index;
      Logger.log ('Index is now: ' + this._index);
    }
  }
  
  
  this.GetLetter = function() {
    return this._letter;
  }
  
  // Set
  this.SetLetter = function(letter){
    if(isAlpha(letter)) {    // If only valid column letters
       this._letter = letter;
    }
    Logger.log('Letter is now: ' + this._letter);
  }
}

function isAlpha(str){
    var regEx = /^[a-zA-Z\-]+$/;
    return str.toString().match(LETTERS);
  }

function tester(){
  var col = new ColumnReference();
  col.SetIndex(2);
  col.SetLetter('Q');
}