import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Player_cardOrderByWithAggregationInput } from "../../../inputs/Player_cardOrderByWithAggregationInput";
import { Player_cardScalarWhereWithAggregatesInput } from "../../../inputs/Player_cardScalarWhereWithAggregatesInput";
import { Player_cardWhereInput } from "../../../inputs/Player_cardWhereInput";
import { Player_cardScalarFieldEnum } from "../../../../enums/Player_cardScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPlayer_cardArgs {
  @TypeGraphQL.Field(_type => Player_cardWhereInput, {
    nullable: true
  })
  where?: Player_cardWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Player_cardOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Player_cardOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Player_cardScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "card_id" | "player_id">;

  @TypeGraphQL.Field(_type => Player_cardScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Player_cardScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
