import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstElement_weaknessArgs } from "./args/FindFirstElement_weaknessArgs";
import { Element_weakness } from "../../../models/Element_weakness";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Element_weakness)
export class FindFirstElement_weaknessResolver {
  @TypeGraphQL.Query(_returns => Element_weakness, {
    nullable: true
  })
  async findFirstElement_weakness(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstElement_weaknessArgs): Promise<Element_weakness | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).element_weakness.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
