import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("Element_weaknessCreateManyElement_elementToelement_weakness_element_idInput", {
  isAbstract: true
})
export class Element_weaknessCreateManyElement_elementToelement_weakness_element_idInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  weakness_element_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  coef!: number;
}
