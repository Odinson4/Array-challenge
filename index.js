// RESOURCES PLEASE USE!!!!

/* 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
*/




const computers = [
  {
    cost: 2000,
    components: {
      gpu: 'Nvidia Geoforce GTX 1080ti',
      ram: '32GB',
      cpu: 'Intel Core i7'
    },
    isNew: false,
    isLaptop: false,
    accessories: ['mouse', 'keyboard', 'headset', 'rgb', 'darthVader']
  },
  {
    cost: 1200,
    components: {
      gpu: 'Radeon Pro Vega 20',
      ram: '32GB',
      cpu: 'Intel Core i9'
    },
    isNew: true,
    isLaptop: true,
    accessories: ['mouse', 'keyboard', 'liquidCooling', 'headset']
  },
  {
    cost: 2800,
    components: {
      gpu: 'NVIDIA Geforce RTX 2080',
      ram: '16GB',
      cpu: 'Intel Core i9'
    },
    isNew: true,
    isLaptop: false,
    accessories: ['mouse', 'keyboard', 'rgb']
  },
  {
    cost: 800,
    components: {
      gpu: 'Radeon Vega 10',
      ram: '8GB',
      cpu: 'Intel Core i5'
    },
    isNew: true,
    isLaptop: false,
    accessories: ['mouse', 'keyboard', 'rgb', 'microphone']
  }
]


// DIFFICULTY LEVEL: BEGINNER

// Below, return the total cost of all the computers (Correct answer will return an integer: 6800)
// _________________________________________________________________________________________________________________________________

function getTotalPricing() {

  console.log(result)
}

getTotalPricing()

// __________________________________________________________________________________________________________________________________




//Below retun an array that sorts the computers by cost low -> high (Correct answer will be an array of computer objects like below):

// [
//   {
//     cost: 800,
//     components: {
//       gpu: 'Radeon Vega 10',
//       ram: '8GB',
//       cpu: 'Intel Core i5'
//     },
//     isNew: true,
//     isLaptop: false,
//     accessories: ['mouse', 'keyboard', 'RGB']
//   },
//   {
//     cost: 1200,
//     components: {
//       gpu: 'Radeon Pro Vega 20',
//       ram: '32GB',
//       cpu: 'Intel Core i9'
//     },
//     isNew: true,
//     isLaptop: true,
//     accessories: ['mouse', 'keyboard']
//   },
//   {
//     cost: 2000,
//     components: {
//       gpu: 'Nvidia Geoforce GTX 1080ti',
//       ram: '32GB',
//       cpu: 'Intel Core i7'
//     },
//     isNew: false,
//     isLaptop: false,
//     accessories: ['mouse', 'keyboard', 'headset', 'RGB']
//   },
//   {
//     cost: 2800,
//     components: {
//       gpu: 'NVIDIA Geforce RTX 2080',
//       ram: '16GB',
//       cpu: 'Intel Core i9'
//     },
//     isNew: true,
//     isLaptop: false,
//     accessories: ['mouse', 'keyboard', 'RGB']
//   }
// ]
// __________________________________________________________________________________________________________________________________

// sortByPrice()

// __________________________________________________________________________________________________________________________________



// Below return an array of objects that have a value of isNew as false: Answer: 
// [
//   {
//     cost: 2000,
//     components: {
//       gpu: 'Nvidia Geoforce GTX 1080ti',
//       ram: '32GB',
//       cpu: 'Intel Core i7'
//     },
//     isNew: false,
//     isLaptop: false,
//     accessories: ['mouse', 'keyboard', 'headset', 'RGB']
//   }
// ]
// __________________________________________________________________________________________________________________________________


// __________________________________________________________________________________________________________________________________


// Below return the one object that is a laptop: Answer:
// {
//     cost: 1200,
//     components: {
//       gpu: 'Radeon Pro Vega 20',
//       ram: '32GB',
//       cpu: 'Intel Core i9'
//     },
//     isNew: true,
//     isLaptop: true,
//     accessories: ['mouse', 'keyboard', 'liquidCooling', 'headset'] 
// }



// __________________________________________________________________________________________________________________________________


// (*Delete this & Enter Solution For Above Here*)



// __________________________________________________________________________________________________________________________________

// Below, return an array of objects that are components for each computer: Answer:

