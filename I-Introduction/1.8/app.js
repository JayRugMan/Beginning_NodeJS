// Require in trails module from trails.js
const trails = require('./trails.js');
// Require in util module here
const util = require('util');

// Simulate database call to search trails module for specified trail
const getTrailDistance = (trail, theCallback) => {
  return setTimeout(() => {
    if (trails.hasOwnProperty(trail)) {    
      const foundTrail = trails[trail];    
      theCallback(null, foundTrail)
    } else {
      theCallback(new Error('Trail not found!'))
    }
  }, 1000);
}

// Callback function to send an error in the case of an error, or to handle trail data if a trail was found successfully.
//JH function blah (error, trailData) {
//JH   if (error) {
//JH     console.error(error.message)
//JH     process.exit(1)
//JH   } else {
//JH     const mi = trailData.miles;   
//JH     const nickname = trailData.nickname;
//JH     console.log(`The ${nickname} is ${mi} miles long!`)
//JH   }
//JH }
//JH 
//JH getTrailDistance('North Country', blah)

// Promisfy below!
const getTrailDistancePromise = util.promisify(getTrailDistance)

getTrailDistancePromise('Continental Divide')
  .then((td) => {
    console.log(`The ${td.nickname} is ${td.miles} miles long!`)
  })
  .catch((e) => {
    console.log('Trail not found', e)
  })
