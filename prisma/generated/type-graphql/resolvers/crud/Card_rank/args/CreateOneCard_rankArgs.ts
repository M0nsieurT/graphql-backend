import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Card_rankCreateInput } from "../../../inputs/Card_rankCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneCard_rankArgs {
  @TypeGraphQL.Field(_type => Card_rankCreateInput, {
    nullable: false
  })
  data!: Card_rankCreateInput;
}
