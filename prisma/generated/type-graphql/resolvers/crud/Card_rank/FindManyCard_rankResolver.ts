import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyCard_rankArgs } from "./args/FindManyCard_rankArgs";
import { Card_rank } from "../../../models/Card_rank";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Card_rank)
export class FindManyCard_rankResolver {
  @TypeGraphQL.Query(_returns => [Card_rank], {
    nullable: false
  })
  async card_ranks(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyCard_rankArgs): Promise<Card_rank[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).card_rank.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
