const colorOutput1 = document.getElementById("colorOutput1").style;
const colorOutput2 = document.getElementById("colorOutput2").style;

var color1 = 0;
var color2=0;

var hexAlphabet = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

$( "#createHex" ).click(createColor)
function createColor(){
  createColor1();
  createColor2();
}
function createColor1() {
      var codeWithoutHash = [];
    for (i = 0; i < 6; i++) {
        var logMe = hexAlphabet[Math.floor(Math.random() * hexAlphabet.length)];
    codeWithoutHash.push(logMe);
    }
    //Generate RGB
    var hexValue = codeWithoutHash.join('');
    var hexValueAsArray = hexValue.split("");

    //Red
    var hexRed1 = hexValueAsArray[0];
    var red1AsRGB = 0;
    for (var i = 0; i < hexAlphabet.length; i++) {
      if (hexAlphabet[i] === hexRed1) {
        var red1AsRGB = parseInt([i]);
      }
    }
    var hexRed2 = hexValueAsArray[1];
    var red2AsRGB = 0;
    for (var i = 0; i < hexAlphabet.length; i++) {
      if (hexAlphabet[i] === hexRed2) {
        var red2AsRGB = parseInt([i]);
      }
    }
    var red = red1AsRGB * 16 + red2AsRGB;

    //Green
    var hexGreen1 = hexValueAsArray[2];
    var green1AsRGB = 0;
    for (var i = 0; i < hexAlphabet.length; i++) {
      if (hexAlphabet[i] === hexGreen1) {
        var green1AsRGB = parseInt([i]);
      }
    }
    var hexGreen2 = hexValueAsArray[3];
    var green2AsRGB = 0;
    for (var i = 0; i < hexAlphabet.length; i++) {
      if (hexAlphabet[i] === hexGreen2) {
        var green2AsRGB = parseInt([i]);
      }
    }
    var green = green1AsRGB * 16 + green2AsRGB;
    //Blue
    var hexBlue1 = hexValueAsArray[4];
    var blue1AsRGB = 0;
    for (var i = 0; i < hexAlphabet.length; i++) {
      if (hexAlphabet[i] === hexBlue1) {
        var blue1AsRGB = parseInt([i]);
      }
    }
    var hexBlue2 = hexValueAsArray[5];
    var blue2AsRGB = 0;
    for (var i = 0; i < hexAlphabet.length; i++) {
      if (hexAlphabet[i] === hexBlue2) {
        var blue2AsRGB = parseInt([i]);
      }
    }
    var blue = blue1AsRGB * 16 + blue2AsRGB;
    var rgb = 'rgb('+red+','+green+','+blue + ')';
    // $( "#rgbOutput" ).html(rgb);

    //Output Color
    var output ='#'+codeWithoutHash.join('');
    $( "#output" ).html(output +'<br>'+ rgb);
    colorOutput1.backgroundColor = output;
    var color1 = output; 
};
function createColor2() {
      var codeWithoutHash = [];
    for (i = 0; i < 6; i++) {
        var logMe = hexAlphabet[Math.floor(Math.random() * hexAlphabet.length)];
    codeWithoutHash.push(logMe);
    }
    //Generate RGB
    var hexValue = codeWithoutHash.join('');
    var hexValueAsArray = hexValue.split("");

    //Red
    var hexRed1 = hexValueAsArray[0];
    var red1AsRGB = 0;
    for (var i = 0; i < hexAlphabet.length; i++) {
      if (hexAlphabet[i] === hexRed1) {
        var red1AsRGB = parseInt([i]);
      }
    }
    var hexRed2 = hexValueAsArray[1];
    var red2AsRGB = 0;
    for (var i = 0; i < hexAlphabet.length; i++) {
      if (hexAlphabet[i] === hexRed2) {
        var red2AsRGB = parseInt([i]);
      }
    }
    var red = red1AsRGB * 16 + red2AsRGB;

    //Green
    var hexGreen1 = hexValueAsArray[2];
    var green1AsRGB = 0;
    for (var i = 0; i < hexAlphabet.length; i++) {
      if (hexAlphabet[i] === hexGreen1) {
        var green1AsRGB = parseInt([i]);
      }
    }
    var hexGreen2 = hexValueAsArray[3];
    var green2AsRGB = 0;
    for (var i = 0; i < hexAlphabet.length; i++) {
      if (hexAlphabet[i] === hexGreen2) {
        var green2AsRGB = parseInt([i]);
      }
    }
    var green = green1AsRGB * 16 + green2AsRGB;
    //Blue
    var hexBlue1 = hexValueAsArray[4];
    var blue1AsRGB = 0;
    for (var i = 0; i < hexAlphabet.length; i++) {
      if (hexAlphabet[i] === hexBlue1) {
        var blue1AsRGB = parseInt([i]);
      }
    }
    var hexBlue2 = hexValueAsArray[5];
    var blue2AsRGB = 0;
    for (var i = 0; i < hexAlphabet.length; i++) {
      if (hexAlphabet[i] === hexBlue2) {
        var blue2AsRGB = parseInt([i]);
      }
    }
    var blue = blue1AsRGB * 16 + blue2AsRGB;
    var rgb = 'rgb('+red+','+green+','+blue + ')';
    // $( "#rgbOutput" ).html(rgb);

    //Output Color
    var output ='#'+codeWithoutHash.join('');
    $( "#output2" ).html(output +'<br>'+ rgb);
    colorOutput2.backgroundColor = output;
    var color2 = output;
};