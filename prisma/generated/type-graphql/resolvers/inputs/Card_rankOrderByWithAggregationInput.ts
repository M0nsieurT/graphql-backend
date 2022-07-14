import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Card_rankAvgOrderByAggregateInput } from "../inputs/Card_rankAvgOrderByAggregateInput";
import { Card_rankCountOrderByAggregateInput } from "../inputs/Card_rankCountOrderByAggregateInput";
import { Card_rankMaxOrderByAggregateInput } from "../inputs/Card_rankMaxOrderByAggregateInput";
import { Card_rankMinOrderByAggregateInput } from "../inputs/Card_rankMinOrderByAggregateInput";
import { Card_rankSumOrderByAggregateInput } from "../inputs/Card_rankSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Card_rankOrderByWithAggregationInput", {
  isAbstract: true
})
export class Card_rankOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  code?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Card_rankCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Card_rankCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Card_rankAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Card_rankAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Card_rankMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Card_rankMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Card_rankMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Card_rankMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Card_rankSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Card_rankSumOrderByAggregateInput | undefined;
}
