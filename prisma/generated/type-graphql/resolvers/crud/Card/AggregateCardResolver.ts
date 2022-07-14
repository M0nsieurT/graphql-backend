import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCardArgs } from "./args/AggregateCardArgs";
import { Card } from "../../../models/Card";
import { AggregateCard } from "../../outputs/AggregateCard";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Card)
export class AggregateCardResolver {
  @TypeGraphQL.Query(_returns => AggregateCard, {
    nullable: false
  })
  async aggregateCard(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCardArgs): Promise<AggregateCard> {
    return getPrismaFromContext(ctx).card.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
