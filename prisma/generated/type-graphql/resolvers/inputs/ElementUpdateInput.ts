import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CardUpdateManyWithoutElementNestedInput } from "../inputs/CardUpdateManyWithoutElementNestedInput";
import { Element_weaknessUpdateManyWithoutElement_elementToelement_weakness_element_idNestedInput } from "../inputs/Element_weaknessUpdateManyWithoutElement_elementToelement_weakness_element_idNestedInput";
import { Element_weaknessUpdateManyWithoutElement_elementToelement_weakness_weakness_element_idNestedInput } from "../inputs/Element_weaknessUpdateManyWithoutElement_elementToelement_weakness_weakness_element_idNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ElementUpdateInput", {
  isAbstract: true
})
export class ElementUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CardUpdateManyWithoutElementNestedInput, {
    nullable: true
  })
  card?: CardUpdateManyWithoutElementNestedInput | undefined;

  @TypeGraphQL.Field(_type => Element_weaknessUpdateManyWithoutElement_elementToelement_weakness_element_idNestedInput, {
    nullable: true
  })
  element_weakness_elementToelement_weakness_element_id?: Element_weaknessUpdateManyWithoutElement_elementToelement_weakness_element_idNestedInput | undefined;

  @TypeGraphQL.Field(_type => Element_weaknessUpdateManyWithoutElement_elementToelement_weakness_weakness_element_idNestedInput, {
    nullable: true
  })
  element_weakness_elementToelement_weakness_weakness_element_id?: Element_weaknessUpdateManyWithoutElement_elementToelement_weakness_weakness_element_idNestedInput | undefined;
}
