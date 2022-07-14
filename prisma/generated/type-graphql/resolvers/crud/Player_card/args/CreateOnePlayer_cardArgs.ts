import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Player_cardCreateInput } from "../../../inputs/Player_cardCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePlayer_cardArgs {
  @TypeGraphQL.Field(_type => Player_cardCreateInput, {
    nullable: false
  })
  data!: Player_cardCreateInput;
}
