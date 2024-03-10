document.addEventListener('DOMContentLoaded', function() {
    let side1Input = document.querySelector('#side1');
    let side2Input = document.querySelector('#side2');
    let side3Input = document.querySelector('#side3');
    let calculateButton = document.querySelector('button');
    let classificationResult = document.querySelector('#classification');
    let areaResult = document.querySelector('#area');
    let perimeterResult = document.querySelector('#perimeter');
  
    calculateButton.addEventListener('click', function() {
      let side1 = parseFloat(side1Input.value);
      let side2 = parseFloat(side2Input.value);
      let side3 = parseFloat(side3Input.value);
  
      classificationResult.textContent = classifyTriangle(side1, side2, side3);
      areaResult.textContent = calculateArea(side1, side2, side3);
      perimeterResult.textContent = calculatePerimeter(side1, side2, side3);
    });
  });
  