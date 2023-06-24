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

  @Column({unique : true})
  phoneNumber: string;

  @Column({unique: true})
  nationalID: string;

  @Column()
  createdDate: Date;

  @OneToMany(()=>Wallet,(wallet)=>wallet.user)
  wallets: Wallet[];

  @OneToMany(()=>History,(history)=>history.user)
  history: History[];
}