//\\ بسم الله الرحمن الرحيم //\\
//
//Initialize your mini express app in accounts.routes.js.
const express = require("express");
let accounts = require("../../accounts");
const {
  accountCreate,
  deleteAccount,
  updateAccount,
  getAllAccounts,
  getAccountById,
} = require("./accounts.controllers");
const Account_ = require("../../models/Account_");
const router = express.Router();
//
//middleware check
router.param("_id", async (req, res, next, _id) => {
  const account = await Account_.findById(_id);
  if (!account) {
    return res.status(404).json({ message: "THIS ID IS INVALID!" });
  }
  req.account = account;
  next();
});
//middleware check
//
//routes
router.get("/", getAllAccounts);
router.post("/", accountCreate);
router.delete("/:_id", deleteAccount);
router.put("/:_id", updateAccount);
router.get("/:_id", getAccountById);
//routes
//Initialize your mini express app in accounts.routes.js.
//
//Move all your routes from app.js to accounts.routes.js
//and replace all app to router.
//
//Fetch Accounts
// router.get("/", (req, res) => {
//   return res.status(200).json(accounts);
// });
//Fetch Accounts
//
//Create Account
// router.post("/", (req, res) => {
//   //
//   const newAccount = {
//     id: accounts[accounts.length - 1].id + 1,
//     username: req.body.username,
//     funds: 0,
//   };
//   accounts.push(newAccount);
//   return res.status(200).json(newAccount);
// });
//Create Account
// //
// //Delete Account
// router.delete("/:id", (req, res) => {
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
// //Delete Account
// //
// //Update Account
// router.put("/:id", (req, res) => {
//   const accountId = req.params.id;
//   const account = accounts.find((account) => {
//     return account.id == accountId;
//   });
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

//     return res.status(200).json(accounts);
//   } else {
//     return res.status(404).json({ message: `account not found ${accountId}` });
//   }
// });
// //Update Account
//
//Move all your routes from app.js to accounts.routes.js
//and replace all app to router.
//
//Export your router.
module.exports = router;
//Export your router.
