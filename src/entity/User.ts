import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    correo_electronico:string

    @Column()
    contraseña:string

    @Column({
        default: true //agregar valor por defecto
    })
    activo: boolean

    @CreateDateColumn()
    fechaCreado: Date

    
    @UpdateDateColumn()
    fechaModificado: Date
}