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
console.log(gradeRange(grades));
function medianGrade(array){
    array.sort();
    let size =Math.floor(array.length);
    let newArr=array.slice(size/2);
    return newArr[0];
}
console.log(medianGrade(grades));
