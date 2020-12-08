const submitGpa = document.getElementById("submitGpa")
const cal = document.getElementById("cal")
let stuID = document.getElementById("sub_id")
let Grade = document.getElementById("grade")
let Credit = document.getElementById("credit")
let List = document.getElementById("list")
let id = [] , grade = [] , credit = []
let index = 0
let gpa = 0  , cd = 0 ,sumg = 0



submitGpa.addEventListener("click",function(){
    id.push(stuID.value)
    grade.push(Grade.value)
    credit.push(Credit.value)
    const newelement = document.createElement("li")
    newelement.textContent = "subject ID : " + id[index] +" grade : " +grade[index] + " credit : " +credit[index]
    List.append(newelement)
    stuID.value=""
    Grade.value=""
    Credit.value=""
    index++
})

cal.addEventListener("click",function(){
    for (let j = 0;  j < grade.length; j++) {
        sumg += parseFloat(grade[j]*credit[j])
        cd += parseFloat(credit[j])
    }
    gpa = sumg / cd

    
    const ans1 = document.createElement("li")
    ans1.textContent ="Your GPA is " + gpa.toFixed(2) 
    List.append(ans1) 
})










