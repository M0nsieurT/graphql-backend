import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ElementWhereUniqueInput } from "../../../inputs/ElementWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneElementArgs {
  @TypeGraphQL.Field(_type => ElementWhereUniqueInput, {
    nullable: false
  })
  where!: ElementWhereUniqueInput;
}
