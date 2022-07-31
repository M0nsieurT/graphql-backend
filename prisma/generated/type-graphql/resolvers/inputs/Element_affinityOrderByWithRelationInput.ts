import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ElementOrderByWithRelationInput } from "../inputs/ElementOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Element_affinityOrderByWithRelationInput", {
  isAbstract: true
})
export class Element_affinityOrderByWithRelationInput {
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

  @TypeGraphQL.Field(_type => ElementOrderByWithRelationInput, {
    nullable: true
  })
  element_elementToelement_affinity_element_id?: ElementOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => ElementOrderByWithRelationInput, {
    nullable: true
  })
  element_elementToelement_affinity_affinity_element?: ElementOrderByWithRelationInput | undefined;
}
