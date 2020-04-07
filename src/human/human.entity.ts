import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Human {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  name: string;

  @Column('text')
  lastname: string;

  @Column('int')
  age: number;

  @Column('real')
  height: number;

  @Column('real')
  weight: number;

  @Column('text')
  taxCode: string;
}