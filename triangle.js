function calculatePerimeter(side1, side2, side3) {
    return side1 + side2 + side3;
  }
  
  function calculateArea(side1, side2, side3) {
    let s = (side1 + side2 + side3) / 2;
    return Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
  }
  
  function classifyTriangle(side1, side2, side3) {
    if (side1 === side2 && side2 === side3) {
      return 'Equilátero';
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
      return 'Isósceles';
    } else {
      return 'Escaleno';
    }
  }
  
  document.querySelector('button').addEventListener('click', function() {
    let side1 = parseFloat(document.querySelector('#side1').value);
    let side2 = parseFloat(document.querySelector('#side2').value);
    let side3 = parseFloat(document.querySelector('#side3').value);
  
  
  });
  