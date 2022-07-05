function calcularSalarioNeto() {
    let puesto=parseInt(document.getElementById('puesto').value);
    let horas=parseInt(document.getElementById('horas').value);
    let anios=parseInt(document.getElementById('anios').value);
    var sueldoHora=0;
    switch(puesto){
        case 1: sueldoHora=900;break;
        case 2: sueldoHora=600;break;
        case 3: sueldoHora=200;break;

    }
    let sueldoBruto=sueldoHora*horas;
    let horasExtras=sueldoBruto*
}


