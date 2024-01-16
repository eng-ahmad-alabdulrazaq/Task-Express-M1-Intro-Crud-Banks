//\\ بسم الله الرحمن الرحيم //\\

//express application instance, this is considered an import
const express = require("express");
let accounts = require("./accounts");
const app = express();
app.use(express.json());
//express application instance, this is considered an import
//
//routes: binding application to port 8000
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`this is port ${PORT}`);
});
//routes: binding application to port 8000
//
//accounts List Route
app.get("/api/accounts", (req, res) => {
  //
  return res.status(200).json(accounts);
});
//accounts List Route
//
//Create Account
app.post("/api/accounts", (req, res) => {
  //
  const newAccount = {
    id: accounts[accounts.length - 1].id + 1,
    username: req.body.username,
    funds: 0,
  };
  accounts.push(newAccount);
  return res.status(200).json(newAccount);
});
//Create Account
//
//Delete Account
app.delete("/api/accounts/:id", (req, res) => {
  const accountId = req.params.id;
  const account = accounts.find((account) => {
    return account.id == accountId;
  });
  if (account) {
    accounts = accounts.filter((account) => {
      return account.id != accountId;
    });

    return res.status(200).json(accounts);
  } else {
    return res.status(404).json({ message: `account not found ${accountId}` });
  }
});
//Delete Account
//
//Update Account
app.put("/api/accounts/:id", (req, res) => {
  const accountId = req.params.id;
  const account = accounts.find((account) => {
    return account.id == accountId;
  });
  //
  if (account) {
    accounts = accounts.map((account) => {
      if (account.id == accountId) {
        console.log("khaled");
        account = req.body;
        //beautiful
        // const updatedAccount = {
        //   id: req.body.id ? req.body.id : account.id,
        //   username: req.body.username ? req.body.username : account.username,
        //   funds: req.body.funds ? req.body.funds : account.funds,
        // };
        // return updatedAccount;
        //beautiful
      }
      return account;
    });

    // accounts = accounts.map(account, [accountId]);
    //
    // map((element, index, array) => { /* … */ })
    //
    // accounts = accounts.map((account) => {
    //   if (account.id == accountId) {
    //     account = req.body;
    //   }
    //     return account;
    // });
    // return;
    // accounts[accountId] = account;
    return res.status(200).json(accounts);
  }
  // );

  // return res.status(200).json(accounts);
  else {
    return res.status(404).json({ message: `account not found ${accountId}` });
  }
  //
});

//Update Account
