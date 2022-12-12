class Account{
    min_Bal=500;
    acc_Bal=0;
    acc_Name=""
    set_AccountName(name){
        this.acc_Name=name
    }
    deposit_Amount(amount){
    this.acc_Bal=this.acc_Bal+amount
    }
    get_Bal(){
        return this.acc_Bal-this.min_Bal
    }
}
let a1=new Account()
let a2=new Account()
let a3=new Account()
console.log(a1)
console.log(a2)
console.log(a3)
a1.set_AccountName("Rahul")
a2.set_AccountName("priya")
a3.set_AccountName("meeni")
console.log("After Updating Name")
console.log(a1)
console.log(a2)
console.log(a3)
console.log("After Deposit")
a1.deposit_Amount(5000)
a2.deposit_Amount(50001)
a2.deposit_Amount(50002)
console.log(a1)
console.log(a2)
console.log(a3)