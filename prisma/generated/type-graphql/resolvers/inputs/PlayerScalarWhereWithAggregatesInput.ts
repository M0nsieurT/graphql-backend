import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("PlayerScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class PlayerScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PlayerScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PlayerScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlayerScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PlayerScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlayerScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PlayerScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  password?: StringWithAggregatesFilter | undefined;
}
