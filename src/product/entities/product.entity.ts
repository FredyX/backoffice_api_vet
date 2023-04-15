import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    OneToMany,
  } from 'typeorm';


@Entity({ name: 'products', schema: 'pet' })
export class Product {
  @PrimaryGeneratedColumn()
  id_product: number;

  @ManyToOne(() => Product, (product) => product.id_sale)
  id_sale: number;
  
  @Column('varchar')
  name: string;

  @Column('varchar')
  detail: string;

  @Column('decimal')
  price: number;

  @Column('varchar')
  stage: string;

  @Column('varchar')
  brand: string;

}