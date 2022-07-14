import * as TypeGraphQL from "type-graphql";
import { Card } from "../../../models/Card";
import { Player } from "../../../models/Player";
import { Player_card } from "../../../models/Player_card";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Player_card)
export class Player_cardRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Card, {
    nullable: false
  })
  async card(@TypeGraphQL.Root() player_card: Player_card, @TypeGraphQL.Ctx() ctx: any): Promise<Card> {
    return getPrismaFromContext(ctx).player_card.findUnique({
      where: {
        id: player_card.id,
      },
    }).card({});
  }

  @TypeGraphQL.FieldResolver(_type => Player, {
    nullable: false
  })
  async player(@TypeGraphQL.Root() player_card: Player_card, @TypeGraphQL.Ctx() ctx: any): Promise<Player> {
    return getPrismaFromContext(ctx).player_card.findUnique({
      where: {
        id: player_card.id,
      },
    }).player({});
  }
}
