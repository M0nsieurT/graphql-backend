import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Card_rankCreateInput } from "../../../inputs/Card_rankCreateInput";
import { Card_rankUpdateInput } from "../../../inputs/Card_rankUpdateInput";
import { Card_rankWhereUniqueInput } from "../../../inputs/Card_rankWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneCard_rankArgs {
  @TypeGraphQL.Field(_type => Card_rankWhereUniqueInput, {
    nullable: false
  })
  where!: Card_rankWhereUniqueInput;

  @TypeGraphQL.Field(_type => Card_rankCreateInput, {
    nullable: false
  })
  create!: Card_rankCreateInput;

  @TypeGraphQL.Field(_type => Card_rankUpdateInput, {
    nullable: false
  })
  update!: Card_rankUpdateInput;
}
