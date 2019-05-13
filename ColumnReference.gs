var LETTERS = /^[a-zA-Z]+$/;    // All alphabetic letters only

// Main object declaration
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
      // Set the corresponding letter property too
      this._letter = columnToLetter(index);
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
    // Set the corresponding numerical index
    this._index = letterToColumn(letter);
  }
}

function isAlpha(str){
    var regEx = /^[a-zA-Z\-]+$/;
    return str.toString().match(LETTERS);
  }

function tester(){
  var col = new ColumnReference();
  col.SetIndex(2);
  Logger.log('Index: ' + col.GetIndex());
  Logger.log('Letter: ' + col.GetLetter());
  col.SetLetter('Q');
  Logger.log('Index: ' + col.GetIndex());
  Logger.log('Letter: ' + col.GetLetter());
}

function tester2() {
  var t1 = new ColumnReference();
  
  t1.SetIndex(3);
  
  Logger.log(t1.GetIndex());
}


function columnToLetter(column)
{
  var temp, letter = '';
  while (column > 0)
  {
    temp = (column - 1) % 26;
    letter = String.fromCharCode(temp + 65) + letter;
    column = (column - temp - 1) / 26;
  }
  return letter;
}

function letterToColumn(letter)
{
  var column = 0, length = letter.length;
  for (var i = 0; i < length; i++)
  {
    column += (letter.charCodeAt(i) - 64) * Math.pow(26, length - i - 1);
  }
  return column;
}