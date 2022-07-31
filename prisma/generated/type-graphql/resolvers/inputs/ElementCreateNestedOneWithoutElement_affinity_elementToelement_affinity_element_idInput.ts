import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ElementCreateOrConnectWithoutElement_affinity_elementToelement_affinity_element_idInput } from "../inputs/ElementCreateOrConnectWithoutElement_affinity_elementToelement_affinity_element_idInput";
import { ElementCreateWithoutElement_affinity_elementToelement_affinity_element_idInput } from "../inputs/ElementCreateWithoutElement_affinity_elementToelement_affinity_element_idInput";
import { ElementWhereUniqueInput } from "../inputs/ElementWhereUniqueInput";

@TypeGraphQL.InputType("ElementCreateNestedOneWithoutElement_affinity_elementToelement_affinity_element_idInput", {
  isAbstract: true
})
export class ElementCreateNestedOneWithoutElement_affinity_elementToelement_affinity_element_idInput {
  @TypeGraphQL.Field(_type => ElementCreateWithoutElement_affinity_elementToelement_affinity_element_idInput, {
    nullable: true
  })
  create?: ElementCreateWithoutElement_affinity_elementToelement_affinity_element_idInput | undefined;

  @TypeGraphQL.Field(_type => ElementCreateOrConnectWithoutElement_affinity_elementToelement_affinity_element_idInput, {
    nullable: true
  })
  connectOrCreate?: ElementCreateOrConnectWithoutElement_affinity_elementToelement_affinity_element_idInput | undefined;

  @TypeGraphQL.Field(_type => ElementWhereUniqueInput, {
    nullable: true
  })
  connect?: ElementWhereUniqueInput | undefined;
}
