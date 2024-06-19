//logic 
//if fuel is less then cost(steps for aage badna)  then obviously it cant traverse so that index 
// is not an answer acc to logic... so increment index maybe next index will the answer
// suppose fule=1 and cost is 3 with fule 1 we cant traverse 3 steps;

// question
//we will find total difference = sum of all fule - sum of all cost(steps) if it is -ve then return -1 otherwise index value;
// There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].
// You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. You begin the journey with an empty tank at one of the gas stations.
// Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the
//  circuit once in the clockwise direction, otherwise return -1. If there exists a solution, it is guaranteed to be unique
// Example 1:
// Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
// Output: 3
// Explanation:
// Start at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
// Travel to station 4. Your tank = 4 - 1 + 5 = 8
// Travel to station 0. Your tank = 8 - 2 + 1 = 7
// Travel to station 1. Your tank = 7 - 3 + 2 = 6
// Travel to station 2. Your tank = 6 - 4 + 3 = 5
// Travel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.
// Therefore, return 3 as the starting index.


function canCompleteCircuit(gas, cost){
    let n=gas.length;
    let diff=0;
    let totaldiff=0;
    let index=0;
    let fuel_capacity=0;
    for(let i=0;i<n;i++){
        diff=gas[i]-cost[i];  //-2
        totaldiff =+ diff; //-2+0
        fuel_capacity =+ diff; //0 + -2 = -2
        if(fuel_capacity<0){
            index=i+1;
            fuel_capacity=0;
        }

    }
    return totaldiff<0 ? -1 : index;
}

let gas = [1, 2, 3, 4, 5];
let cost = [3, 4, 5, 1, 2];
console.log(canCompleteCircuit(gas, cost)); 

//answer will be 3 because through 3rd index we can traverse clockwise and complete the round