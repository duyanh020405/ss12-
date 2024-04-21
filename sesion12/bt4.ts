class Vehicle2 {
    name:string
    id:number
    speed:number
    constructor(name:string,id:number,speed:number){
        this.name= name
        this.id=id
        this.speed=speed
    }
    giam(newSpeed:number){
        if(newSpeed < this.speed){
            this.speed=newSpeed
        }
        else{
           return
        }

    }
    tang(newSpeed:number){
        if(newSpeed > this.speed){
            this.speed=newSpeed
        }
        else{
           return
        }
    }
    show(){
        console.log(this.name,this.id,this.speed);
        
    }
}
class Bicycle extends Vehicle2{
    private gear: number
    constructor(name:string,id:number,speed:number,gear:number){
        super(name,id,speed)
        this.gear=gear

    }
}
const checkInf4:Bicycle= new Bicycle("xeoto",5,8,8)
checkInf4.giam(7)
checkInf4.show()