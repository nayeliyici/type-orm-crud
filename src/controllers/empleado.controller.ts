import { Request, Response } from "express"
import { Empleado } from '../entity/empleado';
import { error, log } from "console"
import { User } from "../entity/User";
import { Vale } from "../entity/vale";


export const getEmpleados = async (req: Request, res: Response) => {
    try {
        const listaEmpleado = await Empleado.find()
        return res.json(listaEmpleado)
    } catch {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message })
        }
    }
}

export const createEmpleado = async (req: Request, res: Response) => {
    try {
        const {nombre, ap_paterno, ap_materno, telefono,usuarioId, valeId} = req.body

        // const user = User.findBy(usuarioId)
        // const vale = Vale.findBy(valeId)
        
        const empleado = new Empleado()
        empleado.nombre = nombre
        empleado.ap_paterno = ap_paterno
        empleado.ap_materno = ap_materno
        empleado.telefono = telefono
        empleado.usuarioId = usuarioId
        empleado.valeId = valeId
        await empleado.save()

        return res.json(empleado)
    } catch (error) {

    }
}