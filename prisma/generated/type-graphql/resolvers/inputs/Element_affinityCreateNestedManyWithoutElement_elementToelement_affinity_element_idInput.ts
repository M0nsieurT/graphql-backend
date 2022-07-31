import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Element_affinityCreateManyElement_elementToelement_affinity_element_idInputEnvelope } from "../inputs/Element_affinityCreateManyElement_elementToelement_affinity_element_idInputEnvelope";
import { Element_affinityCreateOrConnectWithoutElement_elementToelement_affinity_element_idInput } from "../inputs/Element_affinityCreateOrConnectWithoutElement_elementToelement_affinity_element_idInput";
import { Element_affinityCreateWithoutElement_elementToelement_affinity_element_idInput } from "../inputs/Element_affinityCreateWithoutElement_elementToelement_affinity_element_idInput";
import { Element_affinityWhereUniqueInput } from "../inputs/Element_affinityWhereUniqueInput";

@TypeGraphQL.InputType("Element_affinityCreateNestedManyWithoutElement_elementToelement_affinity_element_idInput", {
  isAbstract: true
})
export class Element_affinityCreateNestedManyWithoutElement_elementToelement_affinity_element_idInput {
  @TypeGraphQL.Field(_type => [Element_affinityCreateWithoutElement_elementToelement_affinity_element_idInput], {
    nullable: true
  })
  create?: Element_affinityCreateWithoutElement_elementToelement_affinity_element_idInput[] | undefined;

  @TypeGraphQL.Field(_type => [Element_affinityCreateOrConnectWithoutElement_elementToelement_affinity_element_idInput], {
    nullable: true
  })
  connectOrCreate?: Element_affinityCreateOrConnectWithoutElement_elementToelement_affinity_element_idInput[] | undefined;

  @TypeGraphQL.Field(_type => Element_affinityCreateManyElement_elementToelement_affinity_element_idInputEnvelope, {
    nullable: true
  })
  createMany?: Element_affinityCreateManyElement_elementToelement_affinity_element_idInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Element_affinityWhereUniqueInput], {
    nullable: true
  })
  connect?: Element_affinityWhereUniqueInput[] | undefined;
}
