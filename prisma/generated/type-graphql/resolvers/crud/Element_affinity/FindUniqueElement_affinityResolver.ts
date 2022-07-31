import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueElement_affinityArgs } from "./args/FindUniqueElement_affinityArgs";
import { Element_affinity } from "../../../models/Element_affinity";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Element_affinity)
export class FindUniqueElement_affinityResolver {
  @TypeGraphQL.Query(_returns => Element_affinity, {
    nullable: true
  })
  async element_affinity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueElement_affinityArgs): Promise<Element_affinity | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).element_affinity.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
