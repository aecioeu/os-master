const patrimonios = require('./data/patrimonio-moveis.json')


async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
}


(async () => {


    await asyncForEach(patrimonios, async (patrimonio) => {
        
        console.log(patrimonio)
   
        
        console.log("_____________________________")

    })

})();