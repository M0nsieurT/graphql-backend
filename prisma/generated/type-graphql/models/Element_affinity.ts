import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Element } from "../models/Element";

@TypeGraphQL.ObjectType("Element_affinity", {
  isAbstract: true
})
export class Element_affinity {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  element_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  affinity_element!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  affinity_type!: number;

  element_elementToelement_affinity_element_id?: Element;

  element_elementToelement_affinity_affinity_element?: Element;
}
