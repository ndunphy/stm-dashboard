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

