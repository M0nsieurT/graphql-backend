import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlayerOrderByWithAggregationInput } from "../../../inputs/PlayerOrderByWithAggregationInput";
import { PlayerScalarWhereWithAggregatesInput } from "../../../inputs/PlayerScalarWhereWithAggregatesInput";
import { PlayerWhereInput } from "../../../inputs/PlayerWhereInput";
import { PlayerScalarFieldEnum } from "../../../../enums/PlayerScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPlayerArgs {
  @TypeGraphQL.Field(_type => PlayerWhereInput, {
    nullable: true
  })
  where?: PlayerWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PlayerOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PlayerOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlayerScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name">;

  @TypeGraphQL.Field(_type => PlayerScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PlayerScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