// [
//   {
//     gpu: 'Nvidia Geoforce GTX 1080ti',
//     ram: '32GB',
//     cpu: 'Intel Core i7'
//   },
//   {
//     gpu: 'Radeon Pro Vega 20',
//     ram: '32GB',
//     cpu: 'Intel Core i9'
//   },
//   {
//     gpu: 'NVIDIA Geforce RTX 2080',
//     ram: '16GB',
//     cpu: 'Intel Core i9'
//   },
//   {
//     gpu: 'Radeon Vega 10',
//     ram: '8GB',
//     cpu: 'Intel Core i5'
//   },
// ]



// __________________________________________________________________________________________________________________________________


// (*Delete this & Enter Solution For Above Here*)



// __________________________________________________________________________________________________________________________________





// Below, return the count of computers that are new: Answer: 3


// __________________________________________________________________________________________________________________________________


// (*Delete this & Enter Solution For Above Here*)



// __________________________________________________________________________________________________________________________________









// DIFFICULTY LEVEL: INTERMEDIATE

// Below return an array of computers that have 32GB of ram and then sort by price low -> high: Answer will be:
// [
//   {
//     cost: 1200,
//     components: {
//       gpu: 'Radeon Pro Vega 20',
//       ram: '32GB',
//       cpu: 'Intel Core i9'
//     },
//     isNew: true,
//     isLaptop: true,
//     accessories: ['mouse', 'keyboard']
//   },
//   {
//     cost: 2000,
//     components: {
//       gpu: 'Nvidia Geoforce GTX 1080ti',
//       ram: '32GB',
//       cpu: 'Intel Core i7'
//     },
//     isNew: false,
//     isLaptop: false,
//     accessories: ['mouse', 'keyboard', 'headset', 'RGB']
//   }
// ]




// __________________________________________________________________________________________________________________________________

// (*Delete this & Enter Solution For Above Here*)

// __________________________________________________________________________________________________________________________________


// Below return an array of computers that use NVIDIA gpu's: Answer:
// [
//  {
//     cost: 2000,
//     components: {
//       gpu: 'Nvidia Geoforce GTX 1080ti',
//       ram: '32GB',
//       cpu: 'Intel Core i7'
//     },
//     isNew: false,
//     isLaptop: false,
//     accessories: ['mouse', 'keyboard', 'headset', 'rgb', 'darthVader']
//   },
//   {
//     cost: 2800,
//     components: {
//       gpu: 'NVIDIA Geforce RTX 2080',
//       ram: '16GB',
//       cpu: 'Intel Core i9'
//     },
//     isNew: true,
//     isLaptop: false,
//     accessories: ['mouse', 'keyboard', 'rgb']
//   },
// ]  



// __________________________________________________________________________________________________________________________________

// (*Delete this & Enter Solution For Above Here*)

// __________________________________________________________________________________________________________________________________








// DIFFICULTY LEVEL: Hard

//Below return an array of all possible accessories from all computers and then sort alphabetically: Answer will be :

//[ 'darthVader', 'headset', 'keyboard', 'liquidCooling', 'microphone', 'mouse', 'rgb' ]


// __________________________________________________________________________________________________________________________________

// (*Delete this & Enter Solution For Above Here*)

// __________________________________________________________________________________________________________________________________










// DIFFICULTY LEVEL: Ultra Hard

//Below return an object of all possible accessories from all computers as keys and the number of times they are shown in the computers array as the keys value Answer will be : 

// {
//   darthVader: 1,
//   headset: 2,
//   keyboard: 4,
//   liquidCooling: 1,
//   microphone: 1 ,
//   mouse: 4,
//   rgb: 3,
// }  


// __________________________________________________________________________________________________________________________________

// (*Delete this & Enter Solution For Above Here*)

// __________________________________________________________________________________________________________________________________


// Create an object of components that exist from all of the computers. The objecet will have keys of gpu, ram, cpu and their values will be an array of said components that are sorted in reverse alphabetical order: Answer:


// {
//   gpu: ['Radeon Vega 10', 'Radeon Pro Vega 20', 'Nvidia Geoforce GTX 1080ti', 'NVIDIA Geforce RTX 2080'],
//   ram: ['32GB', '16GB', '8GB'],
//   cpu: ['Intel Core i9', 'Intel Core i7, 'Intel Core i5']
// },



// __________________________________________________________________________________________________________________________________

// (*Delete this & Enter Solution For Above Here*)

// __________________________________________________________________________________________________________________________________






// WHEN YOU COMPLETE THIS PING ME ON SLACK @DAN REARDON

// I Will provide a double dataset repl for a larger challenge.