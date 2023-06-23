import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User';

//  The Histry Table 
@Entity({ name: 'history' })
export class History {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'bigint' })
  idReceive: number;

  @Column({ type: 'bigint' })
  cash: number;

  @Column()
  createdDate: Date;

  @ManyToOne(() => User, (user) => user.history)
  user: User;
}
