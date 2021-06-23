// */ Code your selectRandomEntry function here:/*
let idNumbers = [291, 414, 503, 599, 796, 890];
let newCrew = []; 

function selectRandomEntry(idNumbers){
   let index = Math.floor(Math.random()*idNumbers.length);
   return idNumbers[index];
}

console.log(selectRandomEntry(idNumbers));
let crewIDs = [];

while (crewIDs.length < 3){
  let randomEntry = selectRandomEntry(idNumbers);
  
  if (crewIDs.includes(randomEntry) === false) {
    crewIDs.push(randomEntry)
  }
}

// crewIDs.push(selectRandomEntry(idNumbers));
console.log(crewIDs);

//Code your buildCrewArray function here:

function buildCrewArray(crewIDs, candidateObjects){
  let crewCandidates=[];
  for (let i= 0; i < crewIDs.length; i++){
    for (let j = 0; j < candidateObjects.length; i++){
     if (cadidateObjects[j].astronautID === crewIDs[i]){
       crewCandidates.push(candidatesObjects[j].name);
     } 
    }  
  }
}

//Code your buildCrewArray function here:

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};

let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};

let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};

let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};

let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};

let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};


// Code your template literal and console.log statements:
// buildCrewArray(idNumbers,animals)
// console.log(`${newCrew[0].name},${newCrew[1].name}, and ${newCrew[2 ].name} are going to space!`);

function getOrbitCircumfrence(radius = 2000){   
  let circumference =  2 * Math.PI * radius;
  circumference = * 1000
}
console.log(getOrbitCircumfrence());

function getMissionDuration (numberOfOrbits, radius = 2000, speed = 28000 ){
  let distance = numberOfOrbits * getOrbitCircumfrence(radius);
  let time = distance / speed;
  time = time.toFixed(2); // converts the number into a string
  return time;
  //time = Math.round(time * 100) / 100;  //keeps the number a number
}

console.log(getMissionDuration(5))  // expected = 2.24

// space walk formula