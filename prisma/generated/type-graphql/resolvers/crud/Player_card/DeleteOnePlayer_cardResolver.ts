import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteOnePlayer_cardArgs } from "./args/DeleteOnePlayer_cardArgs";
import { Player_card } from "../../../models/Player_card";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Player_card)
export class DeleteOnePlayer_cardResolver {
  @TypeGraphQL.Mutation(_returns => Player_card, {
    nullable: true
  })
  async deleteOnePlayer_card(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOnePlayer_cardArgs): Promise<Player_card | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).player_card.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
