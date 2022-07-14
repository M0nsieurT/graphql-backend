import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Card_rankOrderByWithRelationInput } from "../../../inputs/Card_rankOrderByWithRelationInput";
import { Card_rankWhereInput } from "../../../inputs/Card_rankWhereInput";
import { Card_rankWhereUniqueInput } from "../../../inputs/Card_rankWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateCard_rankArgs {
  @TypeGraphQL.Field(_type => Card_rankWhereInput, {
    nullable: true
  })
  where?: Card_rankWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Card_rankOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: Card_rankOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => Card_rankWhereUniqueInput, {
    nullable: true
  })
  cursor?: Card_rankWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
