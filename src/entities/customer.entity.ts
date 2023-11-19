import { Entity , Column , CreateDateColumn , UpdateDateColumn , PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType , Field , Int , Float } from '@nestjs/graphql';

@ObjectType()
@Entity({name: "customer_tb"})
export class Customer{
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    cust_id: number;

    @Field()
    @Column("varchar")
    cust_name: string;

    @Field()
    @Column("varchar")
    cust_address: string;

    @Field()
    @Column("varchar")
    cust_tel: string;

    @Field(() => Float)
    @Column("double")
    cust_salary: number;

    @Field()
    @CreateDateColumn()
    createdAt: Date;

    @Field()
    @UpdateDateColumn()
    updatedAt: Date;
}