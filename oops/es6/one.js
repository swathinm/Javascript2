class A{
    get_Details(){
        console.log("gm")
    }
}class B extends A{
    constructor(){
        super();
        super.get_Details()
    }
    get_Ready(){
        super.get_Details()
    }
}
new B().get_Ready()