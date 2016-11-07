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
      return '8rd Grade'
    default:
      return null
  }
}

export function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals)
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
    case 'sex':
      return 'Gender : ' + val
    case 'potentialDelay':
      return 'Potential Delay : ' + getYN(val)
    case 'advancedMath':
      return 'Advanced Math : ' + getYN(val)
    case 'medicalConcern':
      return 'Medical Concern : ' + getYN(val)
    case 'facultyStudent':
      return 'Faculty Student : ' + getYN(val)
    case 'newStudent':
      return 'New Student : ' + getYN(val)
    case 'hmp':
      return 'High Maintenence Parent : ' + getYN(val)
    case 'behavior':
      return 'Behavior: ' + getCheckMinusPlus(val)
    case 'workEthic':
      return 'Work Ethic: ' + getCheckMinusPlus(val)
    case 'mathBench':
      return 'Math Benchmark : ' + val
    case 'cogAT':
      return 'cogAT : ' + val
    case 'dra':
      return 'DRA : ' + val
    case 'elaTotal':
      return 'ELA Total : ' + val
    case 'mathTotal':
      return 'Math Total : ' + val
    case 'asp':
      return 'ASP : ' + getYN(val)
    case 'behaviorObservation':
      return 'Behavior Observation : ' + val
    default:
      return key + ' : ' + val
  }
}

export function studentDisplayKey(key){
  if(['name', 'firstName', 'lastName', 'weightedScore', 'weighted_score', 'behavior_score', 'behaviorScore'].includes(key)){
    return false
  }
  else
    return true
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
  newStudent: 'New Students',
  testAvg: 'Average Score',
  asps: 'ASP',
  hmps: 'HMP'
}

