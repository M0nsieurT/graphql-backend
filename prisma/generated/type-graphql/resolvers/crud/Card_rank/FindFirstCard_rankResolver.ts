import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstCard_rankArgs } from "./args/FindFirstCard_rankArgs";
import { Card_rank } from "../../../models/Card_rank";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Card_rank)
export class FindFirstCard_rankResolver {
  @TypeGraphQL.Query(_returns => Card_rank, {
    nullable: true
  })
  async findFirstCard_rank(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstCard_rankArgs): Promise<Card_rank | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).card_rank.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
