// config/passport.js
// load all the things we need
var pool = require('../config/pool-factory')
var LocalStrategy = require('passport-local').Strategy;
// load up the user model
var bcrypt = require('bcrypt-nodejs');

function slugify(string) {
    const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
    const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
    const p = new RegExp(a.split('').join('|'), 'g')

    return string.toString().toLowerCase()
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
        .replace(/&/g, '-and-') // Replace & with 'and'
        .replace(/[^\w\-]+/g, '') // Remove all non-word characters
        .replace(/\-\-+/g, '-') // Replace multiple - with single -
        .replace(/^-+/, '') // Trim - from start of text
        .replace(/-+$/, '') // Trim - from end of text
}

function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVXZabcdefghijklmnopqrstuvxz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

module.exports = function(app, passport) {

    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize customer out of session

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(async function(req, id, done) {
        var store = await pool.query("SELECT * FROM stores WHERE id = ?", [id])
            //console.log(customer[0], address, orders)
            //console.log(id_merchant, customer[0].id, customer[0].id_merchant)
            //console.log(orders)
            /* var data = {
                 store: store,
             }*/

        return done(null, store[0]);

    });

    // =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'


    passport.use(
        'local-signup',
        new LocalStrategy({
                // by default, local strategy uses username and password, we will override with email
                usernameField: 'email',
                passwordField: 'password',
                passReqToCallback: true // allows us to pass back the entire request to the callback

            },
            function(req, email, password, done) {
                //console.log(req.connection)
                // find a user whose email is the same as the forms email
                // we are checking to see if the user trying to login already exists

                pool.query("SELECT * FROM stores WHERE email = ?", [email], function(err, rows) {
                    if (err)
                        return done(err);
                    if (rows.length) {
                        return done(null, false, req.flash('signupMessage', 'Esse nome de usuario já existe.'));
                    } else {
                        // if there is no user with that username
                        // create the user
                        var newUserMysql = {
                            email: email,
                            password: bcrypt.hashSync(password, null, null) // use the generateHash function in our user model

                        };

                        var name = req.body.name
                        var s_cod = slugify(name)



                        pool.query("SELECT cod FROM stores WHERE cod = ?", s_cod, function(err, rows) {

                            var cod = ((rows.length) ? s_cod + '-' + makeid(2) : s_cod),
                                folder = cod

                            var insertQuery = "INSERT INTO stores (name, cod, folder, email, password) values (?, ?, ?, ?, ?)";

                            pool.query(insertQuery, [name, cod, folder, newUserMysql.email, newUserMysql.password], function(err, rows) {
                                if (err) {
                                    console.log(err.message)
                                }
                                 console.log(newUserMysql)
                                newUserMysql.id = rows.insertId;
                                return done(null, newUserMysql);
                            });

                        })


                    }
                });
            })
    );

    // =========================================================================
    // LOCAL LOGIN =============================================================
    // =========================================================================
    // we are us    xing named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use(
        'local-login',
        new LocalStrategy({
                // by default, local strategy uses username and password, we will override with email
                usernameField: 'email',
                passwordField: 'password',
                passReqToCallback: true // allows us to pass back the entire request to the callback
            },
            function(req, email, password, done) { // callback with email and password from our form
                pool.query("SELECT * FROM stores WHERE email = ?", [email], function(err, rows) {
                    //console.log(username.match(/\d/g).join(""))
                    if (err)
                        return done(err);
                    if (!rows.length) {
                        return done(null, false, req.flash('loginMessage', 'Usúario não encontrado.')); // req.flash is the way to set flashdata using connect-flash
                    }

                    // if the user is found but the password is wrong
                    if (!bcrypt.compareSync(password, rows[0].password)) {
                        return done(null, false, req.flash('loginMessage', 'Ops! Senha incoreta.')); // create the loginMessage and save it to session as flashdata
                    }
                    //  console.log(rows[0])
                    // all is well, return successful user
                    return done(null, rows[0]);
                });
            })
    );
};