const submitGpa = document.getElementById("submitGpa")
const cal = document.getElementById("cal")
let stuID = document.getElementById("sub_id")
let Grade = document.getElementById("grade")
let Credit = document.getElementById("credit")
let List = document.getElementById("list")
let semester = document.getElementById("semester")
let id = [] , grade = [] , credit = [] , gpa_sem = [] , credit_sem = [] ,sum_sem = [] , semester = []
let index = 0
let gpa = 0  , cd = 0 ,sumg = 0



submitGpa.addEventListener("click",function(){
    id.push(stuID.value)
    grade.push(Grade.value)
    credit.push(Credit.value)
    semester.push(semester.value)
    const newelement = document.createElement("li")
    newelement.textContent = "subject ID : " + id[index] +" grade : " +grade[index] + " credit : " +credit[index] + " semester : " + semester[index]
    List.append(newelement)
    stuID.value=""
    Grade.value=""
    Credit.value=""
    semester.value=""
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










