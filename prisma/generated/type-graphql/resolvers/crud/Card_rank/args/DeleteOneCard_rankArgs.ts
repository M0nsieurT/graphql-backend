import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Card_rankWhereUniqueInput } from "../../../inputs/Card_rankWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneCard_rankArgs {
  @TypeGraphQL.Field(_type => Card_rankWhereUniqueInput, {
    nullable: false
  })
  where!: Card_rankWhereUniqueInput;
}
