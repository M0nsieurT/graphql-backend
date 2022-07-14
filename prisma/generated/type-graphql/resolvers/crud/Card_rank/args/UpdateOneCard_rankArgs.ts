import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Card_rankUpdateInput } from "../../../inputs/Card_rankUpdateInput";
import { Card_rankWhereUniqueInput } from "../../../inputs/Card_rankWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneCard_rankArgs {
  @TypeGraphQL.Field(_type => Card_rankUpdateInput, {
    nullable: false
  })
  data!: Card_rankUpdateInput;

  @TypeGraphQL.Field(_type => Card_rankWhereUniqueInput, {
    nullable: false
  })
  where!: Card_rankWhereUniqueInput;
}
