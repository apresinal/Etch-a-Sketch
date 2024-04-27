// Funcion para crear la cuadricula inicial de 16x16
function createGrid() {
    const container = document.getElementById('container');
    for (let i = 0; i < 16 * 16; i++) {
      const gridSquare = document.createElement('div');
      gridSquare.classList.add('grid-square');
      container.appendChild(gridSquare);
  
      // Agrega un listener para el evento 'mouseover' en cada cuadricula
      gridSquare.addEventListener('mouseover', () => {
        gridSquare.style.backgroundColor = "#FF5733"; // Cambia el color de fondo al color deseado (en este caso, naranja)
      });
    }
  }
  
  // Llama a la funcion para crear la cuadricula inicial al cargar la pagina
  window.onload = createGrid;
  
  // Funcion para crear una nueva cuadricula con el tamaño especificado por el usuario
  function createNewGrid() {
    let gridSize = prompt("Enter number of squares per side (maximum 100):");
    gridSize = Math.min(Math.max(parseInt(gridSize), 1), 100);
    const container = document.getElementById('container');
    container.innerHTML = '';
    container.style.width = `${gridSize * 60}px`;
    for (let i = 0; i < gridSize * gridSize; i++) {
      const gridSquare = document.createElement('div');
      gridSquare.classList.add('grid-square');
      container.appendChild(gridSquare);
      
      // Agrega un listener para el evento 'mouseover' en cada cuadricula
      gridSquare.addEventListener('mouseover', () => {
        gridSquare.style.backgroundColor = "#FF5733"; // Cambia el color de fondo al color deseado (en este caso, naranja)
      });
    }
  }
  
  // Funcion para resetear las cuadriculas (eliminar el rastro dejado)
  function resetGrid() {
    const gridSquares = document.querySelectorAll('.grid-square');
    gridSquares.forEach(gridSquare => {
      gridSquare.style.backgroundColor = ""; // Restablece el color de fondo a su valor predeterminado
    });
  }
