function calculate() {
  const efficiency = parseFloat(document.getElementById('efficiency').value);
  const distance = parseFloat(document.getElementById('distance').value);
  const price = parseFloat(document.getElementById('price').value);
  
  if (!efficiency || !distance || !price) {
    alert('Por favor, preencha todos os campos com valores válidos!');
    return;
  }
  
  // Cálculo do combustível necessário (litros)
  const fuelNeeded = distance / efficiency;
  
  // Cálculo do custo por km
  const costPerKm = price / efficiency;
  
  // Cálculo do custo total
  const totalCost = fuelNeeded * price;
  
  // Atualiza os resultados
  document.getElementById('fuelNeeded').textContent = `${fuelNeeded.toFixed(2)} litros`;
  document.getElementById('costPerKm').textContent = `R$ ${costPerKm.toFixed(2)}`;
  document.getElementById('totalCost').textContent = `R$ ${totalCost.toFixed(2)}`;
  
  // Atualiza as animações dos veículos
  const car = document.querySelector('.car');
  const motorcycle = document.querySelector('.motorcycle');
  
  car.style.animation = 'none';
  motorcycle.style.animation = 'none';
  
  car.offsetHeight; // Força um reflow
  motorcycle.offsetHeight; // Força um reflow
  
  car.style.animation = null;
  motorcycle.style.animation = null;
}

// Permite usar a tecla Enter para calcular
document.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    calculate();
  }
});

// Limita entrada de números negativos
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
  input.addEventListener('input', function() {
    if (this.value < 0) {
      this.value = 0;
    }
  });
});