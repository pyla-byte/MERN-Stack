const bcrypt = require('bcryptjs')
const User = require('../../models/user.model.js')

class RegisterController {
    register = async(req,res,next) => {
        try {
            const{name, email, password,phone, address} = req.body
            const hash =bcrypt.hashSync(password, 10)
            await User.create({name,email ,password:hash ,phone, address, role: 'Author'})
            res.status(201).send({
                message: "User registered successfully",
            })
            
        }catch(error)
        {
            console.log(error)
            next({

                message: "An error occurred while registering the user",
                status: 400
            })
        }

    }
}

module.exports = new RegisterController
