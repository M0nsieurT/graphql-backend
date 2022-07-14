import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Card_typeAvgAggregate } from "../outputs/Card_typeAvgAggregate";
import { Card_typeCountAggregate } from "../outputs/Card_typeCountAggregate";
import { Card_typeMaxAggregate } from "../outputs/Card_typeMaxAggregate";
import { Card_typeMinAggregate } from "../outputs/Card_typeMinAggregate";
import { Card_typeSumAggregate } from "../outputs/Card_typeSumAggregate";

@TypeGraphQL.ObjectType("Card_typeGroupBy", {
  isAbstract: true
})
export class Card_typeGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => Card_typeCountAggregate, {
    nullable: true
  })
  _count!: Card_typeCountAggregate | null;

  @TypeGraphQL.Field(_type => Card_typeAvgAggregate, {
    nullable: true
  })
  _avg!: Card_typeAvgAggregate | null;

  @TypeGraphQL.Field(_type => Card_typeSumAggregate, {
    nullable: true
  })
  _sum!: Card_typeSumAggregate | null;

  @TypeGraphQL.Field(_type => Card_typeMinAggregate, {
    nullable: true
  })
  _min!: Card_typeMinAggregate | null;

  @TypeGraphQL.Field(_type => Card_typeMaxAggregate, {
    nullable: true
  })
  _max!: Card_typeMaxAggregate | null;
}
