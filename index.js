
plantContainerRadius = 5;
const PI = 3.1415;
const area = PI * plantContainerRadius * plantContainerRadius;
// == area 78 

minimumSpace = .8; // square meters

let week = 1;
let OriginalPlants = 20;
let TotalPlants = OriginalPlants * (2 ** week); // total plants

let maxPlantsCapacityOfGarden = (area / minimumSpace); // are u supoposed to divide or multiple im not sure i forgot geometry

let totalSpaceNeededForPlants = (TotalPlants * minimumSpace);

console.log("Original number of Plants = " + OriginalPlants);
console.log("Total Space needed for Plants  = " + totalSpaceNeededForPlants);

// console.log("Total Space if " + plantContainerRadius );
console.log("Max Capacity of plants = " + maxPlantsCapacityOfGarden);

console.log("Number of Plants after " + week + " weeks = " + TotalPlants);

// number of TotalPlants

console.log("---------  WEEK 1 --------");


{

    let week = 1;
    OriginalPlants = 20;
    let TotalPlants = OriginalPlants * (2 ** week); // total plants
    // DOES THE FIRST WEEK GROW PLANTS OR WHAT I M CONFUSED
    let maxPlantsCapacityOfGarden = (area / minimumSpace);
    let totalSpaceNeededForPlants = (TotalPlants * minimumSpace);

    console.log("Number of Plants after " + week + " weeks = " + TotalPlants);
    console.log("Max Capacity of plants = " + maxPlantsCapacityOfGarden);


    let Pruned;
    if (totalSpaceNeededForPlants > maxPlantsCapacityOfGarden * .8) {
        let Pruned = true;
        console.log("Week " + week + " You need to prune the Plants!")
    }
    else {
        let Pruned = false;
        console.log("Week " + week + " You dont need to prune the Plants!")
    }

    // monitored 

    let Monitored = ((totalSpaceNeededForPlants < .80 * maxPlantsCapacityOfGarden) && (totalSpaceNeededForPlants > .50 * maxPlantsCapacityOfGarden)) ? (true) : (false);
    if (Monitored) {
        console.log("Week " + week + " Growing at an acceptable rate, Monitered Plants: " + Monitored);
    }
    else {
        console.log("Week " + week + " Not growing at an acceptable rate, Monitered Plants: " + Monitored)
    }

    //planted 

    let Planted = (totalSpaceNeededForPlants < (.50 * area)) ? (true) : (false);
    if (Planted) {
        console.log("Week " + week + " More room to put more Plants!")
    }
    else {
        console.log("Week " + week + " No room to plant more")
    }
}

console.log("---------  WEEK 2 --------");

{
    let week = 2;
    OriginalPlants = 20;
    let TotalPlants = OriginalPlants * (2 ** week); // total plants

    let maxPlantsCapacityOfGarden = (area / minimumSpace);
    let totalSpaceNeededForPlants = (TotalPlants * minimumSpace);

    console.log("Number of Plants after " + week + " weeks = " + TotalPlants);
    console.log("Max Capacity of plants = " + maxPlantsCapacityOfGarden);


    let Pruned;
    if (totalSpaceNeededForPlants > maxPlantsCapacityOfGarden * .8) {
        let Pruned = true;
        console.log("Week " + week + " You need to prune the Plants!")
    }
    else {
        let Pruned = false;
        console.log("Week " + week + " You dont need to prune the Plants!")
    }

    // monitored 

    let Monitored = ((totalSpaceNeededForPlants < .80 * maxPlantsCapacityOfGarden) && (totalSpaceNeededForPlants > .50 * maxPlantsCapacityOfGarden)) ? (true) : (false);
    if (Monitored) {
        console.log("Week " + week + " Growing at an acceptable rate, Monitered Plants: " + Monitored);
    }
    else {
        console.log("Week " + week + " Not growing at an acceptable rate, Monitered Plants: " + Monitored)
    }

    //planted 

    let Planted = (totalSpaceNeededForPlants < (.50 * area)) ? (true) : (false);
    if (Planted) {
        console.log("Week " + week + " More room to put more Plants!")
    }
    else {
        console.log("Week " + week + " No room to plant more")
    }
}
console.log("---------  WEEK 3 --------");

