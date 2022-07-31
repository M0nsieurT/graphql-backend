import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateElement_affinityArgs } from "./args/AggregateElement_affinityArgs";
import { Element_affinity } from "../../../models/Element_affinity";
import { AggregateElement_affinity } from "../../outputs/AggregateElement_affinity";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Element_affinity)
export class AggregateElement_affinityResolver {
  @TypeGraphQL.Query(_returns => AggregateElement_affinity, {
    nullable: false
  })
  async aggregateElement_affinity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateElement_affinityArgs): Promise<AggregateElement_affinity> {
    return getPrismaFromContext(ctx).element_affinity.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
