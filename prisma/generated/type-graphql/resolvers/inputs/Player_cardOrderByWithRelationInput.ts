import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CardOrderByWithRelationInput } from "../inputs/CardOrderByWithRelationInput";
import { PlayerOrderByWithRelationInput } from "../inputs/PlayerOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Player_cardOrderByWithRelationInput", {
  isAbstract: true
})
export class Player_cardOrderByWithRelationInput {
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
  card_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  player_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CardOrderByWithRelationInput, {
    nullable: true
  })
  card?: CardOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => PlayerOrderByWithRelationInput, {
    nullable: true
  })
  player?: PlayerOrderByWithRelationInput | undefined;
}