{
    let week = 3;
    OriginalPlants = 20;
    let TotalPlants = OriginalPlants * (2 ** week); // total plants

    let maxPlantsCapacityOfGarden = (area / minimumSpace);
    let totalSpaceNeededForPlants = (TotalPlants * minimumSpace);

    console.log("Number of Plants after " + week + " weeks = " + TotalPlants);
    console.log("Max Capacity of plants = " + maxPlantsCapacityOfGarden);


    let Pruned;
    if (totalSpaceNeededForPlants > maxPlantsCapacityOfGarden * .8) {
        let Pruned = true;
        console.log("Week " + week + " You need to prune the Plants!")
    }
    else {
        let Pruned = false;
        console.log("Week " + week + " You dont need to prune the Plants!")
    }

    // monitored 

    let Monitored = ((totalSpaceNeededForPlants < .80 * maxPlantsCapacityOfGarden) && (totalSpaceNeededForPlants > .50 * maxPlantsCapacityOfGarden)) ? (true) : (false);
    if (Monitored) {
        console.log("Week " + week + " Growing at an acceptable rate, Monitered Plants: " + Monitored);
    }
    else {
        console.log("Week " + week + " Not growing at an acceptable rate, Monitered Plants: " + Monitored)
    }

    //planted 

    let Planted = (totalSpaceNeededForPlants < (.50 * area)) ? (true) : (false);
    if (Planted) {
        console.log("Week " + week + " More room to put more Plants!")
    }
    else {
        console.log("Week " + week + " No room to plant more")
    }
}

console.log("---------  PART 2  --------");

console.log("---------  WEEK 10 --------");

// part 2 

{

    let week = 10;
    OriginalPlants = 100;
    let TotalPlants = OriginalPlants * (2 ** week); // total plants

    let maxPlantsCapacityOfGarden = (area / minimumSpace);
    let totalSpaceNeededForPlants = (TotalPlants * minimumSpace);

    console.log("Number of Plants after " + week + " weeks = " + TotalPlants);
    console.log("Max Capacity of plants = " + maxPlantsCapacityOfGarden);


    let Pruned;
    if (totalSpaceNeededForPlants > maxPlantsCapacityOfGarden * .8) {
        let Pruned = true;
        console.log("Week " + week + " You need to prune the Plants!")
    }
    else {
        let Pruned = false;
        console.log("Week " + week + " You dont need to prune the Plants!")
    }

    // monitored 

    let Monitored = ((totalSpaceNeededForPlants < .80 * area) && (totalSpaceNeededForPlants > .50 * area)) ? (true) : (false);
    if (Monitored) {
        console.log("Week " + week + " Growing at an acceptable rate, Monitered Plants: " + Monitored);
    }
    else {
        console.log("Week " + week + " Not growing at an acceptable rate, Monitered Plants: " + Monitored)
    }

    //planted 

    let Planted = (totalSpaceNeededForPlants < (.50 * area)) ? (true) : (false);
    if (Planted) {
        console.log("Week " + week + " More room to put more Plants!")
    }
    else {
        console.log("Week " + week + " No room to plant more")
    }

    //102400 total plants -  multiply by the minimum space needed 
    // 


    let NewSpaceNeeded = (TotalPlants * .8)
    console.log(NewSpaceNeeded);

    let NewRadius = Math.sqrt(NewSpaceNeeded / PI);
    console.log("This is the new radius required " + NewRadius);  // i think 


    //part 3  DOnt really understand this

    try {
        if  (TotalPlants>maxPlantsCapacityOfGarden)
        {
            throw Error("Not enough space for plants")
        }
    }
    catch(Error){
        console.log("space required to hold the originally provided number of plants exceeds the amount of space available")
}

}


