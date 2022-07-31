import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ElementCreateWithoutElement_affinity_elementToelement_affinity_element_idInput } from "../inputs/ElementCreateWithoutElement_affinity_elementToelement_affinity_element_idInput";
import { ElementUpdateWithoutElement_affinity_elementToelement_affinity_element_idInput } from "../inputs/ElementUpdateWithoutElement_affinity_elementToelement_affinity_element_idInput";

@TypeGraphQL.InputType("ElementUpsertWithoutElement_affinity_elementToelement_affinity_element_idInput", {
  isAbstract: true
})
export class ElementUpsertWithoutElement_affinity_elementToelement_affinity_element_idInput {
  @TypeGraphQL.Field(_type => ElementUpdateWithoutElement_affinity_elementToelement_affinity_element_idInput, {
    nullable: false
  })
  update!: ElementUpdateWithoutElement_affinity_elementToelement_affinity_element_idInput;

  @TypeGraphQL.Field(_type => ElementCreateWithoutElement_affinity_elementToelement_affinity_element_idInput, {
    nullable: false
  })
  create!: ElementCreateWithoutElement_affinity_elementToelement_affinity_element_idInput;
}
