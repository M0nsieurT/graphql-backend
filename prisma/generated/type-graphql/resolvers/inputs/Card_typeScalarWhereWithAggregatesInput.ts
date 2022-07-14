import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("Card_typeScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class Card_typeScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Card_typeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Card_typeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Card_typeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Card_typeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Card_typeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Card_typeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;
}
