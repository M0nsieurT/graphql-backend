import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("Card_rankScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class Card_rankScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Card_rankScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Card_rankScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Card_rankScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Card_rankScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Card_rankScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Card_rankScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  code?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;
}
