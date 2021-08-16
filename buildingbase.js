class buildingbase extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("base.gif");
    Matter.Body.setStatic(this.body,true);
    }
  
};
