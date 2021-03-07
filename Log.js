class Log extends BaseClass{
    constructor(x, y, height, angle) {
      super(x,y,20,height,angle)   // we use super to fill out the criteria in the constructor of the Base Class
      this.image = loadImage("sprites/wood2.png");
      Matter.Body.setAngle(this.body, angle);
    }
    
  };
  