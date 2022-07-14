import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Card } from "../models/Card";
import { Card_rankCount } from "../resolvers/outputs/Card_rankCount";

@TypeGraphQL.ObjectType("Card_rank", {
  isAbstract: true
})
export class Card_rank {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  code!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  card?: Card[];

  @TypeGraphQL.Field(_type => Card_rankCount, {
    nullable: true
  })
  _count?: Card_rankCount | null;
}
