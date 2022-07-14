import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertOneElement_weaknessArgs } from "./args/UpsertOneElement_weaknessArgs";
import { Element_weakness } from "../../../models/Element_weakness";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Element_weakness)
export class UpsertOneElement_weaknessResolver {
  @TypeGraphQL.Mutation(_returns => Element_weakness, {
    nullable: false
  })
  async upsertOneElement_weakness(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneElement_weaknessArgs): Promise<Element_weakness> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).element_weakness.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
