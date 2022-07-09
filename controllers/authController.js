import db from '../config/db'
import joi from 'joi'
import bcrypt from 'bcrypt'



export default function postRegister() {
    const user = req.body
    const checkedCPF = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$/
    let cpfOk = checkedCPF.test(user.cpf)

    authSchema = joi.object({
        name: joi.string().required(),
        email: joi.string().email().required(),
        cpf: joi.string().required(),
        password: joi.string().min(8).required(),
        confirmPassword: joi.string().valid(joi.ref('password')).required(),
       
    })

    const validation = authSchema.validate(user, { abortEarly: false})
    
    if (!cpfOk) {
        return res.sendStatus(422).send("CPF inválido, por favor digite um cpf no formato xxx.xxx.xxx-xx")
    }
    if (validation.error ) {
        return res.status(422).send(validation.error.details.map((e) => e.message))
    }

    try {
        //testar se já existe email
        const existEmail = await db.collection('users').findOne({ email: user.email })

        if (existEmail) {
            res.sendStatus(409)
        }
        let bcryptPassword = bcrypt.hashSync(user.password, 10)
        await db.collection("users").insertOne({ ...user, password: bcryptPassword})
        res.sendStatus(201)
    } catch (error) {
        res.sendStatus(500)
    }

}