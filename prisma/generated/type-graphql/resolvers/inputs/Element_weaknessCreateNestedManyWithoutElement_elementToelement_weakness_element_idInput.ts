import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Element_weaknessCreateManyElement_elementToelement_weakness_element_idInputEnvelope } from "../inputs/Element_weaknessCreateManyElement_elementToelement_weakness_element_idInputEnvelope";
import { Element_weaknessCreateOrConnectWithoutElement_elementToelement_weakness_element_idInput } from "../inputs/Element_weaknessCreateOrConnectWithoutElement_elementToelement_weakness_element_idInput";
import { Element_weaknessCreateWithoutElement_elementToelement_weakness_element_idInput } from "../inputs/Element_weaknessCreateWithoutElement_elementToelement_weakness_element_idInput";
import { Element_weaknessWhereUniqueInput } from "../inputs/Element_weaknessWhereUniqueInput";

@TypeGraphQL.InputType("Element_weaknessCreateNestedManyWithoutElement_elementToelement_weakness_element_idInput", {
  isAbstract: true
})
export class Element_weaknessCreateNestedManyWithoutElement_elementToelement_weakness_element_idInput {
  @TypeGraphQL.Field(_type => [Element_weaknessCreateWithoutElement_elementToelement_weakness_element_idInput], {
    nullable: true
  })
  create?: Element_weaknessCreateWithoutElement_elementToelement_weakness_element_idInput[] | undefined;

  @TypeGraphQL.Field(_type => [Element_weaknessCreateOrConnectWithoutElement_elementToelement_weakness_element_idInput], {
    nullable: true
  })
  connectOrCreate?: Element_weaknessCreateOrConnectWithoutElement_elementToelement_weakness_element_idInput[] | undefined;

  @TypeGraphQL.Field(_type => Element_weaknessCreateManyElement_elementToelement_weakness_element_idInputEnvelope, {
    nullable: true
  })
  createMany?: Element_weaknessCreateManyElement_elementToelement_weakness_element_idInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Element_weaknessWhereUniqueInput], {
    nullable: true
  })
  connect?: Element_weaknessWhereUniqueInput[] | undefined;
}
