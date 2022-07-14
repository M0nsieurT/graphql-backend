import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CardRelationFilter } from "../inputs/CardRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { PlayerRelationFilter } from "../inputs/PlayerRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("Player_cardWhereInput", {
  isAbstract: true
})
export class Player_cardWhereInput {
  @TypeGraphQL.Field(_type => [Player_cardWhereInput], {
    nullable: true
  })
  AND?: Player_cardWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Player_cardWhereInput], {
    nullable: true
  })
  OR?: Player_cardWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Player_cardWhereInput], {
    nullable: true
  })
  NOT?: Player_cardWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  card_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  player_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => CardRelationFilter, {
    nullable: true
  })
  card?: CardRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PlayerRelationFilter, {
    nullable: true
  })
  player?: PlayerRelationFilter | undefined;
}
