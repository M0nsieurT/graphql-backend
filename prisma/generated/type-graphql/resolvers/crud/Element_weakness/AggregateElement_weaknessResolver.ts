import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateElement_weaknessArgs } from "./args/AggregateElement_weaknessArgs";
import { Element_weakness } from "../../../models/Element_weakness";
import { AggregateElement_weakness } from "../../outputs/AggregateElement_weakness";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Element_weakness)
export class AggregateElement_weaknessResolver {
  @TypeGraphQL.Query(_returns => AggregateElement_weakness, {
    nullable: false
  })
  async aggregateElement_weakness(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateElement_weaknessArgs): Promise<AggregateElement_weakness> {
    return getPrismaFromContext(ctx).element_weakness.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
