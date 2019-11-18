// Code your solution in this file!
function distanceFromHqInBlocks(block) {
    let endBlock = 42;
    return Math.abs(block - endBlock);
}

function distanceFromHqInFeet(block) {
    return (distanceFromHqInBlocks(block) * 264);
}

function distanceTravelledInFeet(block1, block2) {
    return (Math.abs(block1 - block2) * 264);
}

function calculatesFarePrice(block1, block2) {
    let distance = distanceTravelledInFeet(block1, block2);
    switch (true) {
        case distance <= 400:
            return 0;
            break;
        case distance <= 2000:
            return .02 * (distance - 400);
            break;
        case distance <= 2500:
            return 25;
            break;
        default:
            return 'cannot travel that far';
    }
}