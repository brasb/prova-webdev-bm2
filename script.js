// Problema 1.
function checarPrimo(x)
{
    // Se x mudar quando arredondado, não é inteiro.
    let inteiro = Math.floor(x) === x;

    /*
        O resultado será verdadeiro por padrão exceto se x for <= 1 ou não
        inteiro, pois somente inteiros e números maiores que 1 podem ser primos.
        Nesse caso, não será feita nenhuma iteração no loop, porque o loop só
        continua enquanto o resultado for verdadeiro.
    */
    let resultado = x > 1 && inteiro;
    
    /*
        Checa todos os números naturais maiores que 1 em ordem decrescente até
        que todas as checagens possíveis sejam feitas ou x seja provado como
        não primo.
    */
    for (let n = x - 1; n > 1 && resultado; n--) {
        // O número é divisível por outro se seu módulo for igual a 0.
        resultado = x % n !== 0;
    }

    return resultado;
}

// Exibe os números primos de 1 a 100.
for (let i = 1; i <= 100; i++) {
    if (checarPrimo(i)) {
        console.log("Número primo:", i + ".");
    }
}


// Problema 2.
function senhaValida(senha)
{
    // Checa se a senha é muito curta. Se não, retornar false.
    if (senha.length < 8) {
        return false;
    }

    /*
        Se a string não mudar com nenhuma conversão de case, significa que ela
        não mistura letras maiúsculas e minúsculas. 
        Se esse for o caso, retornar false.
    */
    if (senha.toLowerCase() === senha || senha.toUpperCase() === senha) {
        return false;
    }

    /*
        Usa uma expressão regular para checar se a senha contém pelo menos um número.
        Se não tiver, retornar false.
    */
    if (!/\d/.test(senha)) {
        return false;
    }

    // Se não foi encontrado nenhum problema na senha, ela é válida.
    return true;
}

// Testa senhas inválidas.
console.log("\"Curta1\" é uma senha válida:", senhaValida("Curta1") + ".");
console.log("\"toda_minúscula1\" é uma senha válida:", senhaValida("toda_minúscula1") + ".");
console.log("\"TODA_MAIÚSCULA1\" é uma senha válida:", senhaValida("TODA_MAIÚSCULA1") + ".");
console.log("\"Sem_números\" é uma senha válida:", senhaValida("Sem_números") + ".");

// Testa uma senha válida.
console.log("\"SenhaBoa001\" é uma senha válida:", senhaValida("SenhaBoa001") + ".");


// Problema 3.
function fatorial(x)
{
    // Se x mudar quando arredondado, não é inteiro.
    let inteiro = Math.floor(x) === x;

    // Fatoriais não são definidos para números negativos e não inteiros.
    if (x < 0 || !inteiro) {
        return NaN;
    }

    // !0 = 1
    if (x === 0) {
        return 1;
    }

    // Não faz diferença continuar a partir daqui, 2 * 1 = 2.
    if (x <= 2) {
        return x;
    }

    // O fatorial de um número é um número multiplicado pelo fatorial dele - 1.
    return x * fatorial(x - 1);
}

// Exibe todos os fatorais de 1 a 10.
for (let i = 1; i <= 10; i++) {
    console.log(i + "! =", fatorial(i));
}


// Problema 4.
function checarQuadradoPerfeito(x) {
    function checarInteiro(n) {
        // Se n mudar quando arredondado, não é inteiro.
        return Math.floor(n) === n;
    }

    // O número necessariamente precisa ser inteiro.
    if (!checarInteiro(x)) {
        return false;
    }

    // Só retornará true se a raiz quadrada de x for um número inteiro.
    return checarInteiro(Math.sqrt(x));
}

console.log("25 é um quadrado perfeito:", checarQuadradoPerfeito(25) + ".");
console.log("35 é um quadrado perfeito:", checarQuadradoPerfeito(35) + ".");
