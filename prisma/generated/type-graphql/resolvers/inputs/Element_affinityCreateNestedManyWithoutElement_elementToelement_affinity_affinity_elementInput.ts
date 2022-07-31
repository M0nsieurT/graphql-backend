import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Element_affinityCreateManyElement_elementToelement_affinity_affinity_elementInputEnvelope } from "../inputs/Element_affinityCreateManyElement_elementToelement_affinity_affinity_elementInputEnvelope";
import { Element_affinityCreateOrConnectWithoutElement_elementToelement_affinity_affinity_elementInput } from "../inputs/Element_affinityCreateOrConnectWithoutElement_elementToelement_affinity_affinity_elementInput";
import { Element_affinityCreateWithoutElement_elementToelement_affinity_affinity_elementInput } from "../inputs/Element_affinityCreateWithoutElement_elementToelement_affinity_affinity_elementInput";
import { Element_affinityWhereUniqueInput } from "../inputs/Element_affinityWhereUniqueInput";

@TypeGraphQL.InputType("Element_affinityCreateNestedManyWithoutElement_elementToelement_affinity_affinity_elementInput", {
  isAbstract: true
})
export class Element_affinityCreateNestedManyWithoutElement_elementToelement_affinity_affinity_elementInput {
  @TypeGraphQL.Field(_type => [Element_affinityCreateWithoutElement_elementToelement_affinity_affinity_elementInput], {
    nullable: true
  })
  create?: Element_affinityCreateWithoutElement_elementToelement_affinity_affinity_elementInput[] | undefined;

  @TypeGraphQL.Field(_type => [Element_affinityCreateOrConnectWithoutElement_elementToelement_affinity_affinity_elementInput], {
    nullable: true
  })
  connectOrCreate?: Element_affinityCreateOrConnectWithoutElement_elementToelement_affinity_affinity_elementInput[] | undefined;

  @TypeGraphQL.Field(_type => Element_affinityCreateManyElement_elementToelement_affinity_affinity_elementInputEnvelope, {
    nullable: true
  })
  createMany?: Element_affinityCreateManyElement_elementToelement_affinity_affinity_elementInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Element_affinityWhereUniqueInput], {
    nullable: true
  })
  connect?: Element_affinityWhereUniqueInput[] | undefined;
}
