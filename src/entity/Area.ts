import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Edificio } from "./Edificio";

@Entity()
export class Area extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Edificio, (edificio) => edificio.areas )
    edificioId: Edificio

    @Column()
    nombre:string

    @Column()
    descripcion: string    

    @CreateDateColumn()
    fechaCreado: Date

    @UpdateDateColumn()
    fechaModificado: Date
}