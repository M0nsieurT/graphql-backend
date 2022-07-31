import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Element_affinityCreateManyElement_elementToelement_affinity_element_idInputEnvelope } from "../inputs/Element_affinityCreateManyElement_elementToelement_affinity_element_idInputEnvelope";
import { Element_affinityCreateOrConnectWithoutElement_elementToelement_affinity_element_idInput } from "../inputs/Element_affinityCreateOrConnectWithoutElement_elementToelement_affinity_element_idInput";
import { Element_affinityCreateWithoutElement_elementToelement_affinity_element_idInput } from "../inputs/Element_affinityCreateWithoutElement_elementToelement_affinity_element_idInput";
import { Element_affinityScalarWhereInput } from "../inputs/Element_affinityScalarWhereInput";
import { Element_affinityUpdateManyWithWhereWithoutElement_elementToelement_affinity_element_idInput } from "../inputs/Element_affinityUpdateManyWithWhereWithoutElement_elementToelement_affinity_element_idInput";
import { Element_affinityUpdateWithWhereUniqueWithoutElement_elementToelement_affinity_element_idInput } from "../inputs/Element_affinityUpdateWithWhereUniqueWithoutElement_elementToelement_affinity_element_idInput";
import { Element_affinityUpsertWithWhereUniqueWithoutElement_elementToelement_affinity_element_idInput } from "../inputs/Element_affinityUpsertWithWhereUniqueWithoutElement_elementToelement_affinity_element_idInput";
import { Element_affinityWhereUniqueInput } from "../inputs/Element_affinityWhereUniqueInput";

@TypeGraphQL.InputType("Element_affinityUpdateManyWithoutElement_elementToelement_affinity_element_idNestedInput", {
  isAbstract: true
})
export class Element_affinityUpdateManyWithoutElement_elementToelement_affinity_element_idNestedInput {
  @TypeGraphQL.Field(_type => [Element_affinityCreateWithoutElement_elementToelement_affinity_element_idInput], {
    nullable: true
  })
  create?: Element_affinityCreateWithoutElement_elementToelement_affinity_element_idInput[] | undefined;

  @TypeGraphQL.Field(_type => [Element_affinityCreateOrConnectWithoutElement_elementToelement_affinity_element_idInput], {
    nullable: true
  })
  connectOrCreate?: Element_affinityCreateOrConnectWithoutElement_elementToelement_affinity_element_idInput[] | undefined;

  @TypeGraphQL.Field(_type => [Element_affinityUpsertWithWhereUniqueWithoutElement_elementToelement_affinity_element_idInput], {
    nullable: true
  })
  upsert?: Element_affinityUpsertWithWhereUniqueWithoutElement_elementToelement_affinity_element_idInput[] | undefined;

  @TypeGraphQL.Field(_type => Element_affinityCreateManyElement_elementToelement_affinity_element_idInputEnvelope, {
    nullable: true
  })
  createMany?: Element_affinityCreateManyElement_elementToelement_affinity_element_idInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Element_affinityWhereUniqueInput], {
    nullable: true
  })
  set?: Element_affinityWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Element_affinityWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Element_affinityWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Element_affinityWhereUniqueInput], {
    nullable: true
  })
  delete?: Element_affinityWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Element_affinityWhereUniqueInput], {
    nullable: true
  })
  connect?: Element_affinityWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Element_affinityUpdateWithWhereUniqueWithoutElement_elementToelement_affinity_element_idInput], {
    nullable: true
  })
  update?: Element_affinityUpdateWithWhereUniqueWithoutElement_elementToelement_affinity_element_idInput[] | undefined;

  @TypeGraphQL.Field(_type => [Element_affinityUpdateManyWithWhereWithoutElement_elementToelement_affinity_element_idInput], {
    nullable: true
  })
  updateMany?: Element_affinityUpdateManyWithWhereWithoutElement_elementToelement_affinity_element_idInput[] | undefined;

  @TypeGraphQL.Field(_type => [Element_affinityScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Element_affinityScalarWhereInput[] | undefined;
}
