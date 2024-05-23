import { Router } from "express"
import { createUser, getUsers } from "../controllers/user.controller"
import { createVale, getVales } from "../controllers/vale.controller"
import { createEmpleado, getEmpleados } from "../controllers/empleado.controller"

const router = Router()

//Users routes
router.get('/users', getUsers)
router.post('/users', createUser)

//Vale routes
router.get('/vales', getVales)
router.post('/vales', createVale)

//Empleados routes
router.get('/empleados', getEmpleados)
router.post('/empleados', createEmpleado)


export default router