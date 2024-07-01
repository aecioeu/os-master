let fetch = require('node-fetch');
const puppeteer = require("puppeteer");
const fs = require('fs');



async function getAuthurizarion() {

  const browser = await puppeteer.launch({
    headless: true,
    devtools: false,
    userDataDir: "./data",
    args: ["--start-maximized", "--window-size=1920,1280"],
    defaultViewport: null,
  });

  const page = await browser.newPage();
  await page.setRequestInterception(true);
  await page.on("request", async (interceptedRequest) => {

      
    if(interceptedRequest.headers().authorization !== undefined){          
              // console.log(interceptedRequest.url(),interceptedRequest.headers().authorization)
               //await call(interceptedRequest.headers().authorization)
               browser.close();
               if (!fs.existsSync('./auth')){
                fs.mkdirSync('./auth', { recursive: true });
            }
         
            //fs.writeFile('./auth/auth.json', `data : ${interceptedRequest.headers().authorization}`);
            fs.writeFile('./auth/auth.json', `{ "data" : "${interceptedRequest.headers().authorization}"}`, err => {
                if (err) {
                  console.error(err);
                }
                // file written successfully
              });
             
          
  }
            interceptedRequest.continue();
            
           // return  await interceptedRequest.headers().authorization
            
  });
  //await page.setViewport({ width: 1300, height: 900 })
  await page.setDefaultNavigationTimeout(0);
  await page.goto("https://transparencia.betha.cloud/#/5jrYiAhzcWF174nC3B1Hkw==");
  //await browser.close();
  //browser.close();

  
  
}




(async () => {

let dados = await call()

console.log(dados)

})()


function obj (auth){
    return {  
        method: 'GET',
        headers: {
          'Content-Type': 'application/json, text/plain, */*',
          'Authorization' : auth,
          'App-Context': "eyJwb3J0YWwiOiI1anJZaUFoemNXRjE3NG5DM0IxSGt3PT0ifQ=="
       
        }
      }
}

async function readFile(path) {
    return new Promise((resolve, reject) => {
      fs.readFile(path, 'utf8', function (err, data) {
        if (err) {
          reject(err);
        }
        resolve(JSON.parse(data));
        
      });
    });
  }

async function call (){
  var start = new Date().getTime();


let authorization = await readFile("./auth/auth.json");
//console.log(obj(authorization.data))
const response = await fetch('https://api.transparencia.betha.cloud/api/busca/35548/detalhes/3193:3202:300014068061390-1-7781', obj(authorization.data))  
const data = await response.json();
//console.log(data);  

if(data.message == 'Token expirado'){

    await getAuthurizarion().then(async () => {
    console.log("solicitando novamente na API")
    await call()
    })

    
    //return data

}else{

  


var end = new Date().getTime();
var time = end - start;
console.log('Execution time: ' + time + "ms");

return data
}


}


