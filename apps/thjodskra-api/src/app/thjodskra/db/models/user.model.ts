import { DATE, UUIDV4 } from 'sequelize';
import { Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table
export class User extends Model {
  @PrimaryKey
  @Column(UUIDV4)
  override id!: string;

  @Column
  name!: string;

  @Column
  ssn!: string;

  @Column
  address!: string;

  @Column
  email!: string;

  @Column
  phone!: string;

  @Column(DATE)
  override createdAt!: string;

  @Column(DATE)
  override updatedAt?: string;
}
