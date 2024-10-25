import entradaDados from 'readline-sync';

console.log("Aplicação de Juros: \n");

let valorJuros;

let valorDevido = entradaDados.question("Informe o valor devido: ");

if(valorDevido > 0) {
    let dias_atrasados = entradaDados.question("Informe quantos dias se passaram desde o vencimento do boleto: ");

    if(dias_atrasados > 0) {
        if(dias_atrasados > 15) {
            valorJuros = 10;
        } 
        else {
            valorJuros = 5
        } 

        valorDevido = Number(valorDevido);
        dias_atrasados = Number(dias_atrasados);

        let total_juros = (valorDevido / 100) * valorJuros;
        let total_divida = valorDevido + valorJuros;

        console.log("\nValor original da dívida: R$ " +valorDevido);
        console.log("Dias atrasados: "+dias_atrasados);
        console.log("Taxa de Juros: "+total_juros+"%");
        console.log("Valor total com juros: R$ "+total_divida);
    }
    else {
        console.log("Você está em dia!");
    }
}
else {
    console.log("O valor da dívida deve ser maior que zero!")
}
