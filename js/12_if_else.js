// let a, b, c;

// a = 10;
// b = 20;
// c = 50;



// if(a>b) {                                         
//     if(a>c) {                             // if Me sirf Jawab Haa Hii Aata he 
//         console.log("A Is Biggest");
        
//     }else{
//         console.log("C is Biggest");                // Jinkaa upayog kar k ham 
        
//     }
// }else{                                    // our ELSE Mee jawab Haa our naa Kuch Bii aa saktaa he  
//     if(b>c){
//         console.log("B is Biggest");
//     }else{
//         console.log("C is Biggest");
//     }
// }



// Else If Ladder


let parcent = 10;  // Is k Dwara Hum Reasult k Grade Nikal Saktee hee jese Agar Parsant 95 se upar Aaya tooh tarminal me (Grade : A+) aayega

if(parcent > 100){
    console.log("Error : Invalid Percentage !!!!");
}else if(parcent >= 95) {
    console.log("Grade : A+");
}else if(parcent >= 90) {
    console.log("Grade : A");
}else if(parcent >= 85) {
    console.log("Grade : B+");
}else if(parcent >= 80) {
    console.log("Grade : B");
}else if(parcent >= 60) {
    console.log("Grade : C");
}else if(parcent >= 33) {
    console.log("Grade : D");
}
else{
    console.log("Grade : Fail");
       
}




