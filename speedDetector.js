
/* Speed Detector
 * Input is speed of car
 * Speed limit is 70
 * When speed of car is less than 70 print "Ok"
 * For every 5 km/s above the speed limit give the driver one demerit point and print the total number of demerit points.
 * When driver gets more than 12 demerit points print "License suspended"
*/
function detectOverSpeeding(speedOfCar) {

    // Validation of speed of cars

    if (speedOfCar === undefined || isNaN(speedOfCar)
    ){
        return "Invalid speed"
    }


    if (speedOfCar<=70){ 
        return "Ok"
    }
    else {
        excessSpeedLimit = speedOfCar - 70;
        points = 0;
        while (excessSpeedLimit > 0){
            excessSpeedLimit = excessSpeedLimit - 5;
            points = points + 1;
            if(points > 12) {
                return "License suspended";
            }
        excessSpeedLimit = (speedOfCar - 70)/5;
        points = Math.floor(excessSpeedLimit);
        if (points>12){
            return "License suspended"
        }
        else{
            return ("Points:" + points)
        }
    
    }

    }
}
