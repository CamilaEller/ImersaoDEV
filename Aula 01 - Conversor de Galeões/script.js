valorgaleao = prompt("Vamos converter galeao em reais e em dolar?\nDigite um valor em galeão")
umgaleao = 97.4;
umgaleaodolar = 17.16;
const valoremreais = valorgaleao * umgaleao
const valoremdolar = valorgaleao * umgaleaodolar
valorformatado = valoremreais.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
console.log(valorformatado);
valorformatado2 = valoremdolar.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
console.log(valorformatado2);
alert("Valor em reais: " + valorformatado + "\nValor em dolar: " + valorformatado2)