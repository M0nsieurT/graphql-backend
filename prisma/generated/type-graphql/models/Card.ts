import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Card_rank } from "../models/Card_rank";
import { Card_type } from "../models/Card_type";
import { Element } from "../models/Element";
import { Player_card } from "../models/Player_card";
import { CardCount } from "../resolvers/outputs/CardCount";

@TypeGraphQL.ObjectType("Card", {
  isAbstract: true
})
export class Card {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  power!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  element_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  rank_id?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  card_type_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  max_chain!: number;

  card_rank?: Card_rank | null;

  card_type?: Card_type;

  element?: Element;

  player_card?: Player_card[];

  @TypeGraphQL.Field(_type => CardCount, {
    nullable: true
  })
  _count?: CardCount | null;
}
