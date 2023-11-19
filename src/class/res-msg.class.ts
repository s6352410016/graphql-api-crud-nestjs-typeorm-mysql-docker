import { ObjectType , Field } from '@nestjs/graphql';

@ObjectType()
export class ResMsgClass{
    @Field()
    msg: string;
}