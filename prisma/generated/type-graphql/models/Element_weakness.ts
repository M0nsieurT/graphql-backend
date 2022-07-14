import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Element } from "../models/Element";

@TypeGraphQL.ObjectType("Element_weakness", {
  isAbstract: true
})
export class Element_weakness {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  element_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  weakness_element_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  coef!: number;

  element_elementToelement_weakness_element_id?: Element;

  element_elementToelement_weakness_weakness_element_id?: Element;
}
