const grades = [73, 91, 88, 56, 62, 84, 95, 96, 88, 92];
// your code goes here
function gradeRange(arr){
    let highest=arr[0];
    let lowest=arr[0];
    let range;
    for(let i=1;i<arr.length;i++){
        if(arr[i]<lowest){
            lowest=arr[i];
        }
        if(arr[i]>highest){
            highest=arr[i];
        }
        range=highest-lowest;
    }
    return range;
}
function medianGrade(){
    let NewArr=grades.slice();
    NewArr=NewArr.sort();
    let size =Math.floor(NewArr.length/2);
    let newArr=NewArr.slice(size);
    return newArr[0];
}
function secondHalfRange(lastArr){
    let len=lastArr.slice(Math.floor(lastArr.length/2));
    return  gradeRange(len); 
}
console.log("Stats:\n\tRange: "+gradeRange(grades)+"\n\tMedian: "+medianGrade(grades)+"\n\tHalf Range: "+secondHalfRange(grades)); 
