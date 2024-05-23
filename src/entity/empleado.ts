import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./User";
import { Vale } from "./vale";

@Entity()
export class Empleado extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @OneToOne(()=> User)
    @JoinColumn()
    usuarioId: User

    @OneToOne(()=> Vale)
    @JoinColumn()
    valeId: Vale
    
    @Column()
    nombre:string

    @Column()
    ap_paterno: string

    @Column()
    ap_materno: string

    @Column()
    telefono: string

    @CreateDateColumn()
    fechaCreado: Date

    @UpdateDateColumn()
    fechaModificado: Date
}