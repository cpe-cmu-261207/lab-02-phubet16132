const submitGpa = document.getElementById("submitGpa")
const cal = document.getElementById("cal")
let stuID = document.getElementById("sub_id")
let Grade = document.getElementById("grade")
let Credit = document.getElementById("credit")
let List = document.getElementById("list")
let Semester = document.getElementById("semester")
let id = [] , grade = [] , credit = [] , gpa_sem = [] , credit_sem = [] ,sum_sem = [] , semester = []
let index = 0
let cd = 0 ,sumg = 0 ,sumM = 0 , cdM = 0 ,gpax = 0 , gm = 0
let g1_62 = 0 , g2_62 = 0,g1_63 = 0, g2_63 = 0,g1_64 = 0, g2_64 = 0,g1_65 = 0, g2_65= 0 ,g62 = 0 ,g63 = 0, g64 =0 ,g65 =0  
let s1_62 = 0 , s2_62 = 0,s1_63 = 0, s2_63 = 0,s1_64 = 0, s2_64 = 0,s1_65 = 0, s2_65= 0
let c1_62 = 0 , c2_62 = 0,c1_63 = 0, c2_63 = 0,c1_64 = 0, c2_64 = 0,c1_65 = 0, c2_65= 0



submitGpa.addEventListener("click",function(){
    id.push(stuID.value)
    grade.push(Grade.value)
    credit.push(Credit.value)
    semester.push(Semester.value)
    const newelement = document.createElement("li")
    newelement.textContent = "subject ID : " + id[index] +" grade : " +grade[index] + " credit : " +credit[index] + " semester : " + semester[index]
    List.append(newelement)
    stuID.value=""
    Grade.value=""
    Credit.value=""
    Semester.value=""
    index++
})

cal.addEventListener("click",function(){
    for (let j = 0;  j < grade.length; j++) {
        if(parseInt(id[j]/1000) === 261  ){
            sumM += parseFloat(grade[j]*credit[j])
            cdM += parseFloat(credit[j])
        }
        else if(semester[j] === "1/2562"){
            s1_62 += parseFloat(grade[j]*credit[j])
            c1_62 += parseFloat(credit[j])
        }
        else if(semester[j] === "2/2562"){
            s2_62 += parseFloat(grade[j]*credit[j])
            c2_62 += parseFloat(credit[j])
        }
        else if(semester[j] === "1/2563"){
            s1_63 += parseFloat(grade[j]*credit[j])
            c1_63 += parseFloat(credit[j])
        }
        else if(semester[j] === "2/2563"){
            s2_63 += parseFloat(grade[j]*credit[j])
            c2_63 += parseFloat(credit[j])
        }
        else if(semester[j] === "1/2564"){
            s1_64 += parseFloat(grade[j]*credit[j])
            c1_64 += parseFloat(credit[j])
        }
        else if(semester[j] === "2/2564"){
            s2_64 += parseFloat(grade[j]*credit[j])
            c2_64 += parseFloat(credit[j])
        }
        else if(semester[j] === "1/2565"){
            s1_65 += parseFloat(grade[j]*credit[j])
            c1_65 += parseFloat(credit[j])
        }
        else if(semester[j] === "2/2565"){
            s2_65 += parseFloat(grade[j]*credit[j])
            c2_65 += parseFloat(credit[j])
        }
        sumg += parseFloat(grade[j]*credit[j])
        cd += parseFloat(credit[j])
    }

    gpax = sumg / cd
    gm = sumM/cdM
    g1_62 = s1_62/c1_62
    g2_62 = s2_62/c2_62
    g62 = (s1_62+s2_62)/(c1_62+c2_62)
    g1_63 = s1_63/c1_63
    g2_63 = s2_63/c2_63
    g62 = (s1_63+s2_63)/(c1_63+c2_63)
    g1_64 = s1_64/c1_64
    g2_64 = s2_64/c2_64
    g62 = (s1_63+s2_63)/(c1_63+c2_63)
    g1_65 = s1_65/c1_65
    g2_65 = s2_65/c2_65
    g62 = (s1_63+s2_63)/(c1_63+c2_63)
    
    const ansGpax = document.createElement("li")
    const GpaxMa = document.createElement("li")
    const ans1_62 = document.createElement("li")
    const ans2_62 = document.createElement("li")
    const ans62 = document.createElement("li")
    const ans1_63 = document.createElement("li")
    const ans2_63 = document.createElement("li")
    const ans63 = document.createElement("li")
    const ans1_64 = document.createElement("li")
    const ans2_64 = document.createElement("li")
    const ans64 = document.createElement("li")
    const ans1_65 = document.createElement("li")
    const ans2_65 = document.createElement("li")
    const ans65 = document.createElement("li")


    ansGpax.textContent ="Your GPAX is " + gpax.toFixed(2) 
    GpaxMa.textContent ="Your major grade is " + gm.toFixed(2)
    ans1_62.textContent ="Your GPA of 1/2562 " + g1_62.toFixed(2) 
    ans2_62.textContent ="Your GPA of 2/2562 " + g2_62.toFixed(2)
    ans62.textContent = "Your GPA of 2562 " + g62.toFixed(2)
    ans1_63.textContent ="Your GPA of 1/2563 " + g1_63.toFixed(2) 
    ans2_63.textContent ="Your GPA of 2/2563 " + g2_63.toFixed(2)
    ans63.textContent = "Your GPA of 2563 " + g63.toFixed(2)
    ans1_64.textContent ="Your GPA of 1/2564 " + g1_64.toFixed(2) 
    ans2_64.textContent ="Your GPA of 2/2564 " + g2_64.toFixed(2)
    ans64.textContent = "Your GPA of 2564 " + g64.toFixed(2)
    ans1_65.textContent ="Your GPA of 1/2565 " + g1_65.toFixed(2) 
    ans2_65.textContent ="Your GPA of 2/2565 " + g2_65.toFixed(2)
    ans65.textContent = "Your GPA of 2565 " + g65.toFixed(2)
    List.append("_____________________________________")
    List.append(ansGpax)  
    List.append(GpaxMa)
    List.append("_____________________________________")
    List.append(ans1_62)
    List.append(ans2_62)
    List.append(ans62)
    List.append("_____________________________________")
    List.append(ans1_63)
    List.append(ans2_63)
    List.append(ans63)
    List.append("_____________________________________")
    List.append(ans1_64)
    List.append(ans2_64)
    List.append(ans64)
    List.append("_____________________________________")
    List.append(ans1_65)
    List.append(ans2_65)
    List.append(ans65)
})










