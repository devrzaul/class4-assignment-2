// Create a function that will return the area of a rectangle, square, triangle

function areacal() {
    
    let shape = prompt("Enter the shape (rectangle, square, triangle):");
     // Calculate area based on shape'
     if ( shape === 'rectangle') {
        let length = Number.parseFloat(prompt("Enter the length of the rectangle:"));
        let width = Number.parseFloat(prompt("Enter the width of the rectangle:"));
        let area = length * width;
        console.log(`The area of the rectangle is: ${area}`);

     } else if(shape === 'square') {
        
        let side = Number.parseFloat(prompt("Enter the length of a side of the square:"));
        let area = side * side;
        console.log(`The area of the square is: ${area}`);
     } else if(shape === 'triangle') {
        
        let base = parseFloat(prompt("Enter the base length of the triangle:"));
        let height = parseFloat(prompt("Enter the height of the triangle:"));  
        let area =  (base * height) / 2;
        console.log(`The area of the triangle is: ${area}`);
     }

}

console.log(areacal());