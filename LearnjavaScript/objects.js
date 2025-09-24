

// const credentials={

import { clear } from "console"

//     username:"admin",
//     password:"admin123",

//     data:{
//         fathername:"raju",
//         mothername:" gowri"
//     }
// }
// // console.log(credentials.username)
// // console.log(credentials.password)
// console.log(credentials.data.fathername)
// console.log(credentials.data.mothername)        
// console.log(credentials['username'])
// console.log(credentials['data']['fathername'])
// credentials['username']="Lucky"
// console.log(credentials['username'])

// credentials['username']="nandini"
// console.log(credentials['username'])

// delete credentials['username']   //delete the key value pair
// console.log(credentials['username'])



const menuitem={
    menu1:"idli",
    menu2:"dosa",
    menu3:"vada",
    menu4:"puri",
    menu5:"biryani"
}


for(let item in menuitem)
{
    console.log("loops statrts")

    console.log(menuitem[item])
    
    console.log("loops ends")   
}
