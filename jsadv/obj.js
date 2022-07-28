
var HumanObj = {};

console.log(HumanObj);

console.log('// ------------------------------');


var TechnologyObj = { 'name': 'JavaScript', 'version': 6, 'type': 'script', 'isStable': true }

console.log(TechnologyObj.name);
console.log(TechnologyObj['isStable']);

console.log('// ------------------------------');


var VehicleObj1 = {
  'type': 'LWM',
  'brand': 'Maruti',
  'model': 'Alto-100',
  'color': 'White',
  'isHighEndModel': true,
  'price': 400000,
  keyStart: function () {
    console.log(this.model + ' started!');
  }
}

console.log(VehicleObj1.brand);
console.log(VehicleObj1['color']);
VehicleObj1.keyStart();

console.log('// ------------------------------');


var VehicleObj2 = {
  type: 'LWM',
  brand: 'Maruti',
  model: 'Alto-100',
  color: 'White',
  isHighEndModel: true,
  price: 400000,
  keyStart: function () {
    alert(this.model + 'started!');
  }
}

console.log(VehicleObj1.brand);
console.log(VehicleObj1['color']);
VehicleObj1.keyStart();

console.log('// ------------------------------');
