// let arr = [2,8,9,4,6,1,3];
// //1 LENGTH FIND

// let arrlength = arr.length;
// console.log("Length = ",arrlength); // Iis K madad se hame let me jo  [- - ] iiske andar Jitnii Value Likhii hee Unkii LENTGTH totle kitnii hee yeeh patta Chaltaa hee      

// //2 Array k end mee ek element add Karna

// arr.push(59);  //[arr.push] kii Madad See Ham  upar joo Bracket mee joo Value Dii hee iis kii Madad se hum uss Sankhya k End mee kuch Bhii Add Kar Sakte hee bina uske andar jaae

// console.log(arr);
// console.table(arr) // iis [console.table] ke madad Se hame tarminal mee hame value our index donoo Alag alag box mee sahi tarikhe see batatee hee 

// // 3 ARRAY k last element Ko remove karo 

// arr.pop(); // [arr.push()] iis kii madad see hum array k last kaa element REMOVE  kar Sakte hee

// console.log(arr);

// // 4 Array k Begning  mee (starting)me  ek element Add karo.

// arr.unshift(59);  //[.unshift();] kii madad see hum Starting me aapna koii Bhii element Add kar Sakte hee.

// console.log(arr);

// // 5 Array ka First Element Remove Karo.

// arr.shift(); // [arr.shift();] iis kii madad see hamne Starting  me Element aad kiya tha uskoo REMOVE kaar Saktee He.

// console.log(arr);

// // 6  DO2 Arrays ko CONCATENATE (MARGE ) karo.

// let arr1 = [1,2,3];
// let arr2 = [4,5,6];
// let arr3 = arr.concat(arr2);            // Bakii Heeeee!!!!!!!

// console.log(arr3);

// 7 Check karoo kii Array mee SPECICIF element hee Yaa nahii

// let numbers = [1,2,3,4,7,6]; // iis mee hame Yah Batataa hee k ARRAY mee sahii mee koii Saccha element hee kii nahii.

// console.log(numbers.includes(7)); // TRUE
// console.log(numbers.includes(5)); // FALSE             // joo hame{TRUE/FALSE}  k rup mee batataa he
// console.log(numbers.includes(4)); // TRUE
// console.log(numbers.includes(8)); // FALSE


// // 8 Array koo Short Karo.

// console.log(numbers.sort());  // Isme Joo No. aage piche honge unkoo Sahi tatah see numbers mee line me set karega.

// // 9 Array koo REVERSE karo.

// console.log(numbers.reverse()); // iis [number.reverse();] is kii madad see hum FIRST element koo LAST mee /orr LAST element Koo FIRST mee Add kartee hee.  // Sidhe element koo puraa ULTA karte hee.

// // 10 Specific Element koo INDEX FIND karoo.

// let students = ['Gopal',' Avinash','Samir','Harish','Mayur'];

// console.log(students.indexOf('Mayur')); // [student.indexOf('Mayur');] jiss kii madad see hum Index mee joo Specific ELEMENT hee unkoo sarch kaar sakte he oue ooh element kitnee no. kaa hee yeeh Batatee hee jiss kii sharuat [0] see aage koo Amount tak hotii he

// console.log(students.indexOf('Harish')); // tarmonal mee "HARISH " koo 3rd Element Btaa raha hee

// 11 Slice Method  // nikal taa he

//let nums = [10,20,30,40,50];                                                  
//let slicenums = nums.slice(2,4);  // iisme se slice (2,4) hee tooh eeh upar nums [10,20,30,40,50] hee tooh iiisme see slice 2our 2k piche vale numbers koo nikal deta hee our sath meee slice 4hee tooh uusme see 4k baad joo number heee vaah nikal detee hee tooh tarminal aayegaa [30,40]
// let slicenums = nums.slice(3,4); // iisme see slice(3,4) hee tooh upar joo nums hee [10,20,30,40,50] tooh iis mee see in nums k 1,2,3,4,5 numbers hee naa tooh slice k andar (3,4) tooh 3our 3k piche k sare numbers nikal deta hee vese hii 4 joo hee vooh uske baad vala number nikal deta hee toooh iisme tatminal aayea    [40] 
 

// console.log(nums);
// console.log(slicenums);

                                    //[Slice] Chije nikaltaa he
                                   // [Splice] Chije Nikaltaa bhii hee our Add bhii Kartaa hee


// // 12 Splice Method (Start.Delete/add "0/1" , empty iss deleting / write a ...............Bakii hee.......)  // Splice mee Chijee Add bhii kar Saktee hee our chijee hatta bhii saktee hee.

// console.log("ORG",nums);                                                 //let nums = [10,20,30,40,50]
// console.log("Splice",nums.splice(2,0,56,89,87));       // Pahele splice mee "2" likha hee tooh tarminal '10,20' uske baad '56,89,87' our fir uske baad "30,40,50" // Tarminal[10,20,56,89,87,30,40,50] hogaa // 
// console.log(nums);



// // 13 JOIN() Array ke element ko "STRING" mee Convert kartaa he.

// console.log(nums.join("/"));






let fruits = ['Apple', 'Banana', 'Orange' , 'Strawberry', 'Mango'];


 // splice //[ELEMENTS koo hatataa hee/Remove Elements]
// fruits.splice(1,2);  
// console.log(fruits);  //tarminal [Apple, Strawberry , Mango] splice (1,2) hee tooh is mee index kii value 0see start hotii hee jese kii [0,1,2,3,4] hee tooh index mee 0pee [Apple]hee 1 pee [Banana] hee our 2pe[Orange] hee our 3 pee[Strawberry] our 4pee[Mango] hee tooh iis prakar tooh iis prakar splice k mutaabik splice (1,2, ) hee tooh ooh [1 our 2] koo nikal kee baki kii joo value bachii he [0,3,4] tooh iis prakar tarminal mee aayege [0,3,4] aayega   // tooh tarminal [Apple,Strawberry,Mango]


 // splice //[ELEMENTS koo Jodnaa hee/ADD Elements]
 fruits.splice(1,2,10,20,30);
 console.log(fruits); // iisme splice(1,2,10,20,30) mee (1) kii jagha pee [banana] hee our (2) kii jagha pee [orange] hee tooh in donoo kii hata k bakii kii joo value hee iiskii jagha pee bachi huii value dal k iinkii jagha pe joo splice me(1,2,10,20,30) hee tooh iisme see 1,2 kii value tooh mil gai bakii kii joo value splice mee add kiya hee jese kii (10,20,30) iinkoo Bich me dal k iiske baad bakii k [Fruits ] add kartaa hee 
 // tarminal / [Apple ,10,20,30,Strawberry , Mangoo] 
 













