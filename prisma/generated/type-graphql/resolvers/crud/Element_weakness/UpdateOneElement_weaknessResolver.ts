import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateOneElement_weaknessArgs } from "./args/UpdateOneElement_weaknessArgs";
import { Element_weakness } from "../../../models/Element_weakness";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Element_weakness)
export class UpdateOneElement_weaknessResolver {
  @TypeGraphQL.Mutation(_returns => Element_weakness, {
    nullable: true
  })
  async updateOneElement_weakness(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneElement_weaknessArgs): Promise<Element_weakness | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).element_weakness.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
