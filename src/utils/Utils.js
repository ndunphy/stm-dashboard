export function ordinal(grade) {
  grade = parseInt(grade, 10)
  switch(grade) {
    case 0:
      return 'Kindergarten'
    case 1:
      return '1st Grade'
    case 2:
      return '2nd Grade'
    case 3:
      return '3rd Grade'
    case 4:
      return '4th Grade'
    case 5:
      return '5th Grade'
    case 6:
      return '6th Grade'
    case 7:
      return '7th Grade'
    case 8:
      return '8th Grade'
    default:
      return null
  }
}

export function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals)
}

export const translations = {
  avgBehavior: 'Average Behavior',
  avgTestScore: 'Average Score',
  females: 'Girls',
  males: 'Boys',
  genderRatio: 'M/F',
  avgDial4: 'Average Dial 4',
  avgAge: 'Average Age',
  potentialDelays: 'Potential Delays',
  advancedMaths: 'Advanced Math',
  medicalConcerns: 'Medical Concerns',
  facultyStudents: 'Faculty Students',
  newStudents: 'New Students',
  testAvg: 'Average Score',
  asps: 'ASP',
  hmps: 'HMP',
  sex: 'Gender',
  potentialDelay: 'Potential Delay',
  advancedMath: 'Advanced Math',
  medicalConcern: 'Medical Concern',
  facultyStudent: 'Faculty Student',
  newStudent: 'New Student',
  hmp: 'High Maintenence Parent',
  behavior: 'Behavior',
  workEthic: 'Work Ethic',
  mathBench: 'Math Bench',
  cogAT: 'cogAT',
  dra: 'DRA',
  elaTotal: 'ELA Total',
  mathTotal: 'Math Total',
  asp: 'ASP',
  behaviorObservation: 'Behavior Observation'
}

function getYN(val){
  return (val === 1) ? 'Yes' : 'No'
}

function getCheckMinusPlus(val){
  if(val === 0)
    return '-'
  else if(val === 1)
    return '\u2713'
  else
    return '+'
}

export function forHumanAttr(key, val) {
  switch(key){
    case 'potentialDelay':
    case 'advancedMath':
    case 'medicalConcern':
    case 'facultyStudent':
    case 'newStudent':
    case 'hmp':
    case 'asp':
      return `${translations[key]}: ${getYN(val)}`
    case 'behavior':
    case 'workEthic':
      return `${translations[key]}: ${getCheckMinusPlus(val)}`
    case 'sex':
    case 'mathBench':
    case 'cogAT':
    case 'dra':
    case 'elaTotal':
    case 'mathTotal':
    case 'behaviorObservation':
      return `${translations[key]}: ${val}`
    default:
      return `${key}: ${val}`
  }
}

export function studentDisplayKey(key){
  return !['name', 'firstName', 'lastName', 'weightedScore', 'weighted_score', 'behavior_score', 'behaviorScore'].includes(key)
}


