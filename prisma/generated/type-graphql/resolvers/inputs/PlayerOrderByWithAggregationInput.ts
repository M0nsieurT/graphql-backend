import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlayerAvgOrderByAggregateInput } from "../inputs/PlayerAvgOrderByAggregateInput";
import { PlayerCountOrderByAggregateInput } from "../inputs/PlayerCountOrderByAggregateInput";
import { PlayerMaxOrderByAggregateInput } from "../inputs/PlayerMaxOrderByAggregateInput";
import { PlayerMinOrderByAggregateInput } from "../inputs/PlayerMinOrderByAggregateInput";
import { PlayerSumOrderByAggregateInput } from "../inputs/PlayerSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PlayerOrderByWithAggregationInput", {
  isAbstract: true
})
export class PlayerOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PlayerCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PlayerCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PlayerAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PlayerAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PlayerMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PlayerMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PlayerMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PlayerMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PlayerSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PlayerSumOrderByAggregateInput | undefined;
}
