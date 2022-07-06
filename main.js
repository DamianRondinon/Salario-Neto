function calcularSalarioNeto() {
    let puesto=parseInt(document.getElementById('puesto').value);
    let horas=parseInt(document.getElementById('horas').value);
    let meses=parseInt(document.getElementById('meses').value);
    let horasAgregadas=parseInt(document.getElementById('horasAgregadas').value);
    var sueldoHora=0;
    
    switch(puesto){
        case 1: sueldoHora=2000;break;
        case 2: sueldoHora=900;break;
        case 3: sueldoHora=400;break;


    }
    let sueldoBruto=sueldoHora*horas;
    let horasExtras=parseFloat(horasAgregadas*(sueldoHora*2));
    let comisiones=parseFloat(sueldoBruto*0.02);
    let totalPercepciones =parseFloat(sueldoBruto+horasExtras+comisiones);
    let ISR=parseFloat(sueldoBruto*(meses*0.15));
    let obraSocial=parseFloat(sueldoBruto*(meses*0.03));
    let sindicato=parseFloat(sueldoBruto*(meses*0.2));
    let aporteJubilatorio=parseFloat(sueldoBruto*(meses*0.11));
    let totalDeducciones=parseFloat(ISR+obraSocial+sindicato+aporteJubilatorio);
    let salarioNeto=parseFloat(totalPercepciones - totalDeducciones);

    document.getElementById("sueldoBruto").innerHTML="<h4>$"+sueldoBruto.toFixed(2)+"</h4>";
    document.getElementById("horasExtras").innerHTML="<h4>$"+horasExtras.toFixed(2)+"</h4>";
    document.getElementById("comisiones").innerHTML="<h4>$"+comisiones.toFixed(2)+"</h4>";
    document.getElementById("totalPercepciones").innerHTML="<h4>$"+totalPercepciones.toFixed(2)+"</h4>";
    document.getElementById("ISR").innerHTML="<h4>$"+ISR.toFixed(2)+"</h4>";
    document.getElementById("obraSocial").innerHTML="<h4>$"+obraSocial.toFixed(2)+"</h4>";
    document.getElementById("sindicato").innerHTML="<h4>$"+sindicato.toFixed(2)+"</h4>";
    document.getElementById("aporteJubilatorio").innerHTML="<h4>$"+aporteJubilatorio.toFixed(2)+"</h4>";
    document.getElementById("totalDeducciones").innerHTML="<h4>$"+totalDeducciones.toFixed(2)+"</h4>";
    document.getElementById("salarioNeto").innerHTML="<h4>$"+salarioNeto.toFixed(2)+"</h4>";
    

}


