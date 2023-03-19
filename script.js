//CODE CHALLENGE 1
//A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40
function getStudentGrade(grade){    
    //Validation of grades
    if (grade=== undefined || isNaN(grade)|| grade<0 || grade>100){
        return "This is an invalid mark.Please try again"
    }
    //These are the conditions of the grades
if (grade >=79 && grade<101) {
    console.log(getStudentGrade(grade))
    return "A"
  // Any mark between 79 and 100, the expected grade is "A"
}
else if (grade>= 59 && grade<= 78) {
    console.log(getStudentGrade(grade))
    return "B"
  // Any mark between 60 and 78, the expected grade is "A"   
}
else if (grade>=49 && grade<= 58) {
    console.log(getStudentGrade(grade))

    return "C"
   // Any mark between 50 and 58 , the expected grade is "A"  
}
else if (grade>=39 && grade<=48) {
    console.log(getStudentGrade(grade))
    return "D"
  // Any mark between 41 and 49, the expected grade is "D"   
}
else if(grade>=0 && grade<=40) {
    console.log(getStudentGrade(grade))
    return "E"
     // Any mark between 0 and 40, the expected grade is "E"
}
 
else{ 
    return "This is an invalid mark.Please try again"}
}
getStudentGrade()
