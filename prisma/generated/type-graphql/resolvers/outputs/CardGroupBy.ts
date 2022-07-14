import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CardAvgAggregate } from "../outputs/CardAvgAggregate";
import { CardCountAggregate } from "../outputs/CardCountAggregate";
import { CardMaxAggregate } from "../outputs/CardMaxAggregate";
import { CardMinAggregate } from "../outputs/CardMinAggregate";
import { CardSumAggregate } from "../outputs/CardSumAggregate";

@TypeGraphQL.ObjectType("CardGroupBy", {
  isAbstract: true
})
export class CardGroupBy {
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
  rank_id!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  card_type_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  max_chain!: number;

  @TypeGraphQL.Field(_type => CardCountAggregate, {
    nullable: true
  })
  _count!: CardCountAggregate | null;

  @TypeGraphQL.Field(_type => CardAvgAggregate, {
    nullable: true
  })
  _avg!: CardAvgAggregate | null;

  @TypeGraphQL.Field(_type => CardSumAggregate, {
    nullable: true
  })
  _sum!: CardSumAggregate | null;

  @TypeGraphQL.Field(_type => CardMinAggregate, {
    nullable: true
  })
  _min!: CardMinAggregate | null;

  @TypeGraphQL.Field(_type => CardMaxAggregate, {
    nullable: true
  })
  _max!: CardMaxAggregate | null;
}
