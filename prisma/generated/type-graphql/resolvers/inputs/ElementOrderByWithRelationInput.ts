import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CardOrderByRelationAggregateInput } from "../inputs/CardOrderByRelationAggregateInput";
import { Element_affinityOrderByRelationAggregateInput } from "../inputs/Element_affinityOrderByRelationAggregateInput";
import { Element_weaknessOrderByRelationAggregateInput } from "../inputs/Element_weaknessOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ElementOrderByWithRelationInput", {
  isAbstract: true
})
export class ElementOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CardOrderByRelationAggregateInput, {
    nullable: true
  })
  card?: CardOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Element_affinityOrderByRelationAggregateInput, {
    nullable: true
  })
  element_affinity_elementToelement_affinity_element_id?: Element_affinityOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Element_affinityOrderByRelationAggregateInput, {
    nullable: true
  })
  element_affinity_elementToelement_affinity_affinity_element?: Element_affinityOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Element_weaknessOrderByRelationAggregateInput, {
    nullable: true
  })
  element_weakness_elementToelement_weakness_element_id?: Element_weaknessOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Element_weaknessOrderByRelationAggregateInput, {
    nullable: true
  })
  element_weakness_elementToelement_weakness_weakness_element_id?: Element_weaknessOrderByRelationAggregateInput | undefined;
}
