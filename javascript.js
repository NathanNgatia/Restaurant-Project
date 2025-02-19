
var foodItem1 =200
var foodItem2 =150

var total= foodItem1 + foodItem2

console.log(total)

var fooditems = ["chips","sausage","soda","burgers","tea","mandazi"]

var foodprices =[200,25,60,180,100,20]
//if statements
var storedpasssword = "12345"
var storedusername = "admin"

var typedpasssword = "12345"
var typedusername = "admin"

//checkusername
if (typedusername == storedusername && typedpasssword == storedpasssword){
    console.log("You have logged in")
} else {
    console.log("Try again")
}
//checkpassword
// if (typedpasssword==storedpasssword){
//     console.log("You have logged in")
// } else{
//     console.log("Try again")
// }

//Loops
for (i = 0; i<=5; i++ ){
    console.log(i)
}

for (item in fooditems){
    console.log(fooditems[item])
}

//functions

function calculateTotal(){   //declare function
    var foodItem1 =200
    var foodItem2 =150
    
    var total= foodItem1 + foodItem2
    
    console.log(total) 
}

calculateTotal()   //call function

function calculateOrder(foodItem1,foodItem2){  
    var total = foodItem1 + foodItem2
    return total
}

console.log(calculateOrder(180,100))  