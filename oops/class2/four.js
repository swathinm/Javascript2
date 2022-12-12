class Account{
    acc_Id;
    acc_Name;
    acc_Bal=0
    constructor(id,name,amount){
        this.acc_Id = id;
        this.acc_Name = name ;
        this.acc_Bal = amount ;
     }
}
let a1= new Account(101,"rahul", 45000)
let a2= new Account(102,"priya", 55000)
console.log(a1)
console.log(a2)
