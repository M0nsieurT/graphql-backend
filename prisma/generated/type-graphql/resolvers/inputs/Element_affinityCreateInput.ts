import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ElementCreateNestedOneWithoutElement_affinity_elementToelement_affinity_affinity_elementInput } from "../inputs/ElementCreateNestedOneWithoutElement_affinity_elementToelement_affinity_affinity_elementInput";
import { ElementCreateNestedOneWithoutElement_affinity_elementToelement_affinity_element_idInput } from "../inputs/ElementCreateNestedOneWithoutElement_affinity_elementToelement_affinity_element_idInput";

@TypeGraphQL.InputType("Element_affinityCreateInput", {
  isAbstract: true
})
export class Element_affinityCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  affinity_type!: number;

  @TypeGraphQL.Field(_type => ElementCreateNestedOneWithoutElement_affinity_elementToelement_affinity_element_idInput, {
    nullable: false
  })
  element_elementToelement_affinity_element_id!: ElementCreateNestedOneWithoutElement_affinity_elementToelement_affinity_element_idInput;

  @TypeGraphQL.Field(_type => ElementCreateNestedOneWithoutElement_affinity_elementToelement_affinity_affinity_elementInput, {
    nullable: false
  })
  element_elementToelement_affinity_affinity_element!: ElementCreateNestedOneWithoutElement_affinity_elementToelement_affinity_affinity_elementInput;
}
