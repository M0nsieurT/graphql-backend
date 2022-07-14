import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Element_weaknessCreateNestedManyWithoutElement_elementToelement_weakness_element_idInput } from "../inputs/Element_weaknessCreateNestedManyWithoutElement_elementToelement_weakness_element_idInput";
import { Element_weaknessCreateNestedManyWithoutElement_elementToelement_weakness_weakness_element_idInput } from "../inputs/Element_weaknessCreateNestedManyWithoutElement_elementToelement_weakness_weakness_element_idInput";

@TypeGraphQL.InputType("ElementCreateWithoutCardInput", {
  isAbstract: true
})
export class ElementCreateWithoutCardInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => Element_weaknessCreateNestedManyWithoutElement_elementToelement_weakness_element_idInput, {
    nullable: true
  })
  element_weakness_elementToelement_weakness_element_id?: Element_weaknessCreateNestedManyWithoutElement_elementToelement_weakness_element_idInput | undefined;

  @TypeGraphQL.Field(_type => Element_weaknessCreateNestedManyWithoutElement_elementToelement_weakness_weakness_element_idInput, {
    nullable: true
  })
  element_weakness_elementToelement_weakness_weakness_element_id?: Element_weaknessCreateNestedManyWithoutElement_elementToelement_weakness_weakness_element_idInput | undefined;
}
