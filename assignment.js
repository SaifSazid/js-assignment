
//Feet To Mile Problem
function feetToMile (feet) {
    var mile = feet/5280; 
    return mile;
}
var roadMile = feetToMile(10560);
console.log(roadMile);


//Wood Calculation Problem
function woodCalculator(chair, table, bed) {
    var chairWood = 1*chair;
    var tableWood = 3*table;
    var bedWood = 5*bed;
    var totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}
var result = woodCalculator(2, 3, 5);
console.log(result);


//Brick Calculation Problem
function brickCalculator(floor){
    if(floor <= 10){
        var totalFeet = floor*15;
        var totalBrick = totalFeet*1000;
    }
    else if (floor <=20){
        var moreThanTenFloor = floor-10;
        totalFeet = moreThanTenFloor*12 + 10*15;
        totalBrick = totalFeet*1000; 
    }
    else{
        moreThanTwentyFloor = floor-20;
        totalFeet = 10*15 + 10*12 + moreThanTwentyFloor*10 ;
        totalBrick = totalFeet*1000; 
    }
    return totalBrick;
}
var result = brickCalculator(11);
console.log(result);

//Tiny Friend Problem
function tinyFriend(friends){
    var tinylength = friends[0].length;
    var tiny =friends[0] ;
    for(var i = 0; i<friends.length; i++){
        if(friends[i].length < tinylength){
            tinylength = friends[i].length;
            tiny = friends[i];
        }
    }
    return tiny;
}
var result = tinyFriend(['Rashiduzzaman','Arifur Rahman','Affif']);
console.log(result);