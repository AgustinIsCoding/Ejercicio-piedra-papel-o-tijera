function inicioJuego(){
    const options_of_game =['piedra','papel','tijera'];
    const option=Math.round(Math.random()*2)

    const user_options=prompt('Escribe una opción');
    const computer_options=options_of_game[option].toLowerCase();

    if(user_options==computer_options){
        console.log('Empate');
    }else if(user_options=='piedra'){
        if(computer_options=='tijera'){
            console.log('La piedra le gana a la tijera');
            console.log('El usuario Gano!!!'); 
        }else if(computer_options=='papel'){
            console.log('El papel le gana a la piedra');
            console.log('El computer Gano!!!'); 
        }
    }else if(user_options=='papel'){
        if(computer_options=='tijera'){
            console.log('La tijera le gana al papel');
            console.log('El computer Gano!!!'); 
        }else if(computer_options=='piedra'){
            console.log('El papel le gana a la piedra');
            console.log('El usuario Gano!!!'); 
        }
    }else if(user_options=='tijera'){
        if(computer_options=='piedra'){
            console.log('La piedra le gana a la tijera');
            console.log('El computer Gano!!!'); 
        }else if(computer_options=='papel'){
            console.log('La tijera le gana al papel');
            console.log('El usuario Gano!!!'); 
        }
    }
}