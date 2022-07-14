import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteOneCard_rankArgs } from "./args/DeleteOneCard_rankArgs";
import { Card_rank } from "../../../models/Card_rank";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Card_rank)
export class DeleteOneCard_rankResolver {
  @TypeGraphQL.Mutation(_returns => Card_rank, {
    nullable: true
  })
  async deleteOneCard_rank(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneCard_rankArgs): Promise<Card_rank | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).card_rank.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
