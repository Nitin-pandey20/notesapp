const HBD ={
    name:'HBD',
    guestlist :['kp','aps','ykb'],
    printlist(){
        console.log('printlist'+this.name);
        this.guestlist.forEach((guest)=>{
            console.log(guest + 'is attending' + this.name)
        })
    }
} 
  HBD.printlist()
// const squ =(x)=>{node
//     return x*x
// }
// console.log(squ(2));cd