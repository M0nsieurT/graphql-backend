import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Player_cardAvgOrderByAggregateInput } from "../inputs/Player_cardAvgOrderByAggregateInput";
import { Player_cardCountOrderByAggregateInput } from "../inputs/Player_cardCountOrderByAggregateInput";
import { Player_cardMaxOrderByAggregateInput } from "../inputs/Player_cardMaxOrderByAggregateInput";
import { Player_cardMinOrderByAggregateInput } from "../inputs/Player_cardMinOrderByAggregateInput";
import { Player_cardSumOrderByAggregateInput } from "../inputs/Player_cardSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Player_cardOrderByWithAggregationInput", {
  isAbstract: true
})
export class Player_cardOrderByWithAggregationInput {
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
  card_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  player_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Player_cardCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Player_cardCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Player_cardAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Player_cardAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Player_cardMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Player_cardMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Player_cardMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Player_cardMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Player_cardSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Player_cardSumOrderByAggregateInput | undefined;
}
