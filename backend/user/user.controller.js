import con from "../sqldb.js";

export async function signUp(req, res) {
  const { username, email, password } = req.body;
  var sql = "INSERT INTO USER(username,email,password) VALUES ( ?, ?, ? )";

  con.query(sql, [username, email, password], (err, result) => {
    if (err) {
      return res.json({ msg: "SignUp Failed!" });
    } else {
      return res.json({
        msg: "SignUp Successfull!",
        user: result,
      });
    }
  });
}

export async function signIn(req, res, next) {
  const { email, password } = req.body;
  var sql =
    "SELECT * FROM USER WHERE username = '" +
    email +
    "' OR email = '" +
    email +
    "' AND password =  '" +
    password +
    "'";

  con.query(sql, (err, result) => {
    if (err) {
      return res.json({ msg: "SignIn Failed!" });
    } else {
      return res.json({ msg: "SignIn Successfull!", user: result });
    }
  });
}
