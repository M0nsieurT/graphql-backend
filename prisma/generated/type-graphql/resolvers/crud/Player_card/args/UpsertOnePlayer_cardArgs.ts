import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Player_cardCreateInput } from "../../../inputs/Player_cardCreateInput";
import { Player_cardUpdateInput } from "../../../inputs/Player_cardUpdateInput";
import { Player_cardWhereUniqueInput } from "../../../inputs/Player_cardWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePlayer_cardArgs {
  @TypeGraphQL.Field(_type => Player_cardWhereUniqueInput, {
    nullable: false
  })
  where!: Player_cardWhereUniqueInput;

  @TypeGraphQL.Field(_type => Player_cardCreateInput, {
    nullable: false
  })
  create!: Player_cardCreateInput;

  @TypeGraphQL.Field(_type => Player_cardUpdateInput, {
    nullable: false
  })
  update!: Player_cardUpdateInput;
}
