import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Player_cardAvgAggregate } from "../outputs/Player_cardAvgAggregate";
import { Player_cardCountAggregate } from "../outputs/Player_cardCountAggregate";
import { Player_cardMaxAggregate } from "../outputs/Player_cardMaxAggregate";
import { Player_cardMinAggregate } from "../outputs/Player_cardMinAggregate";
import { Player_cardSumAggregate } from "../outputs/Player_cardSumAggregate";

@TypeGraphQL.ObjectType("AggregatePlayer_card", {
  isAbstract: true
})
export class AggregatePlayer_card {
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
