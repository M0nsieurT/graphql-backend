import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Card_typeWhereUniqueInput } from "../../../inputs/Card_typeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneCard_typeArgs {
  @TypeGraphQL.Field(_type => Card_typeWhereUniqueInput, {
    nullable: false
  })
  where!: Card_typeWhereUniqueInput;
}
