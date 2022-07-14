import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ElementCreateNestedOneWithoutElement_weakness_elementToelement_weakness_element_idInput } from "../inputs/ElementCreateNestedOneWithoutElement_weakness_elementToelement_weakness_element_idInput";

@TypeGraphQL.InputType("Element_weaknessCreateWithoutElement_elementToelement_weakness_weakness_element_idInput", {
  isAbstract: true
})
export class Element_weaknessCreateWithoutElement_elementToelement_weakness_weakness_element_idInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  coef!: number;

  @TypeGraphQL.Field(_type => ElementCreateNestedOneWithoutElement_weakness_elementToelement_weakness_element_idInput, {
    nullable: false
  })
  element_elementToelement_weakness_element_id!: ElementCreateNestedOneWithoutElement_weakness_elementToelement_weakness_element_idInput;
}
