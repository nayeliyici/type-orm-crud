import { Request, Response } from "express"
import { Vale } from "../entity/vale"
import { error, log } from "console"


export const getVales = async(req: Request, res: Response) => {
    try {
        const listaVale = await Vale.find()
        return res.json(listaVale)
    }catch{
        if(error instanceof Error){
            return res.status(500).json({message: error.message})
        }
    }
}

export const createVale = async(req: Request, res: Response) => {
    try{
        console.log(req.body)

        const {num_serie,unidad,modelo,marca} = req.body
        const vale = new Vale()
        vale.num_serie = num_serie
        vale.unidad = unidad
        vale.modelo = modelo
        vale.marca = marca
        await vale.save()

        return res.json(vale)
    }catch (error){

    }
}