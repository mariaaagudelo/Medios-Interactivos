var x=0;
var y=0;
var x2=50;
var y2=50;

function setup() {
  createCanvas(400,400);
}

function draw() {
  
  noStroke(0);
  // fondo en blanco 
  background(255);
  fill(0)
  
  
  for(var ma=0; ma<=350; ma=ma+50){
    
    
    
    // 1) triangulo izq inf. 
    triangle(x,400,50,400,50,350)
    
    
    //2) fila diagonal de izq inferior 
    
    triangle(x+ma,350+ma,x2+ma,350+ma,50+ma,300+ma);
            fill(0);
            
     // 3) fila 
    triangle(x+ma,250+ma,x+ma,300+ma,x2+ma,250+ma);
    //4 fila 
    triangle(x+ma,200+ma,x+ma,250+ma,x2+ma,200+ma);
    // 5 fila 
    triangle(x+ma,200+ma,x2+ma,200+ma,x2+ma,150+ma);
    // 6 fila 
    triangle(x+ma,200+ma,x2+ma,200+ma,x2+ma,150+ma);
    //7fila
    triangle(x+ma,150+ma,x2+ma,150+ma,x2+ma,100+ma);
    //8 fila
    triangle(x+ma,100+ma,x+ma,50+ma,x2+ma,y+50+ma);
    //9 fila 
    triangle(x+ma,y+ma,x+ma,y+ma+50,x+ma+50,y+ma);
    //10 fila 
    triangle(50+ma,y2+ma,100+ma,y2+ma,100+ma,y+ma);
    //11 fila
    triangle(100+ma,y2+ma,150+ma,y2+ma,150+ma,y+ma);
    //11 fia 
    triangle(150+ma,y2+ma,150+ma,y+ma,200+ma,y+ma);
    //12 fila 
    triangle(200+ma,y2+ma,200+ma,y+ma,250+ma,y+ma);
    //13 fila 
    triangle(250+ma,y2+ma,300+ma,y2+ma,300+ma,y+ma);
    //14 fila 
    triangle(300+ma,y2+ma,350+ma,y2+ma,350+ma,y+ma);
    
    triangle(350,y2,350,y,400,y);
  }
}
