// list of Formula 1 champions since the year 2000
const formula1Champions = [
    "Schumacher",
    "Schumacher",
    "Schumacher",
    "Schumacher",
    "Schumacher",
    "Alonso",
    "Alonso",
    "Räikkönen",
    "Hamilton",
    "Button",
    "Vettel",
    "Vettel",
    "Vettel",
    "Vettel",
    "Hamilton",
    "Hamilton",
    "Rosberg",
    "Hamilton",
    "Hamilton",
    "Hamilton",
    "Hamilton"
]
let winners = {}

function countWin(driver) {
   let counter=0;
   for(i=0;i<formula1Champions.length;i++){
       if(formula1Champions[i]===driver){
           counter++;
       }
   }
   return winners[driver] = driver + ":" + counter;
}
formula1Champions.forEach(countWin);
