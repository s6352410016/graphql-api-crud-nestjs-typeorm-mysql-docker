import { IsString , IsNumber , IsNotEmpty } from 'class-validator';
import { InputType , Field , Float , Int} from '@nestjs/graphql';

@InputType()
export class UpdateCustomerDto{
    @Field(() => Int)
    @IsNotEmpty()
    cust_id: number;

    @Field()
    @IsNotEmpty()
    @IsString()
    cust_name: string;

    @Field()
    @IsNotEmpty()
    @IsString()
    cust_address: string;

    @Field()
    @IsNotEmpty()
    @IsString()
    cust_tel: string;

    @Field(() => Float)
    @IsNotEmpty()
    @IsNumber()
    cust_salary: number;
}