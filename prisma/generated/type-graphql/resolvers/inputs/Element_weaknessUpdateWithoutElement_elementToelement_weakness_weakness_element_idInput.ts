import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ElementUpdateOneRequiredWithoutElement_weakness_elementToelement_weakness_element_idNestedInput } from "../inputs/ElementUpdateOneRequiredWithoutElement_weakness_elementToelement_weakness_element_idNestedInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";

@TypeGraphQL.InputType("Element_weaknessUpdateWithoutElement_elementToelement_weakness_weakness_element_idInput", {
  isAbstract: true
})
export class Element_weaknessUpdateWithoutElement_elementToelement_weakness_weakness_element_idInput {
  @TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput, {
    nullable: true
  })
  coef?: FloatFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ElementUpdateOneRequiredWithoutElement_weakness_elementToelement_weakness_element_idNestedInput, {
    nullable: true
  })
  element_elementToelement_weakness_element_id?: ElementUpdateOneRequiredWithoutElement_weakness_elementToelement_weakness_element_idNestedInput | undefined;
}
