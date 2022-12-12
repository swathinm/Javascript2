class Account{
    min_Bal=500;
    acc_Bal=0
    deposit_Amount(amount){
        this.acc_Bal=this.acc_bal+amount
    }
    get_Bal(){
        return this.acc_Bal-this.min_Bal
    }
}
let a1=new Account()
let a2=new Account()
console.log(a1)
console.log(a2)
console.log("After Deposit")

a1.deposit_Amount(5000)
a1.deposit_Amount(4500)
a2.deposit_Amount(49999);
console.log(a1)
console.log(a2)

console.log("Display Bal")
let r1=a1.get_Bal()
let r2=a2.get_Bal()
console.log(r1)
console.log(r2)