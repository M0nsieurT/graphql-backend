import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ElementOrderByWithRelationInput } from "../inputs/ElementOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Element_weaknessOrderByWithRelationInput", {
  isAbstract: true
})
export class Element_weaknessOrderByWithRelationInput {
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

  @TypeGraphQL.Field(_type => ElementOrderByWithRelationInput, {
    nullable: true
  })
  element_elementToelement_weakness_element_id?: ElementOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => ElementOrderByWithRelationInput, {
    nullable: true
  })
  element_elementToelement_weakness_weakness_element_id?: ElementOrderByWithRelationInput | undefined;
}
