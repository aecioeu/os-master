const servidores = require('./data/servidores.json')


async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
}


(async () => {


    await asyncForEach(servidores, async (servidor) => {
        
        console.log(servidor.matriculaServidor)
        console.log(servidor.nomeServidor)
        console.log(servidor.lotacao)
        console.log(servidor.cargoAtual)
        console.log(servidor.nomeEntidade)
        console.log(servidor.vinculoEmpregaticio)
        
        console.log("_____________________________")

    })

})();