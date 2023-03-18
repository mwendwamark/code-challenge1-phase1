//CODE CHALLENGE 1
//A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40
function getStudentGrade(grade){
   
    
   
    
    //Validation of grades
    if (grade=== undefined || isNaN(grade)|| grade<0 || grade>100){
        return "This is an invalid mark.Please try again"
    }
    //These are the conditions of the grades
if (grade >79 && grade<101) {
    console.log(getStudentGrade(grade))
    return "A"
    
}
else if (grade> 59 && grade< 78) {
    console.log(getStudentGrade(grade))
    return "B"
    
}
else if (grade>48 && grade< 58) {
    console.log(getStudentGrade(grade))

    return "C"
    
}
else if (grade>39 && grade<=48) {
    console.log(getStudentGrade(grade))
    return "D"
    
}
else if(grade>0 && grade<=40) {
    console.log(getStudentGrade(grade))
    return "E"
}
 
else{ 
    return "This is an invalid mark.Please try again"}
}
getStudentGrade()







/** Speed Detector
 * Input is speed of car
 * Speed limit is 70
 * When speed of car is less than 70 print "Ok"
 * For every 5 km/s above the speed limit give the driver one demerit point and print the total number of demerit points.
 * When driver gets more than 12 demerit points print "License suspended"
*/
function detectOverspeeding(speedOfCar) {
    // Validating
    // Validation
    if (speedOfCar === undefined || isNaN(speedOfCar)
    ){
        return "Invalid value"
    }
    // conditions
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

    }}
