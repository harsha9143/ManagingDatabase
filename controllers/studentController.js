const db = require("../utils/dbUtil");

exports.addStudent = (req, res, next) => {
  const { name, email } = req.body;

  db.execute(
    "INSERT INTO students(name, email) VALUES(?, ?)",
    [name, email],
    (err) => {
      if (err) {
        console.log("Insertion failed");
        res.status(500).send(err.message);
        db.end();
        return;
      }
      res.status(200).send(`Student with name ${name} inserted in database`);
    }
  );
};

exports.editStudent = (req, res, next) => {
  const { name, email } = req.body;

  if (name && email) {
    return db.execute(
      "UPDATE students SET name = ?, email = ? WHERE id = ?;",
      [name, email, req.params.id],
      (err) => {
        if (err) {
          res.status(500).send("failed updating name and email");
        }
        res.status(200).send(`student name and email id is updated`);
      }
    );
  }

  if (name) {
    return db.execute(
      "UPDATE students SET name = ? WHERE id = ?;",
      [name, req.params.id],
      (err) => {
        if (err) {
          res.status(500).send("failed updating name");
        }
        res.status(200).send(`student name is updated`);
      }
    );
  }

  if (email) {
    return db.execute(
      "UPDATE students SET email = ? WHERE id = ?;",
      [email, req.params.id],
      (err) => {
        if (err) {
          res.status(500).send("failed updating email");
        }
        res.status(200).send(`student email id is updated`);
      }
    );
  }
};

exports.deleteStudent = (req, res, next) => {
  db.execute("DELETE FROM students WHERE id = ?", [req.params.id], (err) => {
    if (err) {
      res.status(500).send("Failed delting user");
    }
    res.status(200).send(`user deleted`);
  });
};
