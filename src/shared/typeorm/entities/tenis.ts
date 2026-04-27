import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity('tenis')
export default class Tenis {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string; 

  @Column()
  brand: string;

  @Column('int')
  size: number; 

  @Column()
  color: string; 

  @Column()
  material: string; 

  @Column('decimal', { precision: 10, scale: 2 })
  price: number; 

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}