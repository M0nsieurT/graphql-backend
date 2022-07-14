import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("Player_cardScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class Player_cardScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Player_cardScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Player_cardScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Player_cardScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Player_cardScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Player_cardScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Player_cardScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  card_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  player_id?: IntWithAggregatesFilter | undefined;
}
