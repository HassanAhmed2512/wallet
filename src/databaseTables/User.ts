import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Wallet } from './wallet';
import { History } from './History';

// Users Table
@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn({type:'bigint'})
  id: number;

  @Column()
  email : string;

  @Column()
  password:string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({type:'bigint'})
  phoneNumber: number;

  @Column({type:'bigint'})
  nationalID: number;

  @Column()
  createdDate: Date;

  @OneToMany(()=>Wallet,(wallet)=>wallet.user)
  wallets: Wallet[];

  @OneToMany(()=>History,(history)=>history.user)
  history: History[];
}