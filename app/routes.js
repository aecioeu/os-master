


module.exports = function (app, passport) {

    const index = require('./controllers/index.js');
    app.use('/', index);

    const api = require('./controllers/api/api.js');
    app.use('/api', api);
    
    const api_servidores = require('./controllers/api/servidores/index.js');
    app.use('/api/servidores', api_servidores);
    
    const api_patrimonio = require('./controllers/api/patrimonio/index.js');
    app.use('/api/patrimonio', api_patrimonio);

    const api_services = require('./controllers/api/services/index.js');
    app.use('/api/services', api_services);

    const api_tasks = require('./controllers/api/tasks/index.js');
    app.use('/api/tasks', api_tasks);

    const api_whatsapp = require('./controllers/api/whatsapp/index.js');
    app.use('/api/whatsapp', api_whatsapp);
    
    const tasks = require('./controllers/tasks/index.js');
    app.use('/tasks', tasks);

    app.get("*", function (req, res) {
        res.render("admin/404.ejs");
      });

}

  


/*
module.exports = function (app, passport) {

    //Home page
    const index = require('./controllers/index.js')(passport);
    app.use('/', index);

    const api = require('./controllers/api/api.js');

    app.use('/api', api);
    const api_servidores = require('./controllers/api/servidores/index.js');

    app.use('/api/servidores', api_servidores);
    
    const api_patrimonio = require('./controllers/api/patrimonio/index.js');
    app.use('/api/patrimonio', api_patrimonio);

    const api_tasks = require('./controllers/api/tasks/index.js');
    app.use('/api/tasks', api_tasks);
    
    const tasks = require('./controllers/tasks/index.js');
    app.use('/tasks', tasks);



}
*/



