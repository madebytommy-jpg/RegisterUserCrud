const controller = {}

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM usuarios", (err, usuarios) => {
            if (err){
                res.json(err)
            }
            res.render("usuarios", {
                data: usuarios
            })
        })
    })
}

controller.save = (req, res) => {
    const data = req.body
    req.getConnection((err, conn) => {
       conn.query("INSERT INTO usuarios set ?", [data], (err, usuario) => {
           res.redirect("/")
       })
   })
}

controller.edit = (req, res) => {
    const { id } = req.params
    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM usuarios  WHERE id = ?", [id], (err, usuario) => {
            res.render("usuarios_edit", {
                data: usuario[0]
            })
        })
    })
}

controller.update = (req, res) => {
    const { id } = req.params
    const newCustomer = req.body
    req.getConnection((err, conn) => {
        conn.query("UPDATE usuarios set ? WHERE id = ?", [newCustomer, id], (err, rows) => {
            res.redirect("/")
        })
    })
}

controller.delete = (req, res) => {
    const id = req.params.id
    req.getConnection((err, conn) => {
        conn.query("DELETE FROM usuarios WHERE id = ?", [id], (err, rows) => {
            res.redirect("/")
        })
    })
}

module.exports = controller