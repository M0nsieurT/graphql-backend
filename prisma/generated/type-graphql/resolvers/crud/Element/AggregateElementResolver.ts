import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateElementArgs } from "./args/AggregateElementArgs";
import { Element } from "../../../models/Element";
import { AggregateElement } from "../../outputs/AggregateElement";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Element)
export class AggregateElementResolver {
  @TypeGraphQL.Query(_returns => AggregateElement, {
    nullable: false
  })
  async aggregateElement(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateElementArgs): Promise<AggregateElement> {
    return getPrismaFromContext(ctx).element.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
