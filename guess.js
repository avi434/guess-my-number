// let bill=245;
// let tip1=(15/100)*bill;
// let tip2=(20/100)*bill;

// let dart;
// bill>=50&&bill<=300 ? dart=tip1:dart=tip2;
// let fv=bill+dart;
// console.log(`the bill is ${bill},tip is ${dart},totalvalue is ${fv}`);

// let calcavg=(score1,score2,score3)=>{
//     avg=(score1+score2+score3)/3;
//     return avg;
// }
//  let dolavg=calcavg(85,54,41);
//  let koalavg=calcavg(23,34,47);
// console.log(`avgscore of dolphin is ${dolavg},avgscor of koala is ${koalavg}`);
// function checkwinner(dolavg,koalavg){
//    if(dolavg>=2*koalavg){
//    	console.log(`dolphin is winner(${dolavg} vs ${koalavg})`);
//    }
//    else if(koalavg>=2*dolavg){
//    	console.log(`koala is winner(${dolavg} vs ${koalavg})`);
//    }
//    else{
//    	console.log(`nobody wins(${dolavg} vs ${koalavg})`);
//    }

// }
// checkwinner(dolavg,koalavg);
  'use strict'
//  let billvalue;
//  let tipvalue1=(15/100)*billvalue;
// let tipvalue2=(20/100)*billvalue;

// function caltip(billvalue){
//  let tipvalue1=(15/100)*billvalue;
// let tipvalue2=(20/100)*billvalue;

 
//    if(billvalue>50 && billvalue<300){
//       return tipvalue1;
//    }
//    else{
//       return tipvalue2;
//    }
// }
// let tipvalue=caltip(100);
// console.log(tipvalue);
// let bills=[125,555,4];
// console.log(bills);
// let tips=[caltip(bills[0]),caltip(bills[1]),caltip(bills[bills.length-1])];
// console.log(tips);
// let total=[bills[0]+tips[0],bills[1]+tips[1],bills[bills.length-1]+tips[tips.length-1]];
// console.log(total);

// console.log("enter your numbers");
// let a=[];
// let n=a.length;
// for(let i=0;i<n;i++){
//    console.log(a[i]);
// }
// let jones={
//    firstname:"jonas",
//    lastname:"sundaram",
//    friends:["marvel","dc","avinash"],
//    birthyear:1999,
//    calcAge:function(){
//     let age=2037-this.birthyear
//     return age;
//    },
//    job:"teacher",
//    hasDriversLicense:"false",
//    getSummary:function(){
//     console.log(`${this.firstname} is a${this.calcAge()} old ${this.job}and he has ${this.hasDriversLicense==="true"? "a":"no"} driving licence`)
//    }
// };
// // let age=jones.calcAge(1999);
// // if(jones.hasDriversLicense==="true"){
// // console.log(`${jones.firstname} is a ${age} old ${jones.job} and he has a driving license`);
// // }
// // else{
// //   console.log(`${jones.firstname} is a ${age} old ${jones.job} and he has no driving license`);

// // }
// console.log(jones.getSummary());
// let mark={
// fullname:"mark miller",
// mass:78,
// height:1.69,
// calcBmi:function(){
// let BMI=(this.mass)/((this .height)*(this.height));
// return BMI;
// }
// };
// let john={
// fullname:"john smith",
// mass:92,
// height:1.95,
// calcBmi:function(){
// let BMI=(this.mass)/((this .height)*(this.height));
// return BMI;
// }
// };
// console.log(`${mark.fullname} BMI (${mark.calcBmi()}) is ${mark.calcBmi()>john.calcBmi()? "higher":"lower"} than ${john.fullname} BMI (${john.calcBmi()})`);
// let calcTip=function(bills){
//   return bills>50&&bills<300?  bills*0.15:bills*0.20;
// }
// let bills=[ 22, 295, 176, 440, 37, 105, 10, 1100, 86 ,52];
// let tips=[];
//  let totals=[];


// for(let i=0;i<bills.length;i++){
//   const tip=calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(tip+calcTip(bills[i]));
// }
// console.log(bills,tips,totals);
// let totals=[1,2,3,4,5];

// let calcAverage=function(arr){
//   let sum=0;
//   for(let i=0;i<arr.length;i++){
//     sum=sum+arr[i];
//   }
//   let avg=sum/arr.length;
//   return avg
// }
// console.log(calcAverage(totals));
// const temps=[3,-2,-3,-4,3,5,7,9,10];
// let tempaltitude=(temp)=>{
//   let max=temp[0];
//   let min=temp[0];
//   for (var i = 1; i<temp.length ; i++) {
//     if (typeof temp[i]!=="number") 
//       continue;
//     if(temp[i]>max){
//       max=temp[i];
//     }
//    if(temp[i]<min)
//     min=temp[i];
//   }
// console.log(max,min,`tempaltitude = ${max-min}`
//   );
// }
// tempaltitude([3,-2,-3,-4,3,"error",5,7,9,10]);

// let data1=[17,21,27,40];
// let ans=""
// let printForecast=(arr)=>{
// for (var i =0; i <arr.length; i++) {
//   ans+=`will print ${arr[i]}^c in ${i+1} days... `
//  }
//  console.log(arr,ans);
 
// }
// printForecast(data1);
function again(){
  const num=Math.trunc(Math.random()*20)+1;
  document.querySelector('.number').textContent="?";
  console.log(num);
  return num;
}
let num=again();
let high=-1;
let score=20;
document.querySelector('.check').addEventListener('click',function(){
let guess=Number(document.querySelector('.guess').value);
if(!guess){
  document.querySelector('.message').textContent="no number";
}
else if(guess===num){
  document.querySelector('.message').textContent="won game";
  document.querySelector('.number').textContent=`${num}`;
   document.querySelector('body').style.backgroundColor='#00FF00';
  if(score>high){
      high=score;
      document.querySelector('.highscore').textContent=`${high}`;
  }
}
else if(guess!==num){
  score--;
  if(score===0){
    document.querySelector('.check').disabled=true;
    document.querySelector('.message').textContent="You lose the game";
  document.querySelector('.number').textContent=`${num}`;
    // document.querySelector('.score').textContent=0;
  }
  else document.querySelector('.message').textContent=guess>num ? "too high":"too low";
  document.querySelector('.score').textContent=score;
}
// else if(guess<num){
//   score--;
//   if(score===0){
//         document.querySelector('.check').disabled=true;
//         document.querySelector('.message').textContent="You lose the game";
//         document.querySelector('.score').textContent=0;
//         document.querySelector('.number').textContent=`${num}`;
//   }
//   else{
//      document.querySelector('.message').textContent="too low";
//   document.querySelector('.score').textContent=score;
//   }
// }
 })
document.querySelector('.again').addEventListener('click',function(){
     num= again();
    document.querySelector('.check').disabled=false;
    document.querySelector('.message').textContent="start guessing";
    document.querySelector('.score').textContent=20;
    document.querySelector('.number').textContent="?";
    document.querySelector('.guess').value=null;
    document.querySelector('body').style.backgroundColor='#222';
    score=20;
})




