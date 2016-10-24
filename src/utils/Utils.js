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

export function forHuman(key) {
  switch(key) {
    case 'avgBehavior':
      return 'Average Behavior'
    case 'avgTestScore':
      return 'Average Score'
    case 'femaleCount':
      return 'Girls'
    case 'maleCount':
      return 'Boys'
    case 'genderRatio':
      return 'M/F'
    case 'avgDial4':
      return 'Average Dial 4'
    case 'avgAge':
      return 'Average Age'
    case 'potentialDelays':
      return 'Potential Delays'
    default:
      return key
  }
}