import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByElement_weaknessArgs } from "./args/GroupByElement_weaknessArgs";
import { Element_weakness } from "../../../models/Element_weakness";
import { Element_weaknessGroupBy } from "../../outputs/Element_weaknessGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Element_weakness)
export class GroupByElement_weaknessResolver {
  @TypeGraphQL.Query(_returns => [Element_weaknessGroupBy], {
    nullable: false
  })
  async groupByElement_weakness(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByElement_weaknessArgs): Promise<Element_weaknessGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).element_weakness.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
