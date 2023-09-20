
class Persona {
   
    constructor(n,pa,sa,fn,di){
        this.nombre=n;
        this.primerApellido=pa;
        this.segundoApellido=sa;
        this.fechaNacimiento=fn;
        this.dni=di
    }
}

var nuevaPersona= new Persona('','','','','')
var def = new Persona('Introduzca Nombre','Introduzca Apellido 1','Introduzca Apellido2',' Introduzca Fecha de Nacimiento',' Introduzca DNI');

// var url=window.location.href.split('/')
// var ultElem=url[(url.length)-1]
// if(ultElem=='index.html'){
//     var tNo=document.getElementById('notxt').value
//     var tA1=document.getElementById('ap1txt').value
//     var thA2=document.getElementById('ap2txt').value
//     var tF=document.getElementById('fntxt').value
//     var tD=document.getElementById('dnitxt').value
    
//     Guardar(def)

// }else{
// console.log('no estas')
// }



Guardar(def)

function Guardar(p){
    var phNo=document.getElementById('notxt')
    var phA1=document.getElementById('ap1txt')
    var phA2=document.getElementById('ap2txt')
    var phF=document.getElementById('fntxt')
    var phD=document.getElementById('dnitxt')

    phNo.setAttribute('placeholder',p.nombre)
    phA1.setAttribute('placeholder',p.primerApellido)
    phA2.setAttribute('placeholder',p.segundoApellido)
    phF.setAttribute('placeholder',p.fechaNacimiento)
    phD.setAttribute('placeholder',p.dni)

    phNo.value=''
    phA1.value=''
    phA2.value=''
    phF.value=''
    phD.value=''

}
function Resetear(){
    Guardar(def)
}
function ValidarFecha(f){
    var c= true
    var fParida=f.split('')
    if(f[2]!='/' || f[5]!='/' || f.length>10){
        c=false
    }
    return c
}

function Comprobacion(){
    var tNo=document.getElementById('notxt').value
    var tA1=document.getElementById('ap1txt').value
    var tA2=document.getElementById('ap2txt').value
    var tF=document.getElementById('fntxt').value
    var tD=document.getElementById('dnitxt').value

    var v=true
    var men=''
    if (tNo.trim().split('').length<3||tNo.trim().split('').length>30){
        var v=false
        men=men+` El nombre debe tener una longitud entre 3 y 30 caracteres \n`
    }
    if (tA1.trim().split('').length<2||tA1.trim().split('').length>30){
        men=men+` El primer apellido debe tener una longitud entre 2 y 30 caracteres \n`
        var v=false
    }
    if (tA2.trim().split('').length<2||tA2.trim().split('').length>30){
        men=men+` El segundo apellido debe tener una longitud entre 2 y 30 caracteres \n`
        var v=false
    }
    if(!ValidarFecha(tF.trim())){
        men=men+ ` Formato de fecha incorecto (dd/mm/AAAA) \n`
        var v=false
    }
    if(v){
        nuevaPersona.nombre=tNo
        nuevaPersona.primerApellido=tA1
        nuevaPersona.segundoApellido=tA2
        nuevaPersona.fechaNacimiento=tF
        nuevaPersona.dni=tD
        Guardar(nuevaPersona)
       men='Se han guardado los datos correctamente'
    }if(!ValidarDNI(tD.trim())){
        men=men+` Formato DNI incorrecto (Debe tener 8 numeros y 1 letra) \n`
        v=false
    }else{
        
    }

    alert(men)
}

function ValidarDNI(d){
    var c=true
    var caracteresValidos='TRWAGMYFPDXBNJZSQVHLCKE'
    caracteresValidos=caracteresValidos.split('')
    var num=d.substring(0,7)

    if (d.length<9){
        c=false
    }else{
            if(!isNaN(num)){
                resto=(parseInt(dni[i],10)%23)
                if((d[8]!=caracteresValidos[resto])){
                    c=false
                }
            }else{
                c=false
            }
    }
        return c

}



