import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'test' })
export class Test {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: 300 })
  title: string;
}
