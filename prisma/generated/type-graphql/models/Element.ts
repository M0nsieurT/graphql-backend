import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Card } from "../models/Card";
import { Element_affinity } from "../models/Element_affinity";
import { Element_weakness } from "../models/Element_weakness";
import { ElementCount } from "../resolvers/outputs/ElementCount";

@TypeGraphQL.ObjectType("Element", {
  isAbstract: true
})
export class Element {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  card?: Card[];

  element_affinity_elementToelement_affinity_element_id?: Element_affinity[];

  element_affinity_elementToelement_affinity_affinity_element?: Element_affinity[];

  element_weakness_elementToelement_weakness_element_id?: Element_weakness[];

  element_weakness_elementToelement_weakness_weakness_element_id?: Element_weakness[];

  @TypeGraphQL.Field(_type => ElementCount, {
    nullable: true
  })
  _count?: ElementCount | null;
}
