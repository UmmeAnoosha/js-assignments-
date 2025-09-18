// question:01
// let valueA = 10
// document.write(`The value of a is: ${valueA} <br><br>`)
// let number1 =++valueA
// document.write(`The value of ++a is: ${number1} <br>`)
// document.write(`Now the value of a is: ${number1}<br><br>`)
// document.write(`The value of a++ is: ${valueA}<br>`)
// let number2 =valueA++
// document.write(`Now the value of a is: ${valueA}<br><br>`)
// let number3 = --valueA
// document.write(`The value of --a is: ${valueA}<br>`)
// document.write(`Now the value of a is: ${valueA}<br><br>`)
// document.write(`The value of a-- is: ${valueA}<br>`)
// let number4 =valueA--
// document.write(`Now the value of a is: ${valueA}`)

// qusetion:02
// let a =2
// let b =1
// let valueA =--a
// document.write(`a is:${valueA}<br>`)
// let valueB =--b + ++b + b--
// document.write(`b is: ${valueB}<br>`)
// let calculate =--a - --b + ++b + b--
// document.write(`the result is: ${calculate}`)

// question:03
// let userName =prompt("What`s your name?")
// alert("wellcome")

// question:05
// let userNumber =+prompt("Write your number")
// alert(userNumber*6)
// if(userNumber=""){
//     alert(5)
// }

// questio:06
// let sub1 =prompt("write your first subject")
// let sub2 =prompt("write your second subject")
// let sub3 =prompt("write your third subject")

// let sub1Marks = 100
// let sub2Marks = 100
// let sub3Marks = 100

// let sub1ObtainedMmarks =+prompt(`write your obtained marks of ${sub1}`)
// let sub2ObtainedMmarks =+prompt(`write your obtained marks of ${sub2}`)
// let sub3ObtainedMmarks =+prompt(`write your obtained marks of ${sub3}`)

// let sub1Calculate = sub1ObtainedMmarks/sub1Marks*100
// let sub2Calculate = sub2ObtainedMmarks/sub2Marks*100
// let sub3Calculate = sub3ObtainedMmarks/sub3Marks*100

// let sub1Percentage = sub1Calculate
// let sub2Percentage = sub2Calculate
// let sub3Percentage = sub3Calculate

// document.write(`<table border>
//         <tr>
//             <th>Subject</th>
//             <th>Totalmarks</th>
//             <th>Obtainedmarks</th>
//             <th>Percentage</th>
//         </tr>
//         <tr>
//             <td>${sub1}</td>
//             <td>${sub1Marks}</td>
//             <td>${sub1ObtainedMmarks}</td>
//             <td>${sub1Percentage}</td>
//         </tr>
//         <tr>
//             <td>${sub2}</td>
//             <td>${sub2Marks}</td>
//             <td>${sub2ObtainedMmarks}</td>
//             <td>${sub2Percentage}</td>
//         </tr>
//         <tr>
//             <td>${sub3}</td>
//             <td>${sub3Marks}</td>
//             <td>${sub3ObtainedMmarks}</td>
//             <td>${sub3Percentage}</td>
//         </tr>
//     </table>)`)