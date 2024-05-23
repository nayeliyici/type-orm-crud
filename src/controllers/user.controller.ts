import { Request, Response } from "express"
import { User } from "../entity/User"
import { error, log } from "console"

export const getUsers = async(req: Request, res: Response) => {
    try {
        const listaUsers = await User.find()
        return res.json(listaUsers)
    }catch{
        if(error instanceof Error){
            return res.status(500).json({message: error.message})
        }
    }
}

export const createUser = async(req: Request, res: Response) => {
    try{
        console.log(req.body)

        // const {nombre, ap_paterno, ap_materno } = req.body
        const {correo_electronico,contraseña} = req.body
        const user = new User()
        // user.nombre = nombre
        // user.ap_paterno = ap_paterno
        // user.ap_materno = ap_materno
        user.correo_electronico = correo_electronico
        user.contraseña = contraseña
        await user.save()

        return res.json(user)
    }catch (error){

    }
}
// export const updateUser = async(req: Request, res: Response) => {

// }
// export const deleteUser = async(req: Request, res: Response) => {

// }