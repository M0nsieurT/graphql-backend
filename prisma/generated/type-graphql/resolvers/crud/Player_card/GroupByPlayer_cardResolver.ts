import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByPlayer_cardArgs } from "./args/GroupByPlayer_cardArgs";
import { Player_card } from "../../../models/Player_card";
import { Player_cardGroupBy } from "../../outputs/Player_cardGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Player_card)
export class GroupByPlayer_cardResolver {
  @TypeGraphQL.Query(_returns => [Player_cardGroupBy], {
    nullable: false
  })
  async groupByPlayer_card(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPlayer_cardArgs): Promise<Player_cardGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).player_card.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
