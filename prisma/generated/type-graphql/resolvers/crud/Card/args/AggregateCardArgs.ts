import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CardOrderByWithRelationInput } from "../../../inputs/CardOrderByWithRelationInput";
import { CardWhereInput } from "../../../inputs/CardWhereInput";
import { CardWhereUniqueInput } from "../../../inputs/CardWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateCardArgs {
  @TypeGraphQL.Field(_type => CardWhereInput, {
    nullable: true
  })
  where?: CardWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CardOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: CardOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => CardWhereUniqueInput, {
    nullable: true
  })
  cursor?: CardWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
