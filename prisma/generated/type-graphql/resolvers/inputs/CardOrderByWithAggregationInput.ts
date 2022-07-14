import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CardAvgOrderByAggregateInput } from "../inputs/CardAvgOrderByAggregateInput";
import { CardCountOrderByAggregateInput } from "../inputs/CardCountOrderByAggregateInput";
import { CardMaxOrderByAggregateInput } from "../inputs/CardMaxOrderByAggregateInput";
import { CardMinOrderByAggregateInput } from "../inputs/CardMinOrderByAggregateInput";
import { CardSumOrderByAggregateInput } from "../inputs/CardSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CardOrderByWithAggregationInput", {
  isAbstract: true
})
export class CardOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  power?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  element_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  rank_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  card_type_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  max_chain?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CardCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: CardCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CardAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: CardAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CardMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: CardMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CardMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: CardMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CardSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: CardSumOrderByAggregateInput | undefined;
}
