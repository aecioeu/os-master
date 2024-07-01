const express = require('express');
const router = express.Router();


var pool = require("../../config/pool-factory");

// Estrutura /API

router.get('/initservidores', async function (req, res) {

  const servidores = require('../../data/servidores.json')
  async function asyncForEach(array, callback) {
      for (let index = 0; index < array.length; index++) {
          await callback(array[index], index, array);
      }
  }

  
  (async () => {
  
      await asyncForEach(servidores, async (servidor) => {
        var data = {
          registration: servidor.matriculaServidor,
          name: servidor.nomeServidor,
          location: servidor.lotacao,
          ve: servidor.vinculoEmpregaticio,
          role: servidor.cargoAtual,
          phone: ""
        };

          
   pool.query("INSERT INTO servidores SET ?", data, function (err, result) {
   // console.log(err)
   // console.log(`${servidor.nomeServidor} registrado`)
  });
  
      })
  
  })();


  res.send('Listagem Atualizada com sucesso');
})



router.get('/inititens', async function (req, res) {

  const itens = require('../../data/patrimonio-moveis.json')
  async function asyncForEach(array, callback) {
      for (let index = 0; index < array.length; index++) {
          await callback(array[index], index, array);
      }
  }

  
  (async () => {
  
      await asyncForEach(itens, async (item) => {
        var data = {
          registration: item.placaMatricula,
          name: item.descricao,
          data_aquisicao : item.dataAquisicao,
          location: item.unidade,
          orgao: item.orgao,
          responsavel: item.responsavel,
          natureza: item.natureza,
          valor_aquisicao : item.valorAquisicao,
          valor_atualizado: item.valorAtualizado,
          centro_custo : item.centroCusto,
          situacao : item.situacao
        };

          
   pool.query("INSERT INTO patrimonio SET ?", data, function (err, result) {
   // console.log(err)
   // console.log(`${servidor.nomeServidor} registrado`)
  });
  
      })
  
  })();


  res.send('Listagem Atualizada com sucesso');
})

router.get('/about', function (req, res) {
  res.send('About this Api');

})

module.exports = router;