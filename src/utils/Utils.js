export function ordinal(grade) {
  grade = parseInt(grade, 10)
  switch (grade) {
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
  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals)
}

export const sectionTranslations = {
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
  hmps: 'HMP'
}

export const studentTranslations = {
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
  behaviorObservation: 'Behavior Observation',
  dial4: 'Dial 4',
  age: 'Age'
}

export function forHumanAttr(key, val) {
  switch (key) {
    case 'potentialDelay':
    case 'advancedMath':
    case 'medicalConcern':
    case 'facultyStudent':
    case 'newStudent':
    case 'hmp':
    case 'asp':
      return `${studentTranslations[key]}: ${(val === 0) ? 'No' : 'Yes'}`
    case 'behavior':
    case 'workEthic':
      const mark = (val === 0) ? '-' : (val === 1) ? '\u2713' : '+'
      return `${studentTranslations[key]}: ${mark}`
    case 'sex':
    case 'mathBench':
    case 'cogAT':
    case 'dra':
    case 'elaTotal':
    case 'mathTotal':
    case 'behaviorObservation':
    case 'dial4':
      return `${studentTranslations[key]}: ${val}`
    case 'age':
      return `${studentTranslations[key]}: ${round(val / 12, 0)} y. ${round(val % 12, 0)} mo.`
    default:
      return `${key}: ${val}`
  }
}


