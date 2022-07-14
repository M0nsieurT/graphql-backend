import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Player_cardAvgAggregate } from "../outputs/Player_cardAvgAggregate";
import { Player_cardCountAggregate } from "../outputs/Player_cardCountAggregate";
import { Player_cardMaxAggregate } from "../outputs/Player_cardMaxAggregate";
import { Player_cardMinAggregate } from "../outputs/Player_cardMinAggregate";
import { Player_cardSumAggregate } from "../outputs/Player_cardSumAggregate";

@TypeGraphQL.ObjectType("Player_cardGroupBy", {
  isAbstract: true
})
export class Player_cardGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  card_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  player_id!: number;

  @TypeGraphQL.Field(_type => Player_cardCountAggregate, {
    nullable: true
  })
  _count!: Player_cardCountAggregate | null;

  @TypeGraphQL.Field(_type => Player_cardAvgAggregate, {
    nullable: true
  })
  _avg!: Player_cardAvgAggregate | null;

  @TypeGraphQL.Field(_type => Player_cardSumAggregate, {
    nullable: true
  })
  _sum!: Player_cardSumAggregate | null;

  @TypeGraphQL.Field(_type => Player_cardMinAggregate, {
    nullable: true
  })
  _min!: Player_cardMinAggregate | null;

  @TypeGraphQL.Field(_type => Player_cardMaxAggregate, {
    nullable: true
  })
  _max!: Player_cardMaxAggregate | null;
}
