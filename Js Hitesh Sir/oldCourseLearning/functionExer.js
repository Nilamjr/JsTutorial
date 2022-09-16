// 28th March 2022
// Nilam Practicing JS With you tube channel "Hitesh Chaudhary"'s old js course 

// Episode 17 - function exercise

function percentageCount(obtainMarks, totalMarks){
    let percentage = (obtainMarks / totalMarks)*100;

    let grade = '';

    if(percentage >= 90){
        grade = "A";
    }else if(percentage >= 80){
        grade = "B";
    }else if(percentage >= 70){
        grade = "C";
    }else if(percentage >= 60){
        grade = "D";
    }else if(percentage >= 50){
        grade = "E";
    }else{
        grade = "F";
    }

    return  `Your grade is ${grade} and percentage is ${percentage}`;
}

console.log(percentageCount(500, 500));