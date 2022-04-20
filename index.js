// Code your solution in this file!

function distanceFromHqInBlocks(pickUpLocation) {
    if (pickUpLocation >= 42) { 
        return pickUpLocation - 42;
    } else if (pickUpLocation < 42) {
        return 42 - pickUpLocation;
    }
}

console.log(distanceFromHqInBlocks(50));

function distanceFromHqInFeet(pickUpLocation) {
    return distanceFromHqInBlocks(pickUpLocation)*264;
}

console.log(distanceFromHqInFeet(34));

function distanceTravelledInFeet(pickUpLocation, endLocation) {
    if (pickUpLocation >= 42) {
        return (endLocation - pickUpLocation)*264;
    } else if (pickUpLocation < 42) {
        return (pickUpLocation - endLocation)*264;
    }
}

console.log(distanceTravelledInFeet(34,28));

function calculatesFarePrice(pickUpLocation, endLocaton) {
    if (distanceTravelledInFeet(pickUpLocation, endLocaton) <= 400) {
        return 0;
    } else if (distanceTravelledInFeet(pickUpLocation, endLocaton) <= 2000) {
        return (distanceTravelledInFeet(pickUpLocation, endLocaton) - 400)* 0.02;
    } else if (distanceTravelledInFeet(pickUpLocation, endLocaton) < 2500) {
        return 25;
    } else if (distanceTravelledInFeet(pickUpLocation, endLocaton) >= 2500) {
        return 'cannot travel that far';
    }
}

console.log(calculatesFarePrice(34,24));