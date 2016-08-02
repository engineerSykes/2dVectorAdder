window.onload = function() {
  $("button").click(function() {
          // parse all inputs in varibles for calculation to commence
          var x1 = parseInt(document.getElementById('x1').value);
          var y1 = parseInt(document.getElementById('y1').value);
          var x2 = parseInt(document.getElementById('x2').value);
          var y2 = parseInt(document.getElementById('y2').value);

          // showing values in console for debugging purposes
          console.log(x1);
          console.log(y1);
          console.log(x2);
          console.log(y2);

          // co0mbine the inputs into a medium for
          // calculation to take place
          var v1 = Vector.create(x1, y1);
          var v2 = Vector.create(x2, y2);

          //add the vectors together
          var result = v1.add(v2);

          // make sure that the outputbox remains the right size
          var height = $("#outputBox").outerHeight()  ;
          console.log("height: "+height)

          $("#outputBox").height(height);

          // same "thing" via the .css jQuery method
          // $("#outputBox").css({"height": "300"});

          // display output in #outputBox
          // reduce font-size to make it fit in fixed sized outputBox
          $("#outputBox").css({"font-size": "1.65em"});
          $("#outputBox").html("(x,y): ("+result.getX()+", "+result.getY()
                              +")<br>Angle: "+result.getAngle().toFixed(3)
                              +"<br>Magnitutde: "+result.getLength().toFixed(3));
  });

}
