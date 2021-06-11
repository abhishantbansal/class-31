class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage('sprites/smoke.png');
    
    this.storage = [];
  }
  //i++

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    if(this.body.position.x>250 && this.body.velocity.x>2){
    this.storage.push([this.body.position.x,this.body.position.y])
    }
    for (var i = 0; i <this.storage.length; i = i+1) {
      image(this.smoke,this.storage[i][0],this.storage[i][1]);
    }
    console.log(this.storage.length);
  }
}
