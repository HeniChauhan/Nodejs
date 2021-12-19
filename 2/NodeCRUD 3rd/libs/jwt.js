
const jwt = require('jsonwebtoken')
const request = require('request')

const jwtKey = 'my_secret_key'
const jwtExpirySeconds = 3000

  
// const sign = (req, res) => {
  
//   const username = req.body.fullName

//   console.log(username)
//     const token = jwt.sign({ username: "user1" }, jwtKey, {
//       algorithm: 'HS256',
//       expiresIn: jwtExpirySeconds
//     })
//     console.log('token:', token)
//    res.cookie('token', token, { maxAge: jwtExpirySeconds * 1000 })
//    res.redirect('/student/list');
//   }
  
  const verify = (req, res, next) => {
    let token;
    if(req.cookies.token)
    {
         token = req.cookies.token
    }
    if (!token) {
      return res.status(401).end("Pls provide token")
    }
    var payload
    try {
      payload = jwt.verify(token, jwtKey)
      console.log("Payload ");
      console.log(payload );
      console.log("PL");
      next();
    } catch (e) {
      if (e instanceof jwt.JsonWebTokenError) {
        return res.status(401).end("Invalid token")
      }
      return res.status(400).end("Bad request")
    }
    //res.status(200); // return true
   // res.send(`Welcome ${payload.username}!`)
  }
  
  module.exports = {
    // sign,
    verify
    
}  