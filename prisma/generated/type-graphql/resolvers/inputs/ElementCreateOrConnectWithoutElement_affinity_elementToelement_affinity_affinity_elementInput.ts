import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ElementCreateWithoutElement_affinity_elementToelement_affinity_affinity_elementInput } from "../inputs/ElementCreateWithoutElement_affinity_elementToelement_affinity_affinity_elementInput";
import { ElementWhereUniqueInput } from "../inputs/ElementWhereUniqueInput";

@TypeGraphQL.InputType("ElementCreateOrConnectWithoutElement_affinity_elementToelement_affinity_affinity_elementInput", {
  isAbstract: true
})
export class ElementCreateOrConnectWithoutElement_affinity_elementToelement_affinity_affinity_elementInput {
  @TypeGraphQL.Field(_type => ElementWhereUniqueInput, {
    nullable: false
  })
  where!: ElementWhereUniqueInput;

  @TypeGraphQL.Field(_type => ElementCreateWithoutElement_affinity_elementToelement_affinity_affinity_elementInput, {
    nullable: false
  })
  create!: ElementCreateWithoutElement_affinity_elementToelement_affinity_affinity_elementInput;
}
