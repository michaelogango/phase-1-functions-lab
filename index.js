// Function to calculate the number of blocks from Scuber headquarters
function distanceFromHqInBlocks(someValue) {
    const headquarters = 42;
    return Math.abs(someValue - headquarters);
  }
  
  // Function to convert blocks to feet
  function distanceFromHqInFeet(someValue) {
    const blocks = distanceFromHqInBlocks(someValue);
    return blocks * 264;
  }
  
  // Function to calculate the number of feet travelled between two blocks
  function distanceTravelledInFeet(start, destination) {
    const blocksTravelled = Math.abs(start - destination);
    return blocksTravelled * 264;
  }
  
  // Function to calculate the fare price based on the distance travelled
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }
  
  // Example usage:
  console.log(distanceFromHqInBlocks(50)); // 8
  console.log(distanceFromHqInFeet(50)); // 2112
  console.log(distanceTravelledInFeet(34, 38)); // 1056
  console.log(calculatesFarePrice(34, 38)); // 13.12
  