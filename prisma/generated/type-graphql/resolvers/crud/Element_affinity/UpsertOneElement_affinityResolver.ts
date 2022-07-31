import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertOneElement_affinityArgs } from "./args/UpsertOneElement_affinityArgs";
import { Element_affinity } from "../../../models/Element_affinity";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Element_affinity)
export class UpsertOneElement_affinityResolver {
  @TypeGraphQL.Mutation(_returns => Element_affinity, {
    nullable: false
  })
  async upsertOneElement_affinity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneElement_affinityArgs): Promise<Element_affinity> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).element_affinity.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
