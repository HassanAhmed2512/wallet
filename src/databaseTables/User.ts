import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Wallet } from './wallet';
import { History } from './History';

// Users Table
@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn({type:'bigint'})
  id: number;

  @Column({unique: true})
  email : string;

  @Column()
  password:string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({type:'bigint' , unique : true})
  phoneNumber: number;

  @Column({type:'bigint' , unique: true})
  nationalID: number;

  @Column()
  createdDate: Date;

  @OneToMany(()=>Wallet,(wallet)=>wallet.user)
  wallets: Wallet[];

  @OneToMany(()=>History,(history)=>history.user)
  history: History[];
}