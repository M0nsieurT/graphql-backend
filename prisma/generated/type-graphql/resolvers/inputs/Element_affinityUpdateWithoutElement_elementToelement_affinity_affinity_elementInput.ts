import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ElementUpdateOneRequiredWithoutElement_affinity_elementToelement_affinity_element_idNestedInput } from "../inputs/ElementUpdateOneRequiredWithoutElement_affinity_elementToelement_affinity_element_idNestedInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";

@TypeGraphQL.InputType("Element_affinityUpdateWithoutElement_elementToelement_affinity_affinity_elementInput", {
  isAbstract: true
})
export class Element_affinityUpdateWithoutElement_elementToelement_affinity_affinity_elementInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  affinity_type?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ElementUpdateOneRequiredWithoutElement_affinity_elementToelement_affinity_element_idNestedInput, {
    nullable: true
  })
  element_elementToelement_affinity_element_id?: ElementUpdateOneRequiredWithoutElement_affinity_elementToelement_affinity_element_idNestedInput | undefined;
}
