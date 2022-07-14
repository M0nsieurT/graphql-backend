import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Element_weaknessCreateWithoutElement_elementToelement_weakness_weakness_element_idInput } from "../inputs/Element_weaknessCreateWithoutElement_elementToelement_weakness_weakness_element_idInput";
import { Element_weaknessWhereUniqueInput } from "../inputs/Element_weaknessWhereUniqueInput";

@TypeGraphQL.InputType("Element_weaknessCreateOrConnectWithoutElement_elementToelement_weakness_weakness_element_idInput", {
  isAbstract: true
})
export class Element_weaknessCreateOrConnectWithoutElement_elementToelement_weakness_weakness_element_idInput {
  @TypeGraphQL.Field(_type => Element_weaknessWhereUniqueInput, {
    nullable: false
  })
  where!: Element_weaknessWhereUniqueInput;

  @TypeGraphQL.Field(_type => Element_weaknessCreateWithoutElement_elementToelement_weakness_weakness_element_idInput, {
    nullable: false
  })
  create!: Element_weaknessCreateWithoutElement_elementToelement_weakness_weakness_element_idInput;
}
