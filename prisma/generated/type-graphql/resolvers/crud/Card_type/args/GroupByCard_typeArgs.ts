import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Card_typeOrderByWithAggregationInput } from "../../../inputs/Card_typeOrderByWithAggregationInput";
import { Card_typeScalarWhereWithAggregatesInput } from "../../../inputs/Card_typeScalarWhereWithAggregatesInput";
import { Card_typeWhereInput } from "../../../inputs/Card_typeWhereInput";
import { Card_typeScalarFieldEnum } from "../../../../enums/Card_typeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCard_typeArgs {
  @TypeGraphQL.Field(_type => Card_typeWhereInput, {
    nullable: true
  })
  where?: Card_typeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Card_typeOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Card_typeOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Card_typeScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name">;

  @TypeGraphQL.Field(_type => Card_typeScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Card_typeScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
