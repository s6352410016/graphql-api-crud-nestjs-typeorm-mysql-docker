import { Module } from '@nestjs/common';
import { CustomerResolver } from './customer.resolver';
import { CustomerService } from './customer.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from 'src/entities/customer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Customer])],
  providers: [CustomerResolver, CustomerService]
})
export class CustomerModule {}
