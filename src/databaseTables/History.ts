import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User';

//  The Histry Table 
@Entity({ name: 'history' })
export class History {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'bigint' })
  receiverId: number;

  @Column({ type: 'bigint' })
  cash: number;

  @Column()
  createdDate: Date;

  @Column()
  transfertype : string;

  @ManyToOne(() => User, (user) => user.history)
  user: User;
}
