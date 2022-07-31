import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Element_affinityAvgOrderByAggregateInput } from "../inputs/Element_affinityAvgOrderByAggregateInput";
import { Element_affinityCountOrderByAggregateInput } from "../inputs/Element_affinityCountOrderByAggregateInput";
import { Element_affinityMaxOrderByAggregateInput } from "../inputs/Element_affinityMaxOrderByAggregateInput";
import { Element_affinityMinOrderByAggregateInput } from "../inputs/Element_affinityMinOrderByAggregateInput";
import { Element_affinitySumOrderByAggregateInput } from "../inputs/Element_affinitySumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Element_affinityOrderByWithAggregationInput", {
  isAbstract: true
})
export class Element_affinityOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  element_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  affinity_element?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  affinity_type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Element_affinityCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Element_affinityCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Element_affinityAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Element_affinityAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Element_affinityMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Element_affinityMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Element_affinityMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Element_affinityMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Element_affinitySumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Element_affinitySumOrderByAggregateInput | undefined;
}
