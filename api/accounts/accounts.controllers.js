//\\ بسم الله الرحمن الرحيم //\\
//
//Import the accounts.js data file in your controllers file
// let accounts = require("../../accounts");
const Account = require("../../models/Account_");
//Import the accounts.js data file in your controllers file
//
//
const getAllAccounts = async (req, res, next) => {
  try {
    const accounts = await Account.find();
    return res.json(accounts);
  } catch (error) {
    next(error);
    // return res.status(500).json(error);
  }
};
//
//
// Moving to the controllers file, create a function
// called accountsGet that takes req and res and sends
// the accounts as a resposne and export it.
//

// Moving to the controllers file, create a function
// called accountsGet that takes req and res and sends
// the accounts as a resposne and export it.
//getallaccounts
//
//
//getAccountById
const getAccountById = async (req, res, next) => {
  //new way
  //new way
  try {
    return res.status(200).json(req.account);
  } catch (error) {
    next(error);
  }
  //new way
  //new way
  //old way
  // try {
  //   const _id = req.params._id;
  //   console.log(_id);
  //   const account = await Account.findById(_id, req.body);
  //   //if !account here
  //   return res.status(200).json(account);
  // } catch (error) {
  //   next(error);
  //   // console.log(error);
  //   // return res.status(500).json("Server error");
  // }
  //old way
};
//getAccountById

//
//
//new account

const accountCreate = async (req, res, next) => {
  //
  try {
    const account = await Account.create(req.body);
    return res.status(201).json();
  } catch (error) {
    next(error);
    // console.log(error);
    // return res.status(500).json("Server error");
  }
};

//   const newAccount = {
//     id: accounts[accounts.length - 1].id + 1,
//     username: req.body.username,
//     funds: 0,
//   };
//   accounts.push(newAccount);
//   return res.status(200).json(newAccount);
//new account
//
//Delete Account
const deleteAccount = async (req, res, next) => {
  //new way
  try {
    await req.account.deleteOne();
    return res.status(204).end();
  } catch (error) {
    next(error);
  }
  //new way
  //
  //old way
  // try {
  //   const _id = req.params._id;
  //   await Account.findByIdAndDelete(_id, req.body);
  //   return res.status(204).end();
  // } catch (error) {
  //   next(error);
  //   // console.log(error);
  //   // return res.status(500).json("Server error");
  // }
  //old way
};

//

//
// const accountId = req.params.id;
// const account = accounts.find((account) => {
//   return account.id == accountId;
// });
// if (account) {
//   accounts = accounts.filter((account) => {
//     return account.id != accountId;
//   });

//   return res.status(200).json(accounts);
// } else {
//   return res.status(404).json({ message: `account not found ${accountId}` });
// }
//Delete Account
//
//Update Account
const updateAccount = async (req, res, next) => {
  try {
    // const _id = req.params._id;
    // await Account.findByIdAndUpdate(_id, req.body);
    await req.account.updateOne(req.body);
    return res.status(204).end();
  } catch (error) {
    next(error);
    // console.log(eror);
    // return res.status(500).json("Server error");
  }
  // const accountId = req.params.id;
  // const account = accounts.find((account) => {
  //   return account.id == accountId;
  // });
  // if (!account) {
  //   return res.status(404).json({ message: `account not found ${accountId}` });
  // }

  // const { username, funds } = req.body;

  // account.username = username ? username : account.username;
  // account.funds = funds ? funds : account.funds;

  // return res.status(200).json(accounts);
};

//Update Account
//
module.exports = {
  accountCreate,
  deleteAccount,
  updateAccount,
  getAccountById,
  getAllAccounts,
};
