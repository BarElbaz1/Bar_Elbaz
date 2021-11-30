var txt = "abc";
var txt1= txt.length;
console.log(txt1)



const d = new Date();
console.log(d);
var h = d.getHours();
console.log(h);

if (h<12){
    greeting = "good morning";
}
else{
    greeting = "shut Up";
}
console.log(greeting);

function greet(){
document.getElementById("p").innerHTML = greeting;

};

var cars = [ "toyota" , "honda", "ford"];
console.log(cars[0]);

var i;
for(i=0; i<cars.length; i++){
    console.log(cars[i]);

}











function play(){
    setTimeout(Function()){
          document.getElementById("img").src= img[i];
          i++;
          if(i<img.length){
              play();
              
          }
    }

  
}