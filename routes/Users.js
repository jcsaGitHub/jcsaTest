const express = require("express")
const users = express.Router()
const cors = require('cors')
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')

const User = require("../models/User")
users.use(cors())

process.env.SECRET_KEY = 'secret'

users.post('/register', (req, res) => {
    const today = new Date()
    const userData = {
        email: req.body.email,
        senha: req.body.senha,
        criacao: today
    }

    User.findOne({
        where:{
            email: req.body.email
        }
    })
    .then(user => {
        if(!user) {
            bcrypt.hash(req.body.senha, 10, (err, has) => {
                userData.senha = hash
                .then(user =>{
                    res.json({status: user.email + ' registrado'})
                })
                .catch(err => {
                    res.send('Erro:' + err)
                })
            })
        }else{
            res.json({info: "Usuario ja existe"})
        }
        })
        .catch(err => {
            res.send('Erro:'+ err)
    })
})

    users.post('/login', (req, res) => {
        User.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(user => {
            if(user){
                if(bcrypt.compareSync(req.body.senha, user.senha)) {
                    let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                        expiresIn: 1440
                    })
                    res.send(token)
                }
            }else{
                res.status(400).json({error: 'Usuario não existe'})
            }
        })
        .catch(err => {
            res.status(400).json({error: err })
        })
    })

module.exports = users