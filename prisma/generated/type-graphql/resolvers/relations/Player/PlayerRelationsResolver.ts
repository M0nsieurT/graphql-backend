import * as TypeGraphQL from "type-graphql";
import { Player } from "../../../models/Player";
import { Player_card } from "../../../models/Player_card";
import { PlayerPlayer_cardArgs } from "./args/PlayerPlayer_cardArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Player)
export class PlayerRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Player_card], {
    nullable: false
  })
  async player_card(@TypeGraphQL.Root() player: Player, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PlayerPlayer_cardArgs): Promise<Player_card[]> {
    return getPrismaFromContext(ctx).player.findUnique({
      where: {
        id: player.id,
      },
    }).player_card(args);
  }
}
