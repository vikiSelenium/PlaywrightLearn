

let s ="Hello World";
let op = s.split(" ");
 let ops = op[op.length-1]
console.log(ops.length)

let s1 = " fly me to the moon "
let op1 = s1.split(" ");
//console.log(op1);
let ops1 = op1[op1.length-2]

console.log(ops1.length)


//Anagaram


function learnAnagram(std1,std2){



let wd1=std1.toLowerCase()
let wd2=std2.toLowerCase()

let dd1=wd1.split("").sort().join("")
let dd2 =wd2.split("").sort().join("")


return dd1===dd2
}
console.log(learnAnagram("silent","listen"))








