function verificar () {

    var data = new Date ()
    var ano = data.getFullYear()
    var anonascimento = document.getElementById('txtano')
    var res = document.getElementById('res')
    var img = document.getElementById('foto')
    
    var anonum = String(anonascimento.value)
    if (anonum == 0 || anonum >= ano) {
        window.alert('Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = (ano -anonum)
        var genero = ''
        anonascimento.value=""
        img.style.display = 'inline'
       if(fsex[0].checked) {
               genero = 'do Sexo Masculino'
               
       if (idade >=0 && idade <= 12) {

               img.src = 'children bot.png'
               

        }else if (idade>= 13 && idade <=30){

                img.src = 'young boy.png'
                //jovem
        } else if (idade>=31 && idade <=50) {
                img.src = 'mem.png'
                 //adulto
        } else if (idade>50 && idade <=120) {
             img.src ='old man.png'
            //idoso
                
        }
        else {

                window.alert('[Erro]!!!')
                img.style.display = 'none'
            }
    

       } else if (fsex[1].checked) {

           genero = 'Mulher'

        if (idade >=0 && idade <= 12) {
            img.src ='criança girl.png'
            //criança

        }else if (idade>= 13 && idade <=50){
            img.src = 'young girl.png'
             //jovem
        } else if (idade>50 && idade <=120) {
            img.src = 'old woman.png'
               //idoso
                   
           }
        else {
   
                   window.alert('[Erro]!!!')
                   img.style.display = 'none'
               }
       }
       
                res.style.textAlign = 'center'
                res.innerHTML = `Detectamos ${genero} com ${idade} anos.`

        }
        


    }



    