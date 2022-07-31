import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ElementUpdateOneRequiredWithoutElement_affinity_elementToelement_affinity_affinity_elementNestedInput } from "../inputs/ElementUpdateOneRequiredWithoutElement_affinity_elementToelement_affinity_affinity_elementNestedInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";

@TypeGraphQL.InputType("Element_affinityUpdateWithoutElement_elementToelement_affinity_element_idInput", {
  isAbstract: true
})
export class Element_affinityUpdateWithoutElement_elementToelement_affinity_element_idInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  affinity_type?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ElementUpdateOneRequiredWithoutElement_affinity_elementToelement_affinity_affinity_elementNestedInput, {
    nullable: true
  })
  element_elementToelement_affinity_affinity_element?: ElementUpdateOneRequiredWithoutElement_affinity_elementToelement_affinity_affinity_elementNestedInput | undefined;
}
