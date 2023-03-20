
/* Speed Detector
 * The input is speed of a car
 * The speed limit is 70
 * When the speed of a car is less or equal to 70 print "Ok"
 * For every 5 km/s above the speed limit give the driver one demerit point and print the total number of demerit points.
 * When driver gets more than 12 demerit points it should  printout  "License suspended"
*/
function detectOverSpeeding(speedOfCar) {

    // Validation of speed of cars
    if (speedOfCar === undefined || isNaN(speedOfCar)) {
        return "Invalid speed";
    }

    if (speedOfCar <= 70) { 
        return "Ok";
    } else {
        var excessSpeedLimit = speedOfCar - 70;
        var points = Math.floor(excessSpeedLimit / 5);
        if (points > 12) {
            return "License suspended";
        } else {
            return "Points: " + points;
        }

    }
}
