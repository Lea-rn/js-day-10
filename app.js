////// challange 3 correction 

//// mark : 
// const mark = {
//     fullName : "Mark Miller" , 
//     mass : 78 , 
//     height : 1.69 , 
//     calcBmi : function (){
//      this.bmi = this.mass / this.height**2
//         return this.bmi
//     }
// }



// console.log("mark-bmi:" , mark.calcBmi())
// console.log("mark-object : " , mark)

///// jhon : 

// const jhon = {
//     fullName : "jhon smith" , 
//     mass : 92 , 
//     height : 1.95 , 
//     calcBmi : function (){
//      this.bmi = this.mass / this.height**2
//         return this.bmi
//     }
// }

// console.log("jhon-bmi:" , jhon.calcBmi())
// console.log("jhon-object : " , jhon)


// if(mark.bmi>jhon.bmi){
//     console.log(`${mark.fullName}'s bmi (${mark.bmi}) is higher than ${jhon.fullName}'s bmi (${jhon.bmi}) `)
// }

// else {
//     console.log(`${jhon.fullName}'s bmi (${jhon.bmi}) is higher than ${mark.fullName}'s bmi (${mark.bmi}) `)
// }

//////////////////////////// loop (for , while) ////////////////////////////////////////////////////////////////

/// dry : d'ont repeat yourself ... 

// console.log("lifting weights repetition 1 🏋️‍♀️")
// console.log("lifting weights repetition 2 🏋️‍♀️")
// console.log("lifting weights repetition 3 🏋️‍♀️")
// console.log("lifting weights repetition 4 🏋️‍♀️")
// console.log("lifting weights repetition 5 🏋️‍♀️")
// console.log("lifting weights repetition 6 🏋️‍♀️")
// console.log("lifting weights repetition 7 🏋️‍♀️")
// console.log("lifting weights repetition 8 🏋️‍♀️")
// console.log("lifting weights repetition 9 🏋️‍♀️")
// console.log("lifting weights repetition 10 🏋️‍♀️")

// syntax:::
// for (valeur-intial ; stop-condition ; tzid wela tonkess ){

// }

// let x = 1 ; 
// console.log(x) 
// // x = x +1 
// x++
// console.log(x)



// for (let reptition = 1 ;  reptition<11 ;  reptition++ ) {
//  console.log(`lifting weights repetition ${reptition} 🏋️‍♀️`)
// }

// const lucasArray = ["lucas" , "smith" , 2025-1990 , "teacher" , ["peter","mark","jhon"] , true] ; 

// console.log(lucasArray[0])
// console.log(lucasArray[1])
// console.log(lucasArray[2])
// console.log(lucasArray[3])
// console.log(lucasArray[4])
// console.log(lucasArray[5])
// lucasArray.length = 6 ; 

///// exemple 1 : 
// for (let i = 0 ; i < lucasArray.length ; i++ ){
//  console.log(lucasArray[i],":",typeof(lucasArray[i]))
// }


///// exemple 2 : 

// const lucasArray = ["lucas" , "smith" , 2025-1990 , "teacher" , ["peter","mark","jhon"] , true] ; 
// const types = [] ;

// for (let i = 0 ; i < lucasArray.length ; i++){
//     ///1 
//     // types.push(typeof(lucasArray[i]))
//     /// 2 
//     types[i] = typeof(lucasArray[i])
// }

// console.log(lucasArray)
// console.log(types)


//// exemple 3 : 

// const years = [1991,2007,1969,2020] ; 
// const ages = [] ; 


// const calcAge = function (year){
// return 2025 - year
// }
// ages.push(calcAge(years[0]))
// ages.push(calcAge(years[1]))
// ages.push(calcAge(years[2])) 
// ages.push(calcAge(years[3]))


// for (let i = 0 ; i<years.length ; i++) {
//     //1
//     // ages.push(calcAge(years[i]))

//     //2
//     // ages[i] = calcAge(years[i])
// }
// console.log(ages)



// const lucasArray = ["lucas" , "smith" , 2025-1990 , "teacher" , ["peter","mark","jhon"] , true] ; 

// for (let i = 0 ; i<lucasArray.length ; i++){
//     console.log(lucasArray[i] ,":" , typeof(lucasArray[i]) )
// }


// console.log("---------------------------------------only strings -------------------------------------------------------")
//// keyword : continue 


// for (let i = 0 ; i<lucasArray.length ; i++){
//  if (typeof(lucasArray[i]) !== "string") continue ;
//  console.log(lucasArray[i] ,":" , typeof(lucasArray[i]) )
// }

///// keyword : break ;
// console.log("---------------------------------------break with number------------------------------------------------------------")

// for (let i = 0 ; i<lucasArray.length ; i++) {
//     if (typeof(lucasArray[i]) === "number") break ; 
//     console.log(lucasArray[i] ,":" , typeof(lucasArray[i]) )
// }



const numbers = [1,2,3,4]  

// for (let i = 0 ; i<numbers.length ; i++){
//     console.log(numbers[i])
// }


////// 4,3,2,1

for (let i=numbers.length-1 ; i>=0 ; i--){
    console.log(numbers[i]) ; 
}