import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregatePlayerArgs } from "./args/AggregatePlayerArgs";
import { Player } from "../../../models/Player";
import { AggregatePlayer } from "../../outputs/AggregatePlayer";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Player)
export class AggregatePlayerResolver {
  @TypeGraphQL.Query(_returns => AggregatePlayer, {
    nullable: false
  })
  async aggregatePlayer(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePlayerArgs): Promise<AggregatePlayer> {
    return getPrismaFromContext(ctx).player.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
