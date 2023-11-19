import { IsString , IsNotEmpty , IsNumber } from 'class-validator';
import { InputType , Field , Float} from '@nestjs/graphql';

@InputType()
export class CreateCustomerDto{
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