import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ElementAvgOrderByAggregateInput } from "../inputs/ElementAvgOrderByAggregateInput";
import { ElementCountOrderByAggregateInput } from "../inputs/ElementCountOrderByAggregateInput";
import { ElementMaxOrderByAggregateInput } from "../inputs/ElementMaxOrderByAggregateInput";
import { ElementMinOrderByAggregateInput } from "../inputs/ElementMinOrderByAggregateInput";
import { ElementSumOrderByAggregateInput } from "../inputs/ElementSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ElementOrderByWithAggregationInput", {
  isAbstract: true
})
export class ElementOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ElementCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ElementCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ElementAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ElementAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ElementMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ElementMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ElementMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ElementMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ElementSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ElementSumOrderByAggregateInput | undefined;
}
