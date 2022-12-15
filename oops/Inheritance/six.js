class Account{
    acc_Id;
    acc_Name;
    acc_Bal=0
    constructor(id,name,amount){
        this.acc_Id = id;
        this.acc_Name = name;
        this.acc_Bal = amount;
    }
}
class SA extends Account{acc_Id;
    acc_Name;
    acc_Bal=0
    constructor(id,name,amount){
        super()
        this.acc_Id = id;
        this.acc_Name = name;
        this.acc_Bal = amount;
    }

    
}
class CA extends Account{
    
}
let c1=new SA(101,"Swathi",45000)
let c2=new SA(102,"Sweety",45000)

let c3=new CA
console.log(c1)
console.log(c2)
