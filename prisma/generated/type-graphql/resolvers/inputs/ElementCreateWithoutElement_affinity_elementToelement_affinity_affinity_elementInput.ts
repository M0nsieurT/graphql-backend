import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CardCreateNestedManyWithoutElementInput } from "../inputs/CardCreateNestedManyWithoutElementInput";
import { Element_affinityCreateNestedManyWithoutElement_elementToelement_affinity_element_idInput } from "../inputs/Element_affinityCreateNestedManyWithoutElement_elementToelement_affinity_element_idInput";
import { Element_weaknessCreateNestedManyWithoutElement_elementToelement_weakness_element_idInput } from "../inputs/Element_weaknessCreateNestedManyWithoutElement_elementToelement_weakness_element_idInput";
import { Element_weaknessCreateNestedManyWithoutElement_elementToelement_weakness_weakness_element_idInput } from "../inputs/Element_weaknessCreateNestedManyWithoutElement_elementToelement_weakness_weakness_element_idInput";

@TypeGraphQL.InputType("ElementCreateWithoutElement_affinity_elementToelement_affinity_affinity_elementInput", {
  isAbstract: true
})
export class ElementCreateWithoutElement_affinity_elementToelement_affinity_affinity_elementInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => CardCreateNestedManyWithoutElementInput, {
    nullable: true
  })
  card?: CardCreateNestedManyWithoutElementInput | undefined;

  @TypeGraphQL.Field(_type => Element_affinityCreateNestedManyWithoutElement_elementToelement_affinity_element_idInput, {
    nullable: true
  })
  element_affinity_elementToelement_affinity_element_id?: Element_affinityCreateNestedManyWithoutElement_elementToelement_affinity_element_idInput | undefined;

  @TypeGraphQL.Field(_type => Element_weaknessCreateNestedManyWithoutElement_elementToelement_weakness_element_idInput, {
    nullable: true
  })
  element_weakness_elementToelement_weakness_element_id?: Element_weaknessCreateNestedManyWithoutElement_elementToelement_weakness_element_idInput | undefined;

  @TypeGraphQL.Field(_type => Element_weaknessCreateNestedManyWithoutElement_elementToelement_weakness_weakness_element_idInput, {
    nullable: true
  })
  element_weakness_elementToelement_weakness_weakness_element_id?: Element_weaknessCreateNestedManyWithoutElement_elementToelement_weakness_weakness_element_idInput | undefined;
}
