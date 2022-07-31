import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ElementCreateWithoutElement_affinity_elementToelement_affinity_affinity_elementInput } from "../inputs/ElementCreateWithoutElement_affinity_elementToelement_affinity_affinity_elementInput";
import { ElementUpdateWithoutElement_affinity_elementToelement_affinity_affinity_elementInput } from "../inputs/ElementUpdateWithoutElement_affinity_elementToelement_affinity_affinity_elementInput";

@TypeGraphQL.InputType("ElementUpsertWithoutElement_affinity_elementToelement_affinity_affinity_elementInput", {
  isAbstract: true
})
export class ElementUpsertWithoutElement_affinity_elementToelement_affinity_affinity_elementInput {
  @TypeGraphQL.Field(_type => ElementUpdateWithoutElement_affinity_elementToelement_affinity_affinity_elementInput, {
    nullable: false
  })
  update!: ElementUpdateWithoutElement_affinity_elementToelement_affinity_affinity_elementInput;

  @TypeGraphQL.Field(_type => ElementCreateWithoutElement_affinity_elementToelement_affinity_affinity_elementInput, {
    nullable: false
  })
  create!: ElementCreateWithoutElement_affinity_elementToelement_affinity_affinity_elementInput;
}
