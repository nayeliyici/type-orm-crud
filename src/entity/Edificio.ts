import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Area } from "./Area";

@Entity()
export class Edificio extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @OneToMany(() => Area, (area) => area.edificioId)
    areas: Area[]

    @Column()
    nombre:string
    
    @Column()
    planta:number

    @Column()
    descripcion: string    

    @CreateDateColumn()
    fechaCreado: Date

    @UpdateDateColumn()
    fechaModificado: Date
}