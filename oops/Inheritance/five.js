class A{
    constructor(){
        console.log("Swathi")
    }
}
class B extends A{
    constructor(){
        super()
        console.log("Sweety")
    }
}
new B()