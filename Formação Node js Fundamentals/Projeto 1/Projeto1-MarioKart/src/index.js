const player1 = {
    NOME: "Mario",
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
    PONTOS: 0,
};

const player2 = {
    NOME: "Luigi",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 4,
    PONTOS: 0,
};

async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
    let random = Math.random();
    let result;

    switch (true) {
        case random < 0.33:
            result = "RETA"
            break;
        case random < 0.66:
            result = "CURVA"
            break;
        default:
            result = "CONFRONTO"
            break;
    }

    return result;
}

async function logRollResult(characterName, block, diceResult, attribute) {
    console.log(`${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`);
}

async function logRoundResult(name1, name2, result1, result2) {
    if (result1 > result2){
        console.log(`${name1.NOME} Marcou 1 ponto`);
        name1.PONTOS++;
    }
    else if (result2 > result1){
        console.log(`${name2.NOME} Marcou 1 ponto`);
        name2.PONTOS++;
    }
    else{
        console.log("Empate");
    }

    console.log("_____________________________________\n");
}

async function declareWinner(character1, character2) {
    console.log(`Resultado final:`);
    console.log(`${character1.NOME}: ${character1.PONTOS}`);  
    console.log(`${character2.NOME}: ${character2.PONTOS}`);

    if (character1.PONTOS > character2.PONTOS){
        console.log(`\n${character1.NOME} venceu a corrida! Parabéns! 🏆`);
    }else if (character2.PONTOS > character1.PONTOS){
        console.log(`\n${character2.NOME} venceu a corrida! Parabéns! 🏆`);
    }else{
        console.log("A corrida terminou em empate");
    }
}

async function playerRaceEngine(character1, character2) {
    for (let round = 1; round < 6; round++) {
        console.log(`🏁 Rodada ${round}`);

        // sortear blocco
        let block = await getRandomBlock();
        console.log(`Bloco: ${block}`);

        // rolar os dados
        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();

        // teste de abilidade
        let totalTestSkill1 = 0;
        let totalTestSkill2 = 0;

        if (block == "RETA") {
            totalTestSkill1 = diceResult1 + character1.VELOCIDADE;
            totalTestSkill2 = diceResult2 + character2.VELOCIDADE;
            await logRollResult(character1.NOME, block, diceResult1, character1.VELOCIDADE);
            await logRollResult(character2.NOME, block, diceResult2, character2.VELOCIDADE);
            await logRoundResult(character1, character2, totalTestSkill1, totalTestSkill2);
        }

        else if (block == "CURVA") {
            totalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE;
            totalTestSkill2 = diceResult2 + character2.MANOBRABILIDADE;
            await logRollResult(character1.NOME, block, diceResult1, character1.MANOBRABILIDADE);
            await logRollResult(character2.NOME, block, diceResult2, character2.MANOBRABILIDADE);
            await logRoundResult(character1, character2, totalTestSkill1, totalTestSkill2);
        }

        else {
            let powerResult1 = diceResult1 + character1.PODER;
            let powerResult2 = diceResult2 + character2.PODER;  

            console.log(`${character1.NOME} confrontou ${character2.NOME} 🥊`)   

            await logRollResult(character1.NOME, block, diceResult1, character1.PODER);
            await logRollResult(character2.NOME, block, diceResult2, character2.PODER);

            if (powerResult1 > powerResult2 && character2.PONTOS > 0){
                console.log("ola");
                character2.PONTOS--;
                console.log(`${character1.NOME} venceu a batalhar! ${character2.NOME} perdeu 1 ponto 🐢`); 
            }

            if (powerResult2 > powerResult1 && character1.PONTOS > 0){ 
                character1.PONTOS--;
                console.log(`${character2.NOME} venceu a batalhar! ${character1.NOME} perdeu 1 ponto 🐢`); 
            }

            if (powerResult1 === powerResult2){
                console.log("Confronto empatado! nenhum ponto foi perdido");
            } 
            console.log("_____________________________________\n");
        }
    }
}

(async function main() {
    console.log(
        `🏁🚦 corrida entre ${player1.NOME} e ${player2.NOME} começando...\n`
    );

    await playerRaceEngine(player1, player2);
    await declareWinner(player1, player2);
})();
