import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCard_rankArgs } from "./args/AggregateCard_rankArgs";
import { Card_rank } from "../../../models/Card_rank";
import { AggregateCard_rank } from "../../outputs/AggregateCard_rank";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Card_rank)
export class AggregateCard_rankResolver {
  @TypeGraphQL.Query(_returns => AggregateCard_rank, {
    nullable: false
  })
  async aggregateCard_rank(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCard_rankArgs): Promise<AggregateCard_rank> {
    return getPrismaFromContext(ctx).card_rank.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
