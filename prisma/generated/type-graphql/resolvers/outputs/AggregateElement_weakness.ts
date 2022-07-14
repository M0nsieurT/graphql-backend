import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Element_weaknessAvgAggregate } from "../outputs/Element_weaknessAvgAggregate";
import { Element_weaknessCountAggregate } from "../outputs/Element_weaknessCountAggregate";
import { Element_weaknessMaxAggregate } from "../outputs/Element_weaknessMaxAggregate";
import { Element_weaknessMinAggregate } from "../outputs/Element_weaknessMinAggregate";
import { Element_weaknessSumAggregate } from "../outputs/Element_weaknessSumAggregate";

@TypeGraphQL.ObjectType("AggregateElement_weakness", {
  isAbstract: true
})
export class AggregateElement_weakness {
  @TypeGraphQL.Field(_type => Element_weaknessCountAggregate, {
    nullable: true
  })
  _count!: Element_weaknessCountAggregate | null;

  @TypeGraphQL.Field(_type => Element_weaknessAvgAggregate, {
    nullable: true
  })
  _avg!: Element_weaknessAvgAggregate | null;

  @TypeGraphQL.Field(_type => Element_weaknessSumAggregate, {
    nullable: true
  })
  _sum!: Element_weaknessSumAggregate | null;

  @TypeGraphQL.Field(_type => Element_weaknessMinAggregate, {
    nullable: true
  })
  _min!: Element_weaknessMinAggregate | null;

  @TypeGraphQL.Field(_type => Element_weaknessMaxAggregate, {
    nullable: true
  })
  _max!: Element_weaknessMaxAggregate | null;
}
