// const _ = require("underscore");
// console.log(_.range(5));

// ToDo: Convert colors models to show equivalentcy
// var Color = require('color');
// var color = Color("rgb(255, 0, 0)");
// console.log(color.rgb().string());
// console.log(color.hsl().string());

// var moment = require('moment');
// var myDate= new Date();
// var mydate = moment(myDate).format('LL');
// // console.log(myDate);
// console.log(mydate);


function changeBackgroundColor() {   

    // RGB model random selection
    function randomRGB() {
        var myArray = [0, 128, 255];
        return myArray[Math.floor(Math.random() * myArray.length)];
    }
    var rgbColor = "rgb(" + randomRGB() + ", " + randomRGB() + ", " + randomRGB() + ")";


    // HSL model. Random selection
    function randomHue() {
        var hues = [0, 60, 120, 180, 240];
        return hues[Math.floor(Math.random() * hues.length)];
    }
    var saturation = "100%";
    var luminosity = "50%";
    var hslColor = "hsl(" + randomHue() + ", " + saturation + ", " + luminosity + ")";

    var selectedColorModel = 'hsl';
    if (selectedColorModel == 'hsl') {
        var colorValues = hslColor;
    } else {
        var colorValues = rgbColor;
    }

    // document.body.style.background = "red"; // OK
    // document.body.style.backgroundColor = "rgb(255, 0, 0)"; // OK
    document.body.style.backgroundColor = colorValues;
    document.getElementById("colorValues").textContent = colorValues;

}
