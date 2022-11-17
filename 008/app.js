function Mostrar(){

    let valor1 = document.getElementById('n1').value 
    document.getElementById('resposta1').innerHTML = 'Nome: ' + valor1 + '.'

    let valor2 = document.getElementById('n2').value 
    document.getElementById('resposta2').innerHTML = 'Altura: ' + valor2 + '.'

    let valor3 = document.getElementById('n3').value 
    document.getElementById('resposta3').innerHTML = 'Sexo: ' + valor3 + '.'

    document.getElementById('n1, n2, n3').value='';
}