import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Card_typeCreateInput } from "../../../inputs/Card_typeCreateInput";
import { Card_typeUpdateInput } from "../../../inputs/Card_typeUpdateInput";
import { Card_typeWhereUniqueInput } from "../../../inputs/Card_typeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneCard_typeArgs {
  @TypeGraphQL.Field(_type => Card_typeWhereUniqueInput, {
    nullable: false
  })
  where!: Card_typeWhereUniqueInput;

  @TypeGraphQL.Field(_type => Card_typeCreateInput, {
    nullable: false
  })
  create!: Card_typeCreateInput;

  @TypeGraphQL.Field(_type => Card_typeUpdateInput, {
    nullable: false
  })
  update!: Card_typeUpdateInput;
}
