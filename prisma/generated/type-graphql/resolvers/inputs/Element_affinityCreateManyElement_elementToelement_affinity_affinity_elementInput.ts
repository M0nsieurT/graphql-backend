import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("Element_affinityCreateManyElement_elementToelement_affinity_affinity_elementInput", {
  isAbstract: true
})
export class Element_affinityCreateManyElement_elementToelement_affinity_affinity_elementInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  element_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  affinity_type!: number;
}
