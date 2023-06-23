import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User';

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
