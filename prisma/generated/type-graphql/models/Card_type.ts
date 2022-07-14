import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Card } from "../models/Card";
import { Card_typeCount } from "../resolvers/outputs/Card_typeCount";

@TypeGraphQL.ObjectType("Card_type", {
  isAbstract: true
})
export class Card_type {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  card?: Card[];

  @TypeGraphQL.Field(_type => Card_typeCount, {
    nullable: true
  })
  _count?: Card_typeCount | null;
}
