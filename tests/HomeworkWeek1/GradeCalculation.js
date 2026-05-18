function gradeCalculation(studentScore)
{
    //let studentScore

    switch (studentScore){
    case 100:
        console.log("Student scored centum")
        break;
        case 70:
          console.log("First Class secured")
          break;
          case 40:
            console.log("Second class secured") 
            break;
            case 20:
              console.log("Student failed") 
            break;   
            default:
                console.log("student is absent")
    }


}
gradeCalculation(100);
gradeCalculation(10);
gradeCalculation(70);

