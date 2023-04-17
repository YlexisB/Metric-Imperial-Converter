/*
1 meter l== 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound


-need to store input value in local storage
-if statements for calculations and text placement
-click events'
template strings
--number().toFixed(3)- to round to 3 nearest decimal places
-once clicked input needs to be cleared along w/local storage
*/

const convertBtn= document.getElementById("convert-btn")
let inputVal= document.getElementById("input-value")
let lengthValue=document.getElementById("length-value")
let volumeValue= document.getElementById("volume-value")
let massValue= document.getElementById("mass-value")
let isAlive=false

 let metersToFeet= 3.281
  let theMeters=metersToFeet
  
//VOLUME SECTION  //////////////////////// //////////////////////////////////////////////////
let liters=0.264

// MASS  SECTION////////////////////////////////////////////////////////////////////////////
let kilos= 2.204







// ////////////////////////////////////////////////////////////////////////
if(isAlive===false){
lengthValue.innerHTML=`0 meters= 0 feet |0 feet=0 meters`

volumeValue.innerHTML=`0 liters= 0 gallons | 0 gallons= 0 liters`

massValue.innerHTML=`0 kilos= 0 pounds | 0 pounds=0liters`
}
else if(isAlive === true){
 converter()   
    
}



// ////////////////////////////////////////////////////////////////////////////////////////////////
// /DISPLAY RESULTS/////////////////////////////////////////////////////////////////////////////////
convertBtn.addEventListener('click',function converter(){
    
let input=inputVal.value
let toFeet=input/ theMeters
let feet= toFeet.toFixed(3)
let toGallon=input/liters
let gallon=toGallon.toFixed(3)
let toKilos=input/kilos
let theKilos=toKilos.toFixed(3)
let meters= input*theMeters
let newMeters=meters.toFixed(3)
let myLiters=input* liters
let newLiters=myLiters.toFixed(3)
let myPounds=input*kilos
let newPounds=myPounds.toFixed(3)
  isAlive=true  
  
lengthValue.textContent=`${input} meters= ${newMeters} feet |  ${input} feet=${feet} meters`

volumeValue.innerHTML=`${input} liters= ${newLiters} gallons | ${input} gallons=${gallon} liters`

massValue.innerHTML=`${input} kilos= ${newPounds} pounds | ${input} pounds=${theKilos} kilos`
})












