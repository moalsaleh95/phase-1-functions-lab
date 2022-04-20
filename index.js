// Code your solution in this file!
function distanceFromHqInBlocks(value) {
    return Math.abs(value - 42);
}

function distanceFromHqInFeet(value) {
    const numberOfBlocks = distanceFromHqInBlocks(value);
    return numberOfBlocks * 264;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;
}

function calculatesFarePrice(start, destination) {
    const numberOfFeet = distanceTravelledInFeet(start, destination);
    if (numberOfFeet <= 400) {
        return 0;
    }
    else if (numberOfFeet > 400 && numberOfFeet < 2000) {
        return (numberOfFeet - 400) * 0.02;
    }
    else if (numberOfFeet > 2000 && numberOfFeet < 2500) {
        return 25;
    }
    else {
        return 'cannot travel that far';
    }
}
console.log(distanceTravelledInFeet(1, 9));
console.log(calculatesFarePrice(1, 9));