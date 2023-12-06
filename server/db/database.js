// const express = require('express');
// const { default: mongoose } = require('mongoose');
// const path = require('path');
// const router = express.Router()


// router.get('/', (req, res) => {
//   res.send('Hello World!')
// })


// //connecting mongodb through mongoose

// const connectDb = async () => {
//   const connect = async () => {
//     await mongoose.connect('mongodb://localhost:27017/Xotel');
//   }
//   connect().then(() => {
//     console.log("Suceessfully connected to the database")
//   })
//   connect().catch((err) => {
//     console.log(err);
//   })
// }
// connectDb();
// const userLoginSchema = new mongoose.Schema({
//   mobileno: {
//     type: Number,
//     require: true,
//     unique: true
//   },
//   password: String
// })
// const Users = new mongoose.model('Users', userLoginSchema)

// var new_user = new Users(
//   {
//     mobileno: 7483989780,
//     password: "havyas@1234"
//   })
// const save_user = () => {
//  new_user.save().then((result) => {
//     console.log(result)
//   }).catch((err) => {
//     if(err.code == 11000 || err.code == 11001)
//     {
//       console.log("U already have an account")
//     }
//     else
//     {
//       console.log(err) }
//     })
// }
// save_user();

// module.exports = router;