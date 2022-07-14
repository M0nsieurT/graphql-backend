import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Player_cardOrderByWithRelationInput } from "../../../inputs/Player_cardOrderByWithRelationInput";
import { Player_cardWhereInput } from "../../../inputs/Player_cardWhereInput";
import { Player_cardWhereUniqueInput } from "../../../inputs/Player_cardWhereUniqueInput";
import { Player_cardScalarFieldEnum } from "../../../../enums/Player_cardScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class CardPlayer_cardArgs {
  @TypeGraphQL.Field(_type => Player_cardWhereInput, {
    nullable: true
  })
  where?: Player_cardWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Player_cardOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: Player_cardOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => Player_cardWhereUniqueInput, {
    nullable: true
  })
  cursor?: Player_cardWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Player_cardScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "card_id" | "player_id"> | undefined;
}
