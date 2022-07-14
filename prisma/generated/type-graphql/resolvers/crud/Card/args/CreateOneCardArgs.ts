import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CardCreateInput } from "../../../inputs/CardCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneCardArgs {
  @TypeGraphQL.Field(_type => CardCreateInput, {
    nullable: false
  })
  data!: CardCreateInput;
}
