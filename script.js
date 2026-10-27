function sumar(){
    //declaramo vaiables
    let num1 = document.getElementById("numero1").value;
    let num2 = document.getElementById("numero2").value;    
    //Validciones
    if(num1 === "" || num2 === ""){
        alert("Por favor ingrese un numero");
        return;
    }
    //realizamo la suma
    let suma = parseFloat(num1) + parseFloat(num2);  
    document.getElementById("resultado").textContent = "El resultado de la suma es: " + suma;
}