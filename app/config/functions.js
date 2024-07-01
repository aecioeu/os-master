async function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  
  function rand(timems) {
    var min = timems,
      max = timems + timems / 5;
    var rand = Math.random() * (max - min + 1) + min; //Generate Random number between 5 - 10
    return rand;
  }

  function makeid(length) {
    var result = "";
    // var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }



  function isLoggedIn(req, res, next) {
    req.session.urlRedirect = req.url;
    if (req.user) {
      return next();
    } else {
      req.session.save(() => {
        res.redirect("/login");
      });
    }
  }
  


  module.exports = {
    capitalizeFirstLetter,
    isLoggedIn,
    rand,
    delay,
    makeid
  };