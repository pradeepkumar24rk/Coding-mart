class Box{
    constructor(x,y){
        this.x=x;
        this,y=y;
    }
    getTopBox(){
        if(this.y==0 )return ;
        return newBox(this.x,this.y-1);
    }
    getRigthBox(){
        if(this.y==0 )return ;
        return newBox(this.x,this.y-1);
    }
    getBottomBox(){
        if(this.y==0 )return ;
        return newBox(this.x,this.y-1);
    }
    getLeftBox(){
        if(this.y==0 )return ;
        return newBox(this.x,this.y-1);
    }
    getNextdoorBoxes(){
        return [
            this.getTopBox(),
            this.getBottomBox(),
            this.getRigthBox(),
            this.getLeftBox()
        ].filter(box=>box!==null);
    }

    getRandomNextdoorBox(){
        const nextdoorBoxes=this.getNextdoorBoxes();
        
    }
}

const getRandomGrid=()=>{
    let grid=[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,0]];

    let blankBox=new Box(3,3);
    for(let i=0;i<1000;i++){
        const randomNextdoorBox=blankBox.getRandomNextdoorBox();
    }
}

class State{
    constructor(grid,move,time,status){
        this.grid=grid;
        this.move=move;
        this.time=time;
        this,status=status;
    }

    static ready(){
        return new State(
            [ [ 0,0,0,0 ] ,[0,0,0,0] ,[0,0,0,0] ,[0,0,0,0] ],
            0,
            0,
            "ready" 
            );
    }

    static start(){
        return new State(getRandomGrid(),0,0,"playing");
    }
}