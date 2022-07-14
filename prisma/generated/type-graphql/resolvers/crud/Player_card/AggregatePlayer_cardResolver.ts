import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregatePlayer_cardArgs } from "./args/AggregatePlayer_cardArgs";
import { Player_card } from "../../../models/Player_card";
import { AggregatePlayer_card } from "../../outputs/AggregatePlayer_card";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Player_card)
export class AggregatePlayer_cardResolver {
  @TypeGraphQL.Query(_returns => AggregatePlayer_card, {
    nullable: false
  })
  async aggregatePlayer_card(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePlayer_cardArgs): Promise<AggregatePlayer_card> {
    return getPrismaFromContext(ctx).player_card.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
