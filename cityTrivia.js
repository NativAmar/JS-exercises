function guessCity(capital, coastal, famous, ancient){
if(ancient&&famous&&capital){
    return "Jerusalem";
}
else if(famous&&coastal){
    return "Tel Aviv"
}
else if(coastal&&ancient){
    return "Acre"
}
else if(ancient){
    return "Katzrin"
}
else if(coastal){
    return "Zikim"
}
else if(capital===false&&coastal===false&&famous===false&&ancient===false){
    return "Musmus"
}
else return "No other cities are recognized"
}
