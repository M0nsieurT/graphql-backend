import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Card_rankOrderByWithAggregationInput } from "../../../inputs/Card_rankOrderByWithAggregationInput";
import { Card_rankScalarWhereWithAggregatesInput } from "../../../inputs/Card_rankScalarWhereWithAggregatesInput";
import { Card_rankWhereInput } from "../../../inputs/Card_rankWhereInput";
import { Card_rankScalarFieldEnum } from "../../../../enums/Card_rankScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCard_rankArgs {
  @TypeGraphQL.Field(_type => Card_rankWhereInput, {
    nullable: true
  })
  where?: Card_rankWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Card_rankOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Card_rankOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Card_rankScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "code" | "name">;

  @TypeGraphQL.Field(_type => Card_rankScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Card_rankScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
