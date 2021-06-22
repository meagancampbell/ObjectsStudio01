// */ Code your selectRandomEntry function here:/*

function selectRandomEntry(array){
   let index = Math.floor(Math.random()*array.length);
   return array[index];
}

// Code your buildCrewArray function here:

let idNumbers = [291, 414, 503, 599, 796, 890];
let newCrew = []; 

function buildCrewArray(ids, candidates){ 

  let threeCandidates=[]
  while(threeCandidates.length<3){
  let item = selectRandomEntry(ids);
  if(!threeCandidates.includes(item)){
  threeCandidates.push(item);
  }
} for (i=0; i < threeCandidates.length; i++){ 
    for (j=0; j<candidates.length; j++){
    if (candidates[j].astronautID === threeCandidates[i])
       { newCrew.push(candidates[j]); 
       } 
     } 
       } 
       return newCrew;
} 

// Code your buildCrewArray function here:

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
buildCrewArray(idNumbers,animals)
console.log(`${newCrew[0].name},${newCrew[1].name}, and ${newCrew[2 ].name} are going to space!`);
