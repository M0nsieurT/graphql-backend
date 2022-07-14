import * as TypeGraphQL from "type-graphql";
import { Card } from "../../../models/Card";
import { Card_rank } from "../../../models/Card_rank";
import { Card_rankCardArgs } from "./args/Card_rankCardArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Card_rank)
export class Card_rankRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Card], {
    nullable: false
  })
  async card(@TypeGraphQL.Root() card_rank: Card_rank, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: Card_rankCardArgs): Promise<Card[]> {
    return getPrismaFromContext(ctx).card_rank.findUnique({
      where: {
        id: card_rank.id,
      },
    }).card(args);
  }
}
