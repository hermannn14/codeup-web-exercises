(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            // complete this method
            // hint: area = pi * radius^2
            return Math.PI * Math.pow(this.radius, 2);
            // return the proper value
        },


        logInfo: function (doRounding) {
            //  complete this method.
            if (doRounding) {
                console.log("Area of circle with radius: " + Math.round(this.radius) + ", is: ");
            } else {
                // If doRounding is true, round the result to the nearest integer.
                // Otherwise, output the complete value

                console.log("Area of a circle with radius: " + this.radius + ", is: ");
            }
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    //  Change the radius of the circle to 5.

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log(circle.getArea());
})();
