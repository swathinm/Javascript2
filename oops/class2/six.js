class Account{
    min_Bal=500;
    constructor(id,name,amount){
        this.acc_Id=id;
        this.acc_Name=name;
        this.acc_Amount=amount;
    }
    open_Account(){
        console.log("Account opened Sucessfully")
    }
    deposit(amount){
        this.acc_Amount=this.acc_Amount+amount
    }
    get_Bal(){
        return this.acc_Amount-this.min_Bal
    }
    

}
let a1= new Account(1,"swathi",30000)
let a2= new Account(2,"meeni",35000)

a1.deposit(5000)
a2.deposit(5000)
console.log(a1)
console.log(a2)


console.log(a1.get_Bal())
console.log(a2.get_Bal())

