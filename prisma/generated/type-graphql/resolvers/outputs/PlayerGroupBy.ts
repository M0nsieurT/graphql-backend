import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlayerAvgAggregate } from "../outputs/PlayerAvgAggregate";
import { PlayerCountAggregate } from "../outputs/PlayerCountAggregate";
import { PlayerMaxAggregate } from "../outputs/PlayerMaxAggregate";
import { PlayerMinAggregate } from "../outputs/PlayerMinAggregate";
import { PlayerSumAggregate } from "../outputs/PlayerSumAggregate";

@TypeGraphQL.ObjectType("PlayerGroupBy", {
  isAbstract: true
})
export class PlayerGroupBy {
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
  password!: string;

  @TypeGraphQL.Field(_type => PlayerCountAggregate, {
    nullable: true
  })
  _count!: PlayerCountAggregate | null;

  @TypeGraphQL.Field(_type => PlayerAvgAggregate, {
    nullable: true
  })
  _avg!: PlayerAvgAggregate | null;

  @TypeGraphQL.Field(_type => PlayerSumAggregate, {
    nullable: true
  })
  _sum!: PlayerSumAggregate | null;

  @TypeGraphQL.Field(_type => PlayerMinAggregate, {
    nullable: true
  })
  _min!: PlayerMinAggregate | null;

  @TypeGraphQL.Field(_type => PlayerMaxAggregate, {
    nullable: true
  })
  _max!: PlayerMaxAggregate | null;
}
