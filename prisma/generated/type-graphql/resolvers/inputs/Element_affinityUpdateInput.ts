import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ElementUpdateOneRequiredWithoutElement_affinity_elementToelement_affinity_affinity_elementNestedInput } from "../inputs/ElementUpdateOneRequiredWithoutElement_affinity_elementToelement_affinity_affinity_elementNestedInput";
import { ElementUpdateOneRequiredWithoutElement_affinity_elementToelement_affinity_element_idNestedInput } from "../inputs/ElementUpdateOneRequiredWithoutElement_affinity_elementToelement_affinity_element_idNestedInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";

@TypeGraphQL.InputType("Element_affinityUpdateInput", {
  isAbstract: true
})
export class Element_affinityUpdateInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  affinity_type?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ElementUpdateOneRequiredWithoutElement_affinity_elementToelement_affinity_element_idNestedInput, {
    nullable: true
  })
  element_elementToelement_affinity_element_id?: ElementUpdateOneRequiredWithoutElement_affinity_elementToelement_affinity_element_idNestedInput | undefined;

  @TypeGraphQL.Field(_type => ElementUpdateOneRequiredWithoutElement_affinity_elementToelement_affinity_affinity_elementNestedInput, {
    nullable: true
  })
  element_elementToelement_affinity_affinity_element?: ElementUpdateOneRequiredWithoutElement_affinity_elementToelement_affinity_affinity_elementNestedInput | undefined;
}
