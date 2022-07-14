import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Element_weaknessUpdateWithoutElement_elementToelement_weakness_element_idInput } from "../inputs/Element_weaknessUpdateWithoutElement_elementToelement_weakness_element_idInput";
import { Element_weaknessWhereUniqueInput } from "../inputs/Element_weaknessWhereUniqueInput";

@TypeGraphQL.InputType("Element_weaknessUpdateWithWhereUniqueWithoutElement_elementToelement_weakness_element_idInput", {
  isAbstract: true
})
export class Element_weaknessUpdateWithWhereUniqueWithoutElement_elementToelement_weakness_element_idInput {
  @TypeGraphQL.Field(_type => Element_weaknessWhereUniqueInput, {
    nullable: false
  })
  where!: Element_weaknessWhereUniqueInput;

  @TypeGraphQL.Field(_type => Element_weaknessUpdateWithoutElement_elementToelement_weakness_element_idInput, {
    nullable: false
  })
  data!: Element_weaknessUpdateWithoutElement_elementToelement_weakness_element_idInput;
}
