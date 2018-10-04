
var display = document.getElementById("display")
var error = document.getElementById("error")
var sumando="+"

var restando="-"

var dividiendo="/"

var multiplicanco="*"

var numero_cero=0

var numero_uno=1

var numero_dos=2

var numero_tres=3

var numero_cuatro=4

var numero_cinco=5

var numero_seis=6

var numero_siete=7

var numero_ocho=8

var numero_nueve=9

var numero, operador, operando, temporal, operacion, click, validar, clickSigno, clickIgual, resultado, numAnt, i, j, signo, p;

click = 0, validar = 0, clickSigno = 0, clickIgual = 0, resultado = 0, numAnt = 0, i = 0, j = 0, signo = "", p = "";

var Calculadora = {
    init: function(){
        self = this
        var cero,uno,dos,tres,cuatro,cinco,seis,siete,ocho,nueve,on,sign,punto,raiz,div,menos,mas,igual;
        cero = document.getElementById("0"), uno = document.getElementById("1"), dos = document.getElementById("2"),tres = document.getElementById("3")
        cuatro = document.getElementById("4"), cinco = document.getElementById("5"), seis = document.getElementById("6"), siete = document.getElementById("7"), ocho = document.getElementById("8"), nueve = document.getElementById("9"), on = document.getElementById("on"), sign = document.getElementById("sign"), punto = document.getElementById("punto"), raiz = document.getElementById("raiz"), div = document.getElementById("dividido"), por = document.getElementById("por"), menos = document.getElementById("menos"), mas = document.getElementById("mas"), igual = document.getElementById("igual");
        cero.addEventListener("click",function(){
            if (display.innerHTML=="0"){ 
                
            } else {
                click++
                numero = "0"
                self.validarEscribir(numero)
            }
        })
        cero.addEventListener("mousedown", function(){
            cero.setAttribute("style", "transform:scale(0.95,0.95)") 
        })
        cero.addEventListener("mouseout", function(){
            cero.setAttribute("style", "transform:scale(1,1)")  
        })
        uno.addEventListener("click",function(){
            numero = "1"
            self.validarLongitud(numero)
        })
        uno.addEventListener("mousedown", function(){
            uno.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        uno.addEventListener("mouseout", function(){
            uno.setAttribute("style", "transform:scale(1,1)")
        })
        dos.addEventListener("click",function(){
            numero = "2"
            self.validarLongitud(numero)
        })
        dos.addEventListener("mousedown", function(){
            dos.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        dos.addEventListener("mouseout", function(){
            dos.setAttribute("style", "transform:scale(1,1)")
        })
        tres.addEventListener("click",function(){
            numero = "3"
            self.validarLongitud(numero)
        })
        tres.addEventListener("mousedown", function(){
            tres.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        tres.addEventListener("mouseout", function(){
            tres.setAttribute("style", "transform:scale(1,1)")
        })
        cuatro.addEventListener("click",function(){
            numero = "4"
            self.validarLongitud(numero)
        })
        cuatro.addEventListener("mousedown", function(){
            cuatro.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        cuatro.addEventListener("mouseout", function(){
            cuatro.setAttribute("style", "transform:scale(1,1)")
        })
        cinco.addEventListener("click",function(){
            numero = "5"
            self.validarLongitud(numero)
        })
        cinco.addEventListener("mousedown", function(){
            cinco.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        cinco.addEventListener("mouseout", function(){
            cinco.setAttribute("style", "transform:scale(1,1)")
        })
        seis.addEventListener("click",function(){
            numero = "6"
            self.validarLongitud(numero)
        })
        seis.addEventListener("mousedown", function(){
            seis.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        seis.addEventListener("mouseout", function(){
            seis.setAttribute("style", "transform:scale(1,1)")
        })
        siete.addEventListener("click",function(){
            numero = "7"
            self.validarLongitud(numero)
        })
        siete.addEventListener("mousedown", function(){
            siete.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        siete.addEventListener("mouseout", function(){
            siete.setAttribute("style", "transform:scale(1,1)")
        })
        ocho.addEventListener("click",function(){
            numero = "8"
            self.validarLongitud(numero) 
        })
        ocho.addEventListener("mousedown", function(){
            ocho.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        ocho.addEventListener("mouseout", function(){
            ocho.setAttribute("style", "transform:scale(1,1)")
        })
        nueve.addEventListener("click",function(){
            numero = "9"
            self.validarLongitud(numero)
        })
        nueve.addEventListener("mousedown", function(){
            nueve.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        nueve.addEventListener("mouseout", function(){
            nueve.setAttribute("style", "transform:scale(1,1)")
        })
        sign.addEventListener("click",function(){ 
            if (display.innerHTML == "0"){ 
                
            } else {
                self.validarSigno() 
            }
        })
        sign.addEventListener("mousedown", function(){
            sign.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        sign.addEventListener("mouseout", function(){
            sign.setAttribute("style", "transform:scale(1,1)")
        })
        on.addEventListener("click",function(){
            boton = "on"
            self.limpiardisplay(boton) 
        })
        on.addEventListener("mousedown", function(){
            on.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        on.addEventListener("mouseout", function(){
            on.setAttribute("style", "transform:scale(1,1)")
        })
        punto.addEventListener("click",function(){  
            if (p == "."){ 
               
            }else{
                self.validarPunto() 
            }
        })
        punto.addEventListener("mousedown", function(){
            punto.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        punto.addEventListener("mouseout", function(){
            punto.setAttribute("style", "transform:scale(1,1)")
        })
        mas.addEventListener("click",function(){  
            operador = "+"
            self.registrarOperacion(operador)
        })
        mas.addEventListener("mousedown", function(){
            mas.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        mas.addEventListener("mouseout", function(){
            mas.setAttribute("style", "transform:scale(1,1)")
        })
        menos.addEventListener("click",function(){ 
            operador = "-"
            self.registrarOperacion(operador)
        })
        menos.addEventListener("mousedown", function(){
            menos.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        menos.addEventListener("mouseout", function(){
            menos.setAttribute("style", "transform:scale(1,1)")
        })
        por.addEventListener("click",function(){ 
            operador = "*"
            self.registrarOperacion(operador)
        })
        por.addEventListener("mousedown", function(){
            por.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        por.addEventListener("mouseout", function(){
            por.setAttribute("style", "transform:scale(1,1)")
        })
        dividido.addEventListener("click",function(){ 
            operador = "/"
            self.registrarOperacion(operador)
        })
        dividido.addEventListener("mousedown", function(){
            dividido.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        dividido.addEventListener("mouseout", function(){
            dividido.setAttribute("style", "transform:scale(1,1)")
        })
        igual.addEventListener("click",function(){ 
            self.realizarOperacion()
        })
        igual.addEventListener("mousedown", function(){
            igual.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        igual.addEventListener("mouseout", function(){
            igual.setAttribute("style", "transform:scale(1,1)")
        })
    },
    validarEscribir: function(tecla){
        if (click==1){
            operando = tecla 
            display.innerHTML = operando
            temporal = display.innerHTML
        }else {
            operando += tecla 
            display.innerHTML = signo + operando 
            temporal = display.innerHTML
        }
    },
    validarSigno: function(){ 
        if (signo == ""){
            signo = "-"
            display.innerHTML = signo + operando
            temporal = display.innerHTML
        }else{
            signo = ""
            display.innerHTML = operando  
            temporal = display.innerHTML
        }
    },
    validarLongitud: function(n){ 
        if (click>0){ 
           if (p == ""){ 
            if (operando.length >= 8){
                
            } else{
                click++
                validar++
                self.validarEscribir(n) 
            }
           }else{
            if (operando.length >= 9){ 
               
            } else{
                validar++
                click++
                self.validarEscribir(n) 
            }  
           }
        }else{
            click++
            validar++
            self.validarEscribir(n)
        }
    },
    validarPunto: function(){ 
        if (display.innerHTML == "0"){ 
            click++
            p = "."
            display.innerHTML = "0."
            operando = "0."
            temporal = display.innerHTML
            
        }else { 
            click++
            p = "."
            display.innerHTML = signo + operando + p
            operando += p
            temporal = display.innerHTML
            
        } 
    },
    registrarOperacion: function(tipoOper){
        if (validar==0){
          
            
        }else {
            clickIgual = 0
            if (clickSigno==0){
                numero1 = Number(display.innerHTML)
                self.limpiardisplay(tipoOper)
                operacion = tipoOper
                clickSigno++
            }else {
                operacion = tipoOper
            }
        }
    },
    realizarOperacion: function(){ 
        clickSigno = 0
        if (clickIgual == 0){ 
            clickIgual++
            numero2 = Number(display.innerHTML)
            switch(operacion){
                case "+":
                    self.sumar(numero1, numero2)
                    break;
                case "-":
                    self.restar(numero1, numero2)
                    break;
                case "/":
                    self.dividir(numero1, numero2)
                    break;
                case "*":
                    self.multiplicar(numero1, numero2)
                    break;
            }
        } else {
            switch(operacion){
                case "+":
                    self.sumar(numero1, numero2)
                    break;
                case "-":
                    self.restar(numero1, numero2)
                    break;
                case "/":
                    self.dividir(numero1, numero2)
                    break;
                case "*":
                    self.multiplicar(numero1, numero2)
                    break;
            }
        }

    },
    limpiardisplay: function(tecla){ 
        switch(tecla){
            case "on":
            display.innerHTML="0"
            signo = ""
            p = ""
            numero = ""
            click = 0
            operando = ""
            operador = ""
            numero1 = 0
            numero2 = 0
            temporal = 0
            resultado = 0
            operacion = 0
            clickSigno = 0 
            clickIgual = 0
            validar = 0
            break;
            default:
            display.innerHTML=""
           
            signo = ""
            p = ""
            numero = ""
            click = 0
            operando = ""
            operador = ""
            break;
        }
    },
    sumar: function(a,b){ 
        resultado = a+b 
        self.limpiardisplay(operador)
        self.validarLongitudDeResultado(resultado)
        numero1 = Number(display.innerHTML)
        
    },
    restar: function(a,b){  
        resultado = a-b 
        self.limpiardisplay(operador)
        self.validarLongitudDeResultado(resultado)
        numero1 = Number(display.innerHTML)

    },
    dividir: function(a,b){ 
        if (b==0){
            
        } else {
            resultado = a/b 
            self.limpiardisplay(operador)
            self.validarLongitudDeResultado(resultado)
            numero1 = Number(display.innerHTML)
        }
    },
    multiplicar: function(a,b){ 
        resultado = a*b 
        self.limpiardisplay(operador)
        self.validarLongitudDeResultado(resultado)
        numero1 = Number(display.innerHTML)
    },
    validarLongitudDeResultado: function(){ 
        if (resultado % 1 != 0){ 
            if (resultado.toString().length >= 9){
                resultado = resultado.toPrecision(8);
                display.innerHTML = resultado
                }else{
                display.innerHTML = resultado 
                }
            }else{
                if (resultado.toString().length >=8 ){
                    resultado = resultado.toPrecision(8);
                    display.innerHTML = resultado
                }else{
                    display.innerHTML = resultado  
                }
            }
        }
}

Calculadora.init(); 
