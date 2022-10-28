function getGrade(test, essay, testTwo) {
  let finalGrade = ((test + essay + testTwo) / 3);
  switch (true) {
    case (90 <= finalGrade) && (finalGrade <= 100):
      console.log('A');
      break;
    case (80 <= finalGrade) && (finalGrade < 90):
      console.log('B');
      break;
    case (70 <= finalGrade) && (finalGrade < 80):
      console.log('C');
      break;
    case (60 <= finalGrade) && (finalGrade < 70):
      console.log('D');
      break;
    case (0 <= finalGrade) && (finalGrade < 60):
      console.log('F');
      break;
  }
}

getGrade(100, 100, 0);
