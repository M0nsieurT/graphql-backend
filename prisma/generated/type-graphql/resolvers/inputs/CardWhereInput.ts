import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Card_rankRelationFilter } from "../inputs/Card_rankRelationFilter";
import { Card_typeRelationFilter } from "../inputs/Card_typeRelationFilter";
import { ElementRelationFilter } from "../inputs/ElementRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { Player_cardListRelationFilter } from "../inputs/Player_cardListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("CardWhereInput", {
  isAbstract: true
})
export class CardWhereInput {
  @TypeGraphQL.Field(_type => [CardWhereInput], {
    nullable: true
  })
  AND?: CardWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CardWhereInput], {
    nullable: true
  })
  OR?: CardWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CardWhereInput], {
    nullable: true
  })
  NOT?: CardWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  description?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  power?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  element_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  rank_id?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  card_type_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  max_chain?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => Card_typeRelationFilter, {
    nullable: true
  })
  card_type?: Card_typeRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ElementRelationFilter, {
    nullable: true
  })
  element?: ElementRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Card_rankRelationFilter, {
    nullable: true
  })
  card_rank?: Card_rankRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Player_cardListRelationFilter, {
    nullable: true
  })
  player_card?: Player_cardListRelationFilter | undefined;
}
