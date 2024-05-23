import { DataSource } from "typeorm";
import {User} from '../src/entity/User';
import { Empleado } from "./entity/empleado";
import { Area } from "./entity/Area";
import { Edificio } from "./entity/Edificio";
import { Vale } from "./entity/vale";

export const AppDataSourse = new DataSource({
    type: 'postgres',
    host: 'roundhouse.proxy.rlwy.net',
    username: 'postgres',
    password: 'ncXNgaErDbQdYmplRBvOUbdUqcDebrVU',
    port: 37590,
    database: 'railway',
    entities: [User,Empleado, Edificio, Area, Vale],
    logging: true,
    synchronize: true
})