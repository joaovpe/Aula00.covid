function calcular()
{
   
    let ini = document.getElementById('num1')
    let fim = document.getElementById('num2')
    let passo = document.getElementById('num3')    
    let result = document.getElementById('res')

    if(ini.value.lenght == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('erro falta de dados')
    }else{
        result.innerHTML = 'Contando...'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            alert('passo invalido')
            p=1
        }
        if(1 < f){
            for(let c = i; c <= f; c += p){
                result.innerHTML += ${c} 
            }
        }else{
            for(let c = 1; c >= f; c -= p){
                result.innerHTML += ${c} 
            }
        }
        result.innerHTML += ${c} 
    }


}
