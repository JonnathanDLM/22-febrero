class pelota {
  constructor() {
    this.x = 80;
    this.y = 80;
    this.dx = 50;
    this.dy = 50;
    this.velx = random (-10,10);
    this.vely = random (-10,10);
    this.R = random (0,255,0);
    this.G = random (0,255,0);
    this.B = random (0,255,0);
  }

  dibujar() {
    fill(this.R,this.G,this.B,this.B)
    noStroke();
    ellipse (this.x, this.y, this.dx, this.dy);
  }

  mover() {
    this.x = this.x + this.velx;
    this.y = this.y + this.vely;
  }

  salirx() {
    var salx;
    if (this.x < 5 || this.x > width-5) {
      salx = true;
    } else {
      salx = false;
    }
    return salx
    
  }
  rebotarx(){
   this.velx = (-1)*this.velx;
  }
  saliry() {
    var saly;
    if (this.y < 10 || this.y > width-10) {
      saly = true;
    } else {
      saly = false;
    }
    return saly
    
  }
  rebotary(){
   this.vely = (-1)*this.vely;
  }
};
