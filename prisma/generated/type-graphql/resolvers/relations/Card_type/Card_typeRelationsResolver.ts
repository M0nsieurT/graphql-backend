import * as TypeGraphQL from "type-graphql";
import { Card } from "../../../models/Card";
import { Card_type } from "../../../models/Card_type";
import { Card_typeCardArgs } from "./args/Card_typeCardArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Card_type)
export class Card_typeRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Card], {
    nullable: false
  })
  async card(@TypeGraphQL.Root() card_type: Card_type, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: Card_typeCardArgs): Promise<Card[]> {
    return getPrismaFromContext(ctx).card_type.findUnique({
      where: {
        id: card_type.id,
      },
    }).card(args);
  }
}
