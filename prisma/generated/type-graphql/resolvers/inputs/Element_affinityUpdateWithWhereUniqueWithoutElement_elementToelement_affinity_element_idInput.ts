import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Element_affinityUpdateWithoutElement_elementToelement_affinity_element_idInput } from "../inputs/Element_affinityUpdateWithoutElement_elementToelement_affinity_element_idInput";
import { Element_affinityWhereUniqueInput } from "../inputs/Element_affinityWhereUniqueInput";

@TypeGraphQL.InputType("Element_affinityUpdateWithWhereUniqueWithoutElement_elementToelement_affinity_element_idInput", {
  isAbstract: true
})
export class Element_affinityUpdateWithWhereUniqueWithoutElement_elementToelement_affinity_element_idInput {
  @TypeGraphQL.Field(_type => Element_affinityWhereUniqueInput, {
    nullable: false
  })
  where!: Element_affinityWhereUniqueInput;

  @TypeGraphQL.Field(_type => Element_affinityUpdateWithoutElement_elementToelement_affinity_element_idInput, {
    nullable: false
  })
  data!: Element_affinityUpdateWithoutElement_elementToelement_affinity_element_idInput;
}
