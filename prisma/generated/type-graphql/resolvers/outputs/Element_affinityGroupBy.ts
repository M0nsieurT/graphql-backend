import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Element_affinityAvgAggregate } from "../outputs/Element_affinityAvgAggregate";
import { Element_affinityCountAggregate } from "../outputs/Element_affinityCountAggregate";
import { Element_affinityMaxAggregate } from "../outputs/Element_affinityMaxAggregate";
import { Element_affinityMinAggregate } from "../outputs/Element_affinityMinAggregate";
import { Element_affinitySumAggregate } from "../outputs/Element_affinitySumAggregate";

@TypeGraphQL.ObjectType("Element_affinityGroupBy", {
  isAbstract: true
})
export class Element_affinityGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  element_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  affinity_element!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  affinity_type!: number;

  @TypeGraphQL.Field(_type => Element_affinityCountAggregate, {
    nullable: true
  })
  _count!: Element_affinityCountAggregate | null;

  @TypeGraphQL.Field(_type => Element_affinityAvgAggregate, {
    nullable: true
  })
  _avg!: Element_affinityAvgAggregate | null;

  @TypeGraphQL.Field(_type => Element_affinitySumAggregate, {
    nullable: true
  })
  _sum!: Element_affinitySumAggregate | null;

  @TypeGraphQL.Field(_type => Element_affinityMinAggregate, {
    nullable: true
  })
  _min!: Element_affinityMinAggregate | null;

  @TypeGraphQL.Field(_type => Element_affinityMaxAggregate, {
    nullable: true
  })
  _max!: Element_affinityMaxAggregate | null;
}
