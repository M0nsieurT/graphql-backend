import * as TypeGraphQL from "type-graphql";
import { Card } from "../../../models/Card";
import { Card_rank } from "../../../models/Card_rank";
import { Card_type } from "../../../models/Card_type";
import { Element } from "../../../models/Element";
import { Player_card } from "../../../models/Player_card";
import { CardPlayer_cardArgs } from "./args/CardPlayer_cardArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Card)
export class CardRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Card_rank, {
    nullable: true
  })
  async card_rank(@TypeGraphQL.Root() card: Card, @TypeGraphQL.Ctx() ctx: any): Promise<Card_rank | null> {
    return getPrismaFromContext(ctx).card.findUnique({
      where: {
        id: card.id,
      },
    }).card_rank({});
  }

  @TypeGraphQL.FieldResolver(_type => Card_type, {
    nullable: false
  })
  async card_type(@TypeGraphQL.Root() card: Card, @TypeGraphQL.Ctx() ctx: any): Promise<Card_type> {
    return getPrismaFromContext(ctx).card.findUnique({
      where: {
        id: card.id,
      },
    }).card_type({});
  }

  @TypeGraphQL.FieldResolver(_type => Element, {
    nullable: false
  })
  async element(@TypeGraphQL.Root() card: Card, @TypeGraphQL.Ctx() ctx: any): Promise<Element> {
    return getPrismaFromContext(ctx).card.findUnique({
      where: {
        id: card.id,
      },
    }).element({});
  }

  @TypeGraphQL.FieldResolver(_type => [Player_card], {
    nullable: false
  })
  async player_card(@TypeGraphQL.Root() card: Card, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CardPlayer_cardArgs): Promise<Player_card[]> {
    return getPrismaFromContext(ctx).card.findUnique({
      where: {
        id: card.id,
      },
    }).player_card(args);
  }
}
