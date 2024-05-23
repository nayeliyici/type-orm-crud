import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Vale extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    num_serie:number

    @Column()
    unidad: number    
    
    @Column()
    modelo: string    
    
    @Column()
    marca: string    

    @CreateDateColumn()
    fechaCreado: Date

    @UpdateDateColumn()
    fechaModificado: Date
}