// Code your solution in this file!
function distanceFromHqInBlocks (someValue) {
    //returns the number of blocks given a value
    let headquarters = 42;
    let distance = Math.abs(someValue -headquarters);
    return distance;
  }

  function distanceFromHqInFeet (someValue) {
    let val = distanceFromHqInBlocks(someValue) * 264;
    return val;
  }

  function distanceTravelledInFeet (begin, end){
      let travelValue = Math.abs(end - begin);
      let travelValueInFeet = travelValue * 264;
      return travelValueInFeet;
  }

  function calculatesFarePrice (begin , end){
      let distance = distanceTravelledInFeet(begin,end);

    if (distance < 400){
        return 0;
    }
    else if (distance>=400 && distance<=2000){
        return (distance - 400)*0.02;
    }
    else if (distance>2000 && distance<2500){
        return 25;
    }
    else
        return "cannot travel that far"
  }