document.querySelector(".hesapla").addEventListener("click" , function(){
    function calculateHypotenuse(a, b) {
        const squaredHypotenuse = a * a + b * b;
        const hypotenuse = Math.sqrt(squaredHypotenuse);
        return hypotenuse;
      }
      
       const sideA = document.querySelector(".akenar").value;
       const sideB = document.querySelector(".bkenar").value;
      
      const hypotenuse = calculateHypotenuse(sideA, sideB);
      document.querySelector(".result").textContent = "Hipotenüs = " + hypotenuse;
});
document.querySelector(".clear").addEventListener("click" , function(){
    document.querySelector(".akenar").value = '';
    document.querySelector(".bkenar").value = '';
    document.querySelector(".result").textContent = "?"
});