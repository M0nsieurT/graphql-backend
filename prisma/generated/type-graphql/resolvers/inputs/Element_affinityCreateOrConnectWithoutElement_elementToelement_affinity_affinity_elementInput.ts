import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Element_affinityCreateWithoutElement_elementToelement_affinity_affinity_elementInput } from "../inputs/Element_affinityCreateWithoutElement_elementToelement_affinity_affinity_elementInput";
import { Element_affinityWhereUniqueInput } from "../inputs/Element_affinityWhereUniqueInput";

@TypeGraphQL.InputType("Element_affinityCreateOrConnectWithoutElement_elementToelement_affinity_affinity_elementInput", {
  isAbstract: true
})
export class Element_affinityCreateOrConnectWithoutElement_elementToelement_affinity_affinity_elementInput {
  @TypeGraphQL.Field(_type => Element_affinityWhereUniqueInput, {
    nullable: false
  })
  where!: Element_affinityWhereUniqueInput;

  @TypeGraphQL.Field(_type => Element_affinityCreateWithoutElement_elementToelement_affinity_affinity_elementInput, {
    nullable: false
  })
  create!: Element_affinityCreateWithoutElement_elementToelement_affinity_affinity_elementInput;
}
