class A{
    m1(){
        console.log("swathi")
    }
    m2(){
        console.log("meeni")
    }
}
class B extends A{
    m3(){
        console.log("sweety")
    }
}
let a1=new B()
a1.m1()
a1.m2()
a1.m3()