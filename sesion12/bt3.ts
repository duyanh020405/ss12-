class Person2 {
    id:number
    name:string
    constructor(id:number,name:string){
        this.id=id
        this.name=name
    }
    show(){
        console.log(this.id,this.name);
        
    }
}
class Student2 extends Person2{
    constructor(id:number,name:string){
        super(id,name)
        this.id=id
        this.name=name
    }
}
const checkInf3:Student2= new Student2(1,"duy")
checkInf3.show()