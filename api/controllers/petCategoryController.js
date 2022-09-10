const query = require('../config/db')

module.exports.createPetCategory = async (req, res) => {
    try {
        let { name } = req.body
        let createdBy = req.user.result.id
        let sql = "CREATE TABLE IF NOT EXISTS pet_category (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255),createdBy int ,FOREIGN KEY (createdBy) REFERENCES user(id),isActive BOOLEAN)";
        await query(sql).then(async response => {
            let sql = "INSERT INTO pet_category (name,createdBy,isActive) VALUES ?";
            let values = [[name, createdBy,1]]
            await query(sql, [values]).then(response => {
                return res.status(200).send({ status: 1, message: 'Pet category created successfully' })
            }).catch(err => {
                return res.status(400).send({ status: 0, message: 'Something failed!' });
            })

        }).catch(err => {
            return res.status(400).send({ status: 0, message: 'Something failed!' });
        })

    } catch (err) {
        return res.status(400).send({ status: 0, msg: err })
    }
}

module.exports.getAll = async (req, res) => {
    try {
        let sql = "SELECT * FROM pet_category WHERE isActive=1";
        await query(sql).then(response => {
            return res.status(200).send({ response, status: 1 })
        }).catch(err => {
            return res.status(400).send({ status: 0, message: 'Something failed!' });
        })
    } catch (err) {
        return res.status(400).send({ status: 0, msg: err })
    }
}


module.exports.getAllForAdmin = async (req, res) => {
    try {
        let sql = "SELECT * FROM pet_category";
        await query(sql).then(response => {
            return res.status(200).send({ response, status: 1 })
        }).catch(err => {
            return res.status(400).send({ status: 0, message: 'Something failed!' });
        })
    } catch (err) {
        return res.status(400).send({ status: 0, msg: err })
    }
}

module.exports.editPetCategory = async (req, res) => {
    try {
        let id = req.params.id
        let updateData = req.body
        let sql = "UPDATE pet_category SET ? WHERE id= ?";
        await query(sql, [updateData, id]).then(response => {
            return res.status(200).send({ status: 1, message: 'Pet category updated successfully' })
        }).catch(err => {
            return res.status(400).send({ status: 0, message: 'Something failed!' });
        })

    } catch (err) {
        return res.status(400).send({ status: 0, msg: err })
    }
}

module.exports.deletePetCategory = async (req, res) => {
    try {
        let id = req.params.id
        let sql = "DELETE FROM pet_category WHERE id = ?"
        await query(sql, [id]).then(response => {
            return res.status(200).send({ status: 1, message: 'Successfully deleted' })
        }).catch(err => {
            return res.status(400).send({ status: 0, message: 'Something failed!' });
        })
    } catch (err) {
        return res.status(400).send({ status: 0, msg: err })
    }
}

module.exports.editActiveStatus = async (req, res) => {
    try {
        let { activeStatus,id } = req.body
        let sql = "UPDATE pet_category SET isActive = " + activeStatus + " WHERE id = "+id+"";
        await query(sql).then(response => {
            return res.status(200).send({ status: 1, message: 'Successfully updated' })
        }).catch(err => {
            return res.status(400).send({ status: 0, message: 'Something failed!' });
        })
    } catch (err) {
        return res.status(400).send({ status: 0, msg: err })
    }
}