let health =['whey','carnitine','preworkout','chia',true,2]

//Use push() to add elements into an array
health.push(5)
console.log(health)
//Use pop() to remove the last element
health.pop()
console.log(health)
//Use shift() to remove the first element
health.shift()
console.log(health)
//Use unshift() to add an element at the beginning
health.unshift("protein")
console.log(health)
//Use includes() to check whether an element exists
let chai=health.includes("chia")
console.log(chai)
//Use indexOf() to find the position of an element
let place=health.indexOf(2)
console.log(place)
//Use join() to convert array into string
let sst= health.join()
console.log(sst)

//Use reverse() to reverse the array
health.reverse()
console.log(health)
//Use sort() to sort the array
let gg=health.sort()
console.log(gg)