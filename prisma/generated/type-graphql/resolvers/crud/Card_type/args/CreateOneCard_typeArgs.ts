import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Card_typeCreateInput } from "../../../inputs/Card_typeCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneCard_typeArgs {
  @TypeGraphQL.Field(_type => Card_typeCreateInput, {
    nullable: false
  })
  data!: Card_typeCreateInput;
}
