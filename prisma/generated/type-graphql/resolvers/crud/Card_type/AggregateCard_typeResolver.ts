import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCard_typeArgs } from "./args/AggregateCard_typeArgs";
import { Card_type } from "../../../models/Card_type";
import { AggregateCard_type } from "../../outputs/AggregateCard_type";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Card_type)
export class AggregateCard_typeResolver {
  @TypeGraphQL.Query(_returns => AggregateCard_type, {
    nullable: false
  })
  async aggregateCard_type(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCard_typeArgs): Promise<AggregateCard_type> {
    return getPrismaFromContext(ctx).card_type.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
