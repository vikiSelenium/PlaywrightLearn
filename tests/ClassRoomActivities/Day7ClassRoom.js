//1. PrintDuplicate [56,78,90,23,90,76,43,56]
let arr = [56,78,90,23,90,76,43,56]
arr.sort();
for(let i=0; i<arr.length;i++)
{
    if(arr[i]===arr[i+1])
    {
        console.log(arr[i])
    }
}
let arr2 = ["chrome",true,132.8]
arr2[5]="webkit"
console.log(arr2)
arr2.pop()
console.log(arr2)
arr2.push(false)
console.log(arr2)
arr2.shift()
console.log(arr2)