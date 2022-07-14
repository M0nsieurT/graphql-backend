import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { element_weaknessElement_idWeakness_element_idCompoundUniqueInput } from "../inputs/element_weaknessElement_idWeakness_element_idCompoundUniqueInput";

@TypeGraphQL.InputType("Element_weaknessWhereUniqueInput", {
  isAbstract: true
})
export class Element_weaknessWhereUniqueInput {
  @TypeGraphQL.Field(_type => element_weaknessElement_idWeakness_element_idCompoundUniqueInput, {
    nullable: true
  })
  element_id_weakness_element_id?: element_weaknessElement_idWeakness_element_idCompoundUniqueInput | undefined;
}
