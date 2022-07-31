import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Element_affinityScalarWhereInput } from "../inputs/Element_affinityScalarWhereInput";
import { Element_affinityUpdateManyMutationInput } from "../inputs/Element_affinityUpdateManyMutationInput";

@TypeGraphQL.InputType("Element_affinityUpdateManyWithWhereWithoutElement_elementToelement_affinity_element_idInput", {
  isAbstract: true
})
export class Element_affinityUpdateManyWithWhereWithoutElement_elementToelement_affinity_element_idInput {
  @TypeGraphQL.Field(_type => Element_affinityScalarWhereInput, {
    nullable: false
  })
  where!: Element_affinityScalarWhereInput;

  @TypeGraphQL.Field(_type => Element_affinityUpdateManyMutationInput, {
    nullable: false
  })
  data!: Element_affinityUpdateManyMutationInput;
}
