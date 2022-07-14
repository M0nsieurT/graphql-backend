import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Element_weaknessCreateManyElement_elementToelement_weakness_element_idInputEnvelope } from "../inputs/Element_weaknessCreateManyElement_elementToelement_weakness_element_idInputEnvelope";
import { Element_weaknessCreateOrConnectWithoutElement_elementToelement_weakness_element_idInput } from "../inputs/Element_weaknessCreateOrConnectWithoutElement_elementToelement_weakness_element_idInput";
import { Element_weaknessCreateWithoutElement_elementToelement_weakness_element_idInput } from "../inputs/Element_weaknessCreateWithoutElement_elementToelement_weakness_element_idInput";
import { Element_weaknessScalarWhereInput } from "../inputs/Element_weaknessScalarWhereInput";
import { Element_weaknessUpdateManyWithWhereWithoutElement_elementToelement_weakness_element_idInput } from "../inputs/Element_weaknessUpdateManyWithWhereWithoutElement_elementToelement_weakness_element_idInput";
import { Element_weaknessUpdateWithWhereUniqueWithoutElement_elementToelement_weakness_element_idInput } from "../inputs/Element_weaknessUpdateWithWhereUniqueWithoutElement_elementToelement_weakness_element_idInput";
import { Element_weaknessUpsertWithWhereUniqueWithoutElement_elementToelement_weakness_element_idInput } from "../inputs/Element_weaknessUpsertWithWhereUniqueWithoutElement_elementToelement_weakness_element_idInput";
import { Element_weaknessWhereUniqueInput } from "../inputs/Element_weaknessWhereUniqueInput";

@TypeGraphQL.InputType("Element_weaknessUpdateManyWithoutElement_elementToelement_weakness_element_idNestedInput", {
  isAbstract: true
})
export class Element_weaknessUpdateManyWithoutElement_elementToelement_weakness_element_idNestedInput {
  @TypeGraphQL.Field(_type => [Element_weaknessCreateWithoutElement_elementToelement_weakness_element_idInput], {
    nullable: true
  })
  create?: Element_weaknessCreateWithoutElement_elementToelement_weakness_element_idInput[] | undefined;

  @TypeGraphQL.Field(_type => [Element_weaknessCreateOrConnectWithoutElement_elementToelement_weakness_element_idInput], {
    nullable: true
  })
  connectOrCreate?: Element_weaknessCreateOrConnectWithoutElement_elementToelement_weakness_element_idInput[] | undefined;

  @TypeGraphQL.Field(_type => [Element_weaknessUpsertWithWhereUniqueWithoutElement_elementToelement_weakness_element_idInput], {
    nullable: true
  })
  upsert?: Element_weaknessUpsertWithWhereUniqueWithoutElement_elementToelement_weakness_element_idInput[] | undefined;

  @TypeGraphQL.Field(_type => Element_weaknessCreateManyElement_elementToelement_weakness_element_idInputEnvelope, {
    nullable: true
  })
  createMany?: Element_weaknessCreateManyElement_elementToelement_weakness_element_idInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Element_weaknessWhereUniqueInput], {
    nullable: true
  })
  set?: Element_weaknessWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Element_weaknessWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Element_weaknessWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Element_weaknessWhereUniqueInput], {
    nullable: true
  })
  delete?: Element_weaknessWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Element_weaknessWhereUniqueInput], {
    nullable: true
  })
  connect?: Element_weaknessWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Element_weaknessUpdateWithWhereUniqueWithoutElement_elementToelement_weakness_element_idInput], {
    nullable: true
  })
  update?: Element_weaknessUpdateWithWhereUniqueWithoutElement_elementToelement_weakness_element_idInput[] | undefined;

  @TypeGraphQL.Field(_type => [Element_weaknessUpdateManyWithWhereWithoutElement_elementToelement_weakness_element_idInput], {
    nullable: true
  })
  updateMany?: Element_weaknessUpdateManyWithWhereWithoutElement_elementToelement_weakness_element_idInput[] | undefined;

  @TypeGraphQL.Field(_type => [Element_weaknessScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Element_weaknessScalarWhereInput[] | undefined;
}
