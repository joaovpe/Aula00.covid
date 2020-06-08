function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = "Agora são "+hora+ " hrs" 
    if(hora >= 0 && hora < 12){
        //Bom dia//
        img.src= 'manhã.jpg'
        document.body.style.background = "blue"
    }else if(hora >= 12 && hora < 18){
        //boa noite
        img.src= 'tarde.jpg'
        document.body.style.background = "orange"
    }else{
        //boa noite
        img.src= 'noite.jpg'
        document.body.style.background = "black"
    }
}