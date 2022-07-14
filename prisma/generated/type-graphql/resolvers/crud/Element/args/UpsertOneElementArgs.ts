import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ElementCreateInput } from "../../../inputs/ElementCreateInput";
import { ElementUpdateInput } from "../../../inputs/ElementUpdateInput";
import { ElementWhereUniqueInput } from "../../../inputs/ElementWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneElementArgs {
  @TypeGraphQL.Field(_type => ElementWhereUniqueInput, {
    nullable: false
  })
  where!: ElementWhereUniqueInput;

  @TypeGraphQL.Field(_type => ElementCreateInput, {
    nullable: false
  })
  create!: ElementCreateInput;

  @TypeGraphQL.Field(_type => ElementUpdateInput, {
    nullable: false
  })
  update!: ElementUpdateInput;
}
