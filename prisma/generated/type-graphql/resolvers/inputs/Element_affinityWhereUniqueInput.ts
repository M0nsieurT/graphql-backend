import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { element_affinityElement_idAffinity_elementCompoundUniqueInput } from "../inputs/element_affinityElement_idAffinity_elementCompoundUniqueInput";

@TypeGraphQL.InputType("Element_affinityWhereUniqueInput", {
  isAbstract: true
})
export class Element_affinityWhereUniqueInput {
  @TypeGraphQL.Field(_type => element_affinityElement_idAffinity_elementCompoundUniqueInput, {
    nullable: true
  })
  element_id_affinity_element?: element_affinityElement_idAffinity_elementCompoundUniqueInput | undefined;
}
