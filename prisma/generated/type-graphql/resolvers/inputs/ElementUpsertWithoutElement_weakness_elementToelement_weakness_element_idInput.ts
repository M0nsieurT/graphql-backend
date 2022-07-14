import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ElementCreateWithoutElement_weakness_elementToelement_weakness_element_idInput } from "../inputs/ElementCreateWithoutElement_weakness_elementToelement_weakness_element_idInput";
import { ElementUpdateWithoutElement_weakness_elementToelement_weakness_element_idInput } from "../inputs/ElementUpdateWithoutElement_weakness_elementToelement_weakness_element_idInput";

@TypeGraphQL.InputType("ElementUpsertWithoutElement_weakness_elementToelement_weakness_element_idInput", {
  isAbstract: true
})
export class ElementUpsertWithoutElement_weakness_elementToelement_weakness_element_idInput {
  @TypeGraphQL.Field(_type => ElementUpdateWithoutElement_weakness_elementToelement_weakness_element_idInput, {
    nullable: false
  })
  update!: ElementUpdateWithoutElement_weakness_elementToelement_weakness_element_idInput;

  @TypeGraphQL.Field(_type => ElementCreateWithoutElement_weakness_elementToelement_weakness_element_idInput, {
    nullable: false
  })
  create!: ElementCreateWithoutElement_weakness_elementToelement_weakness_element_idInput;
}
