import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Card_typeWhereInput } from "../../../inputs/Card_typeWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCard_typeArgs {
  @TypeGraphQL.Field(_type => Card_typeWhereInput, {
    nullable: true
  })
  where?: Card_typeWhereInput | undefined;
}
