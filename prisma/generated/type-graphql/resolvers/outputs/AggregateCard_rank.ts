import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Card_rankAvgAggregate } from "../outputs/Card_rankAvgAggregate";
import { Card_rankCountAggregate } from "../outputs/Card_rankCountAggregate";
import { Card_rankMaxAggregate } from "../outputs/Card_rankMaxAggregate";
import { Card_rankMinAggregate } from "../outputs/Card_rankMinAggregate";
import { Card_rankSumAggregate } from "../outputs/Card_rankSumAggregate";

@TypeGraphQL.ObjectType("AggregateCard_rank", {
  isAbstract: true
})
export class AggregateCard_rank {
  @TypeGraphQL.Field(_type => Card_rankCountAggregate, {
    nullable: true
  })
  _count!: Card_rankCountAggregate | null;

  @TypeGraphQL.Field(_type => Card_rankAvgAggregate, {
    nullable: true
  })
  _avg!: Card_rankAvgAggregate | null;

  @TypeGraphQL.Field(_type => Card_rankSumAggregate, {
    nullable: true
  })
  _sum!: Card_rankSumAggregate | null;

  @TypeGraphQL.Field(_type => Card_rankMinAggregate, {
    nullable: true
  })
  _min!: Card_rankMinAggregate | null;

  @TypeGraphQL.Field(_type => Card_rankMaxAggregate, {
    nullable: true
  })
  _max!: Card_rankMaxAggregate | null;
}
