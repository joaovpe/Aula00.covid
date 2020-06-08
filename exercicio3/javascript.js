function verificar(){
    var data = new Date()
    var  ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano){
        alert('verifique a data')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute("id", 'foto')
        if(fsex[0].checked){
            genero = 'homem'
            if(idade>=0 && idade<=10){
                //criança
                img.setAttribute('src', 'bebemasc.jpg')
            }else if (idade<25){
                //joven
                img.setAttribute('src', 'jovemmasc.jpg')
            }else if (idade<50){
                //adulto
                img.setAttribute('src', 'adultomasc.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'idosomasc.jpg')
            }
        }else{
            genero = 'mulher'
            if(idade>=0 && idade<=10){
                //criança
                img.setAttribute('src', 'bebefem.jpg')
            }else if (idade<25){
                //joven
                img.setAttribute('src', 'jovenfem.jpg')
            }else if (idade<50){
                //adulto
                img.setAttribute('src', 'adultofem.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'idosofem.jpg')
            }
        }
        res.style.textAlign= 'center'
        res.innerHTML = 'Detectamos '+genero+' idade '+idade+' anos'
        res.appendChild(img)
    }
}