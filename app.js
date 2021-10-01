
function sacar() {

    var campoValor = parseInt(document.querySelector(".campoValor").value)

    var saqueNotas = document.querySelector("#saque")

    saqueNotas.innerHTML = ""
    
    

    let notas = Array(1, 5, 10, 50, 100)

    var dinheiroSacado = []

   
        
           
    while (campoValor >= 100) {
        dinheiroSacado.push(notas[4])
        var img = document.createElement("img")
        img.classList.add("nota100")
        saqueNotas.appendChild(img)
        campoValor -= 100            
    }        
        
        while (campoValor < 100 && campoValor >= 50) {
        dinheiroSacado.push(notas[3])
        var img = document.createElement("img")
        img.classList.add("nota50")
        saqueNotas.appendChild(img)
        campoValor -= 50
        }

    while (campoValor < 50 && campoValor >= 10) {
        dinheiroSacado.push(notas[2])
        var img = document.createElement("img")
        img.classList.add("nota10")
        saqueNotas.appendChild(img)
        campoValor -= 10
        }

        while (campoValor < 10 && campoValor >= 5) {
        dinheiroSacado.push(notas[1])
        var img = document.createElement("img")
        img.classList.add("nota5")
        saqueNotas.appendChild(img)
        campoValor -= 5
        }

    while (campoValor < 5 && campoValor >= 1) {
        dinheiroSacado.push(notas[0])
        var img = document.createElement("img")
        img.classList.add("nota1")
        saqueNotas.appendChild(img)
        campoValor -= 1
    }

    var reais100 = document.getElementsByClassName("nota100")
    var reais50 = document.getElementsByClassName("nota50")
    var reais10 = document.getElementsByClassName("nota10")
    var reais5 = document.getElementsByClassName("nota5")
    var reais1 = document.getElementsByClassName("nota1")

    for(i=0; i < reais100.length; i++) {
        reais100[i].src = "nota100.jpg"  
    }  

    for(i=0; i < reais50.length; i++) {
        reais50[i].src = "nota50.png"  
    } 

    for(i=0; i < reais10.length; i++) {
        reais10[i].src = "nota10.png"  
    } 

    for(i=0; i < reais5.length; i++) {
        reais5[i].src = "nota5.png"  
    } 

    for(i=0; i < reais1.length; i++) {
        reais1[i].src = "nota1.jpg"  
    } 

}

    
