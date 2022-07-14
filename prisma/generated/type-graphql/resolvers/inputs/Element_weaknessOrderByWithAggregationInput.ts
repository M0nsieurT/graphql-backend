import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Element_weaknessAvgOrderByAggregateInput } from "../inputs/Element_weaknessAvgOrderByAggregateInput";
import { Element_weaknessCountOrderByAggregateInput } from "../inputs/Element_weaknessCountOrderByAggregateInput";
import { Element_weaknessMaxOrderByAggregateInput } from "../inputs/Element_weaknessMaxOrderByAggregateInput";
import { Element_weaknessMinOrderByAggregateInput } from "../inputs/Element_weaknessMinOrderByAggregateInput";
import { Element_weaknessSumOrderByAggregateInput } from "../inputs/Element_weaknessSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Element_weaknessOrderByWithAggregationInput", {
  isAbstract: true
})
export class Element_weaknessOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  element_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  weakness_element_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  coef?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Element_weaknessCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Element_weaknessCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Element_weaknessAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Element_weaknessAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Element_weaknessMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Element_weaknessMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Element_weaknessMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Element_weaknessMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Element_weaknessSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Element_weaknessSumOrderByAggregateInput | undefined;
}
