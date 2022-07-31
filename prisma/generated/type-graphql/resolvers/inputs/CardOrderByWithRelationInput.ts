import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Card_rankOrderByWithRelationInput } from "../inputs/Card_rankOrderByWithRelationInput";
import { Card_typeOrderByWithRelationInput } from "../inputs/Card_typeOrderByWithRelationInput";
import { ElementOrderByWithRelationInput } from "../inputs/ElementOrderByWithRelationInput";
import { Player_cardOrderByRelationAggregateInput } from "../inputs/Player_cardOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CardOrderByWithRelationInput", {
  isAbstract: true
})
export class CardOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  power?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  element_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  rank_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  card_type_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  max_chain?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Card_rankOrderByWithRelationInput, {
    nullable: true
  })
  card_rank?: Card_rankOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => Card_typeOrderByWithRelationInput, {
    nullable: true
  })
  card_type?: Card_typeOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => ElementOrderByWithRelationInput, {
    nullable: true
  })
  element?: ElementOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => Player_cardOrderByRelationAggregateInput, {
    nullable: true
  })
  player_card?: Player_cardOrderByRelationAggregateInput | undefined;
}
