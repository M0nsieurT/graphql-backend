import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Player_cardWhereUniqueInput } from "../../../inputs/Player_cardWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePlayer_cardArgs {
  @TypeGraphQL.Field(_type => Player_cardWhereUniqueInput, {
    nullable: false
  })
  where!: Player_cardWhereUniqueInput;
}
