//\\ بسم الله الرحمن الرحيم //\\

//express application instance, this is considered an import
const express = require("express");
let accounts = require("./accounts");
//
// In your app.js import your new routes file.
let accountsRoute = require("./api/accounts/accounts.routes");
const connectDB = require("./database");
const morgan = require("morgan"); //after npm i morgan
// In your app.js import your new routes file.
//
const app = express();
app.use(express.json());
app.use(morgan("dev")); //after npm i morgan
//express application instance, this is considered an import
//
// In your app.js import your new routes file.
// Use your new routes with app.use.
app.use("/api/accounts", accountsRoute);
// Use your new routes with app.use.
// In your app.js import your new routes file.
//
// error
// notfound error
app.use((req, res, next) => {
  return res.status(404).json({ message: "PATH NOT FOUND!" });
});
// notfound error

// error handler
app.use((error, req, res, next) => {
  return res.status(error.status || 500).json(error.message || "SERVER ERROR!");
});
// error handler

// error
//
//routes: binding application to port 8000
connectDB(); //connecting to DB
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`this is port ${PORT}`);
});
//routes: binding application to port 8000
//
//moved from here to accounts.routes.js
//accounts List Route
// app.get("/api/accounts", (req, res) => {
//   //
//   return res.status(200).json(accounts);
// });
// //accounts List Route
// //
// //Create Account
// app.post("/api/accounts", (req, res) => {
//   //
//   const newAccount = {
//     id: accounts[accounts.length - 1].id + 1,
//     username: req.body.username,
//     funds: 0,
//   };
//   accounts.push(newAccount);
//   return res.status(200).json(newAccount);
// });
// //Create Account
// //
// //Delete Account
// app.delete("/api/accounts/:id", (req, res) => {
//   const accountId = req.params.id;
//   const account = accounts.find((account) => {
//     return account.id == accountId;
//   });
//   if (account) {
//     accounts = accounts.filter((account) => {
//       return account.id != accountId;
//     });

//     return res.status(200).json(accounts);
//   } else {
//     return res.status(404).json({ message: `account not found ${accountId}` });
//   }
// });
//Delete Account
//
// //Update Account
// app.put("/api/accounts/:id", (req, res) => {
//   const accountId = req.params.id;
//   const account = accounts.find((account) => {
//     return account.id == accountId;
//   });
//   //
//   if (account) {
//     accounts = accounts.map((account) => {
//       if (account.id == accountId) {
//         console.log("khaled");
//         account = req.body;
//         //beautiful
//         // const updatedAccount = {
//         //   id: req.body.id ? req.body.id : account.id,
//         //   username: req.body.username ? req.body.username : account.username,
//         //   funds: req.body.funds ? req.body.funds : account.funds,
//         // };
//         // return updatedAccount;
//         //beautiful
//       }
//       return account;
//     });

//     // accounts = accounts.map(account, [accountId]);
//     //
//     // map((element, index, array) => { /* … */ })
//     //
//     // accounts = accounts.map((account) => {
//     //   if (account.id == accountId) {
//     //     account = req.body;
//     //   }
//     //     return account;
//     // });
//     // return;
//     // accounts[accountId] = account;
//     return res.status(200).json(accounts);
//   }
//   // );

//   // return res.status(200).json(accounts);
//   else {
//     return res.status(404).json({ message: `account not found ${accountId}` });
//   }
//   //
//   //moved from here to accounts.routes.js

// });

//Update Account
