// Steven precisa de uma calculadora de gorjetas muito simples para quando for comer em um restaurante. No país dele, é comum dar gorjeta de 15% se o valor da conta estiver entre 50 e 300. Se o valor for diferente, a gorjeta é de 20%.

// Calcule a gorjeta, dependendo do valor da conta. Crie uma variável chamada tip para isso. Não é permitido usar uma instrução if...else (se for mais fácil para você, você pode começar com uma instrução if...else e depois tentar convertê-la em um operador ternário).



const bill = 275;

const tip = bill >= 50 && bill <=300 ? (bill * 0.15) : (bill * 0.2);

console.log("O valor da conta é: ", bill);
console.log("O valor da gorjeta é: ", tip);
console.log("O valor total é: ", tip + bill);