import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ElementAvgAggregate } from "../outputs/ElementAvgAggregate";
import { ElementCountAggregate } from "../outputs/ElementCountAggregate";
import { ElementMaxAggregate } from "../outputs/ElementMaxAggregate";
import { ElementMinAggregate } from "../outputs/ElementMinAggregate";
import { ElementSumAggregate } from "../outputs/ElementSumAggregate";

@TypeGraphQL.ObjectType("AggregateElement", {
  isAbstract: true
})
export class AggregateElement {
  @TypeGraphQL.Field(_type => ElementCountAggregate, {
    nullable: true
  })
  _count!: ElementCountAggregate | null;

  @TypeGraphQL.Field(_type => ElementAvgAggregate, {
    nullable: true
  })
  _avg!: ElementAvgAggregate | null;

  @TypeGraphQL.Field(_type => ElementSumAggregate, {
    nullable: true
  })
  _sum!: ElementSumAggregate | null;

  @TypeGraphQL.Field(_type => ElementMinAggregate, {
    nullable: true
  })
  _min!: ElementMinAggregate | null;

  @TypeGraphQL.Field(_type => ElementMaxAggregate, {
    nullable: true
  })
  _max!: ElementMaxAggregate | null;
}
