function setup() {
  createCanvas(300, 600);

  noStroke();

  //Gran triangulo verde a la izquierda
  fill(66, 87, 70);
  triangle(5, 243, 100, 406, 5, 490);

  //triangulito amarillo abajo
  fill(255, 204, 079);
  triangle(5, 457, 50, 520, 5, 580);


  //TRIANGULOS GRANDES
  //negro hacia abajo
  fill(10, 10, 10);
  triangle(5, 397, 300, 600, 5, 430);

  // tres negros abajo
  triangle(80, 560, 410, 800, 75, 570);
  triangle(69, 575, 410, 800, 65, 580);
  triangle(60, 590, 410, 800, 53, 599);

  //grande hacia arriba
  triangle(50, 233, 300, 0, 50, 260);


  //Cuadro azul 

  fill(062, 095, 138);
  quad(150, 379, 186, 397, 170, 487, 130, 480);
 
  //cuadro amarillo
  fill(255, 204, 079);
  quad(155, 327, 235, 361, 204, 410, 155, 379);


  //cuadro rojo
  fill(175, 043, 030);
  quad(140, 319, 190, 300, 165, 460, 138, 450);

  //triangulo amarillo
  fill(255, 204, 079);
  triangle(149, 250, 220, 180, 220, 208);

  //cuadradito negro derecha
  fill(10, 10, 10);
  quad(230, 180, 238, 175, 242, 185, 232, 189);







  stroke(150, 150, 150);


  //cuadro izquierdo
  //cuadro grande

 // quad(5, 325, 75, 325, 75, 397, 5, 397);  

  // primera linea horizontal
  //1 gris
  fill(210, 210, 210);
  quad(5, 325, 22, 325, 22, 342, 5, 342);
  //2 blanco
  fill(255, 255, 255);
  quad(22, 325, 39, 325, 39, 342, 22, 342);
  //3 negro
  fill(0, 0, 0);
  quad(39, 325, 56, 325, 56, 342, 39, 342);
  //4 blanco
  fill(255, 255, 255);
  quad(56, 325, 75, 325, 75, 342, 56, 342);



  //segunda linea horizontal
  //1 blanco
  fill(255, 255, 255);
  quad(5, 342, 22, 342, 22, 359, 5, 359);
  //2 negro
  fill(0, 0, 0);
  quad(22, 342, 39, 342, 39, 359, 22, 359);
  //3 blanco
  fill(255, 255, 255);
  quad(39, 342, 56, 342, 56, 359, 39, 359);
  //4 negro
  fill(154, 152, 152);
  quad(56, 342, 75, 342, 75, 359, 56, 359);


  //tercera linea horizontal
  //1 gris
  fill(154, 152, 152);
  quad(5, 359, 22, 359, 22, 375, 5, 375);
  //2 blanco
  fill(255, 255, 255);
  quad(22, 359, 39, 359, 39, 375, 22, 375);   
  //3 gris
  fill(154, 152, 152);
  quad(39, 359, 56, 359, 56, 375, 39, 375);
  //4 blanco
  fill(255, 255, 255);
  quad(56, 359, 75, 359, 75, 375, 56, 375);


  // cuarta linea horizontal
  //1 blanco
  fill(255, 255, 255);
  quad(5, 375, 22, 375, 22, 397, 5, 397);
  //2 Negro
  fill(10, 10, 10);
  quad(22, 375, 39, 375, 39, 397, 22, 397);

  //3 balnco
  fill(255, 255, 255);
  quad(39, 375, 56, 375, 56, 397, 39, 397);
  //4 gris
  fill(071, 075, 078);
  quad(56, 375, 75, 375, 75, 397, 56, 397);



  //cuadrado derecho grande!
  //quad  (150, 325, 225, 325, 225, 397, 150, 397);


  //cuadrado derecho grande primera fila horizontal
  //1 negro 
  fill(0, 0, 0)
    quad(150, 325, 168, 325, 168, 343, 150, 343);

  //2 cuadrado blanco transparente   !!!!!!
  fill(255, 255, 255, 250);
  quad(168, 325, 186, 325, 186, 343, 168, 343);

  //3 negro transparente (rojo)
  fill(0, 0, 0, 250);
  quad(186, 325, 204, 325, 204, 343, 186, 343);

  //4  blanco 
  fill(255, 255, 255);
  quad(204, 325, 225, 325, 225, 343, 204, 343);





  //segunda fila horizontal
  //1 horizontal blanco
  fill(255, 255, 255, 200);
  quad(150, 343, 168, 343, 168, 361, 150, 361);

  //2 gris 
  fill(90, 88, 88,255);
  quad(168, 343, 186, 343, 186, 361, 168, 361);

  //3 amarillo
  fill(255, 204, 079, 250);
  quad(186, 343, 204, 343, 204, 361, 186, 361);

  //4 negro
  fill(100, 100, 100);
  quad(204, 343, 225, 343, 225, 361, 204, 361);



  //tercera fila horiontal
  //1 negro
  fill(100, 100, 100);
  quad(150, 361, 168, 361, 168, 379, 150, 379);

  //2 rojo
  fill(175, 043, 030);
  quad(168, 361, 186, 361, 186, 379, 168, 379);

  //3 negro transparente
  fill(100, 100, 100);
  quad(186, 361, 204, 361, 204, 379, 186, 379);

  //4 amarillo
  fill(255, 204, 079, 250);
  quad(204, 361, 225, 361, 225, 379, 204, 379);




  //cuarta fila horizontal
  //1  inferior izq blanco
  fill(255, 255, 255);
  quad(150, 379, 168, 379, 168, 397, 150, 397);

  //2 negro transparente (rojo)   
  fill(90, 043, 030, 200);
  quad(168, 379, 186, 379, 186, 397, 168, 397);

  //3 transparente (amarillo) 
  fill(255, 204, 079, 250);
  quad(186, 379, 204, 379, 204, 397, 186, 397);
  //4 negro inferior derecha
  fill(100, 100, 100);
  quad(204, 379, 225, 379, 225, 397, 204, 397);


  //circulo negro ariiba izq
  fill(10, 10, 10);
  ellipse(5, 240, 100, 100);

  fill(255, 255, 255);
  ellipse(5, 240, 70, 70);

  //Poly Blanco dos rayas rojas  ALA IZQ
  //poly blanco
  noStroke();
  fill(255, 255, 255);
  quad(5, 250, 36, 298, 18, 320, 3, 289);

  //rayitas rojas

  fill(151, 60, 66);
  quad(5, 285, 18, 269, 25, 276, 5, 298);

  fill(151, 60, 66);
  quad(10, 304, 29, 286, 33, 292, 12, 311);



  //OJITO ellipse blanco 
  fill(10, 10, 10);
  ellipse(109, 276, 33, 33);
  
}
