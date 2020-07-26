import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('transactions')
class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  title: string;

  @Column('varchar')
  type: 'income' | 'outcome';

  @Column('varchar')
  value: number;

  @Column('varchar')
  category_id: string;

  @Column('timestamp')
  created_at: Date;

  @Column('timestamp')
  updated_at: Date;
}

export default Transaction;
