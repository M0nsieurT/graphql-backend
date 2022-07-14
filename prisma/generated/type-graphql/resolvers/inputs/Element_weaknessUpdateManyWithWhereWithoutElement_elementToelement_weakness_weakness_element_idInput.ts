import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Element_weaknessScalarWhereInput } from "../inputs/Element_weaknessScalarWhereInput";
import { Element_weaknessUpdateManyMutationInput } from "../inputs/Element_weaknessUpdateManyMutationInput";

@TypeGraphQL.InputType("Element_weaknessUpdateManyWithWhereWithoutElement_elementToelement_weakness_weakness_element_idInput", {
  isAbstract: true
})
export class Element_weaknessUpdateManyWithWhereWithoutElement_elementToelement_weakness_weakness_element_idInput {
  @TypeGraphQL.Field(_type => Element_weaknessScalarWhereInput, {
    nullable: false
  })
  where!: Element_weaknessScalarWhereInput;

  @TypeGraphQL.Field(_type => Element_weaknessUpdateManyMutationInput, {
    nullable: false
  })
  data!: Element_weaknessUpdateManyMutationInput;
}
