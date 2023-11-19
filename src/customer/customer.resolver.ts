import { Resolver , Query, Mutation , Args, Int } from '@nestjs/graphql';
import { Customer } from 'src/entities/customer.entity';
import { ResMsg } from '../interfaces/res-msg';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from 'src/dtos/create-customer.dto';
import { UpdateCustomerDto } from 'src/dtos/update-customer.dto';
import { ResMsgClass } from 'src/class/res-msg.class';

@Resolver(() => Customer)
export class CustomerResolver {
    constructor(private readonly customerService: CustomerService){}

    @Mutation(() => Customer)
    async create(@Args({name: "createCustomerDto"}) createCustomerDto: CreateCustomerDto): Promise<Customer>{
        return this.customerService.create(createCustomerDto);
    }

    @Query(() => [Customer])
    async getAll(): Promise<Customer[] | ResMsg>{
        return this.customerService.getAll();
    }

    @Query(() => Customer)
    async getById(@Args({name: "id" , type: () => Int}) id: number): Promise<Customer | ResMsg>{
        return this.customerService.getById(id);
    }

    @Mutation(() => Customer)
    async update(@Args({name: "updateCustomerDto"}) updateCustomerDto: UpdateCustomerDto): Promise<Customer | ResMsg>{
        return this.customerService.update(updateCustomerDto);
    }

    @Mutation(() => ResMsgClass)
    async delete(@Args({name: "id" , type: () => Int}) id: number): Promise<ResMsg>{
        return this.customerService.delete(id);
    }
}
