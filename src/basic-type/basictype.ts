import { type } from "os";
// 1, Build in type .....................



let idNo: number = 590
 let myNumber:number = 340
 myNumber = 790
 console.log(myNumber)


 let myName:string = "Mohammad Mamun";
 myName= "Juboraj Islam mamun"

 let isAdmin: boolean = true

/*  2, Uninon Data type------------------------- 
 explore: Eker odik type use korte bebohar hoy  */
 let userId: number| string;

 userId = 203

 const userhendeler = (userId: number| boolean): void =>{
       console.log(userId)
 }

 userhendeler(708)

/*  3, Array data type-------------------------
 explore: array modde kon dorner type hobe ta bole dite hobe  */

 let userAddress: string[];
 userAddress= ["chitagong" , "dhaka" , "commilla"]

 let userIdNo : number[] = [33, 55, 89]

 let address : Array<string> = ['chittagong']



//  3,1 Arrray Multiple type -----------
let userInfo : (number| string)[];
userInfo = [33 , "mamun", 444, 'nadim']

let moreUserInfo :(boolean|string)[] = [true, "33"]



/* 4, Typle data type -----------------
explore: array key , value niye kaj korte eti use kora hoy  */
let users:[number , string];
users = [1 , "mamun" ,]

let moreUser:[boolean , string] = [true , "mamun"]


/* 5, Enum data type ----------------------
explore: ei data type likte hole enam dite hobe. er vitor veribale dite hobe ja indeex onusare man pabe  */

enum RequestType {
      readData,
      saveData,
      deleteData,
}

enum RequestType2 {
      readData= "READ_Daata",
      saveData= "SAVE_data",
      deleteData= "DELETE_data"
}


/* 6, Any Type
explore: je veribale er type declar kora hoy na etike any type bole */

let userName;
let profile;


// 7, object type --------------
let user: {userName: string , id: number}
user = {userName: "Mamun" , id: 344}

let moreUser1: {userName: string , id:(number| string)}
moreUser1 = {userName: "Mamuun" , id: "56"}

let moreUser2 : {usrname: (string| boolean) , id: (number| string)} = {usrname: true , id: "555"}


// 7-2, array of object --------------
let id: object[];

id = [{name: "mamun"}]



/* 7-3, Optonal type --------------------
explore kuno varivale use korte na caile  */
const myInfromation = (name:string , id:(string| number) , subject?: string): void =>{
      console.log(name, id)
}

myInfromation("mamun" , 444 , )


/* 8, custome data type 
explore: custome babe type create kora */ 

type Alluser = {name: string , id: number}

let user5: Alluser = {name: 'mamun' , id: 44}

let user6 : Alluser = {name: "nadim" , id: 56}


/* 8-1, Onk somoy verible er man ki hobe ta janty pari . sei jonno etike ekti varible reke dite pari */

type RequreType = "GET" | "POST"

const userPOST = (user: RequreType): void =>{
      console.log(user)
}
userPOST("POST")

