import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByElement_affinityArgs } from "./args/GroupByElement_affinityArgs";
import { Element_affinity } from "../../../models/Element_affinity";
import { Element_affinityGroupBy } from "../../outputs/Element_affinityGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Element_affinity)
export class GroupByElement_affinityResolver {
  @TypeGraphQL.Query(_returns => [Element_affinityGroupBy], {
    nullable: false
  })
  async groupByElement_affinity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByElement_affinityArgs): Promise<Element_affinityGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).element_affinity.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
