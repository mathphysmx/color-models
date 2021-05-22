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

    // Python range() function equivalent
    // https://stackoverflow.com/a/44957114
    const range = (start, stop, step = 1) =>
    Array(Math.ceil((stop - start) / step)).fill(start).map((x, y) => x + y * step)

    function randomPick(array) {
        return array[Math.floor(Math.random() * array.length)];
    }
    
    var selectedColorModel = 'hsl';
    if (selectedColorModel == 'hsl') {
        let hueStep = 60;
        let saturationPercentStep = 25;
        // let luminosityPercentStep = 25;
        let hue = randomPick(range(0, 360, hueStep));
        let saturation = randomPick(range(25, 100+1, saturationPercentStep)) + "%";
        let luminosity = "50%";
        var colorValues = "hsl(" + hue + ", " + saturation + ", " + luminosity + ")";    
    } else { // RGB model random selection
        let step = 128;
        let red = randomPick(range(0, 255, step));
        let green = randomPick(range(0, 255, step));
        let blue = randomPick(range(0, 255, step));
        var colorValues = "rgb(" + red + ", " + green + ", " + blue + ")";
    }

    // document.body.style.background = "red"; // OK
    // document.body.style.backgroundColor = "rgb(255, 0, 0)"; // OK
    document.body.style.backgroundColor = colorValues;
    document.getElementById("colorValues").textContent = colorValues;

}
