//CODE CHALLENGE 1
//A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40
function getStudentGrade(grade){
   
    
   
    
    //Validation of grades
    if (grade=== undefined || isNaN(grade)|| grade<0 || grade>100){
        return "This is an invalid mark.Please try again"
    }
    //These are the conditions of the grades
if (grade >79 && grade<101) {
    console.log(gradeSelector)
    return "A"
    
}
else if (grade> 59 && grade< 78) {
    console.log(gradeSelector)
    return "B"
    
}
else if (grade>48 && grade< 58) {
    console.log(gradeSelector)

    return "C"
    
}
else if (grade>39 && grade<=48) {
    console.log(gradeSelector)
    return "D"
    
}
else if(grade>0 && grade<=40) {
    console.log(gradeSelector)
    return "E"
}
 
else{ 
    return "This is an invalid mark.Please try again"}
}



