const app = "I don't do much."

function bumpCounter() {
  var counter = 0;

  function addBump(){
    counter++;
  }

  function getBumps(){
    return counter;
  }

  return {
    addBump,
    getBumps
  };

}

function createAnimal(animalType){
  function createDevice(deadlyDevice){
    return {
      animalType,
      deadlyAnimal
    };

  }

  return createDevice;
}

const sharkCreator = createAnimal('Shark');

console.log(sharkCreator)

const sharkWithFrickinLaserbeam = sharkCreator('Laserbeam');
var sharkWithFrickinCannon = createDevice('Cannon')
