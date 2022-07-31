import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ElementCreateOrConnectWithoutElement_affinity_elementToelement_affinity_affinity_elementInput } from "../inputs/ElementCreateOrConnectWithoutElement_affinity_elementToelement_affinity_affinity_elementInput";
import { ElementCreateWithoutElement_affinity_elementToelement_affinity_affinity_elementInput } from "../inputs/ElementCreateWithoutElement_affinity_elementToelement_affinity_affinity_elementInput";
import { ElementWhereUniqueInput } from "../inputs/ElementWhereUniqueInput";

@TypeGraphQL.InputType("ElementCreateNestedOneWithoutElement_affinity_elementToelement_affinity_affinity_elementInput", {
  isAbstract: true
})
export class ElementCreateNestedOneWithoutElement_affinity_elementToelement_affinity_affinity_elementInput {
  @TypeGraphQL.Field(_type => ElementCreateWithoutElement_affinity_elementToelement_affinity_affinity_elementInput, {
    nullable: true
  })
  create?: ElementCreateWithoutElement_affinity_elementToelement_affinity_affinity_elementInput | undefined;

  @TypeGraphQL.Field(_type => ElementCreateOrConnectWithoutElement_affinity_elementToelement_affinity_affinity_elementInput, {
    nullable: true
  })
  connectOrCreate?: ElementCreateOrConnectWithoutElement_affinity_elementToelement_affinity_affinity_elementInput | undefined;

  @TypeGraphQL.Field(_type => ElementWhereUniqueInput, {
    nullable: true
  })
  connect?: ElementWhereUniqueInput | undefined;
}
