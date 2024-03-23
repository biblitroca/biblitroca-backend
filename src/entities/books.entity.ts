import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import User from "./users.entity";

@Entity({ name: "books" })
class Book {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 50 })
  author: string;

  @Column({ length: 7 })
  type: string;

  @Column({ type: "integer" })
  price: number;

  @ManyToOne(() => User, (user) => user.book)
  user: User;
}

export default Book;
