// let a = ["sai","teja","tarun","gopi","raju"]
// console.log(a.length)
// console.log([a.length-1])
// console.log(a[a.length-1])
// console.log(a.toString())
// console.log(a.join("venkat"))
// console.log(a.pop())
// console.log(a.push("venkat"))
// console.log(a)
// console.log(a.splice(1,3))
// console.log(a)
// console.log(a.slice(1,2))
// console.log(a)


let a = ["sai","teja","tarun","gopi","raju"]
//1.
console.log(a.length)
//2.
console.log(a.push("venkat"))
console.log(a)
//3.
console.log(a.pop())
console.log(a)
//4.
console.log(a.shift())
console.log(a)
//5.
console.log(a.unshift("sai"))
console.log(a)
//6.
console.log(a.reverse())
//7.
console.log(a.indexOf("tarun"))
//8.
console.log(a.includes("gopi"))
console.log(a.includes("bala"))
//9.
let b = [8,6,128,76,138,73,9621,19,3]
let c =b.sort((x,y)=>x-y)
console.log(c)
//10.
console.log(a.join())
console.log(a.join("-"))


//Multiple Array Methods:

//1.Write a code snippet that adds an element to the end of an array, then removes the first element.
let array1 = ["AP","TS","UP","MP"]
console.log(array1)
let array2 = array1.push("HP")+array1.shift()
console.log(array1)

//2.How can you reverse an array and then join the elements into a string?
var array3 = ["AP","TS","UP","MP"]
var array4 = array3.reverse()
console.log(array4)
var array4 = array4.join()
console.log(array4)

//3.Write a code that first sorts an array in ascending order, then removes the last element.
var array5 = [423,84,62,741,46,123]
var array6 = array5.sort((x,y)=>(x-y))
array6.pop()
console.log(array6)

//4.How do you add two elements at the beginning of an array, then remove the first element and find the length of the array?
var array7 = [423,84,62,741,46,123]
array7.unshift(12,34)+array7.shift()
console.log(array7)
console.log(array7.length)

//5.How do you combine two arrays, sort the combined array, and then remove the last element?
var array8 = [423,84,62]
var array9 = [741,46,183]
var array10 = array8.concat(array9)
array10.sort((x,y)=>(x-y))+array10.pop()
console.log(array10)

//1.
let Guestlist = ["Alice", "Bob", "Charlie", "David"]
console.log(Guestlist)
let update = Guestlist.unshift("Dad")+Guestlist.pop()
console.log(Guestlist)
console.log(Guestlist.includes("Bob"))
console.log("Final list: ",Guestlist)

//2.
let Sentence = "Learn,Practice,Improve"
let change = Sentence.split(",")
console.log(change)
let reverse = change.reverse()
console.log(reverse)
let string = reverse.join(" ")
console.log(string)

//3.
let music_arr1 = ["Song1", "Song2", "Song3"]
let music_arr2 = ["Song4", "Song5"]
let combined_music_array = music_arr1.concat(music_arr2)
console.log(combined_music_array)
combined_music_array.shift()+combined_music_array.push("song6")
console.log(combined_music_array)

//4.
let movies = ["Inception", "Titanic", "Avatar", "Interstellar", "Gladiator"]
console.log("List: ",movies)
let middle = movies.slice(1,4)
console.log("Middle of the list: ",middle)
let list = ["The Matrix", "The Godfather"] 
let combined = middle.concat(list)
console.log("Combined list: ",combined)
let combinedlist = combined.reverse() 
console.log(combinedlist)

//5.
let stringoperation = "John,Doe,Jane,Smith"
let array = stringoperation.split(",")
console.log(array)
let include = array.includes("Jane")
console.log(include)
let reverse = array.reverse()
console.log(reverse)
let str = reverse.join(" ")
console.log(str)

//6.
let numarray = [1, 2, 3, 4, 5]
console.log(numarray)
numarray.shift() + numarray.push(6,7)
console.log("Final array: ",numarray)
console.log("Length: ",numarray.length)

//7.
let shoppingcart = ["Milk", "Bread", "Eggs", "Butter"]
shoppingcart.includes("Eggs") + shoppingcart.pop() + shoppingcart.push("Cheese","Juice")
console.log(shoppingcart)

//8.
let ar1 = ["Alice", "Bob", "Charlie"]
let ar2 = ["David", "Eve"]
let reverse = ar1.reverse()
console.log(reverse)
let newar = reverse.concat(ar2)
console.log("Combined array:",newar)
newar.unshift("Frank")
console.log("Final list: ",newar)

//9.
let cart = ["Milk", "Bread", "Eggs", "Butter"]
console.log("List: ",cart)
let index = cart.indexOf("Eggs")
console.log("Index of Eggs is: ",index)
cart.splice(2,1,"Cheese") + cart.unshift("Juice")
console.log(cart)
