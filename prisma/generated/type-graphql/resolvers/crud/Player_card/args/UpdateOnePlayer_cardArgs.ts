import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Player_cardUpdateInput } from "../../../inputs/Player_cardUpdateInput";
import { Player_cardWhereUniqueInput } from "../../../inputs/Player_cardWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePlayer_cardArgs {
  @TypeGraphQL.Field(_type => Player_cardUpdateInput, {
    nullable: false
  })
  data!: Player_cardUpdateInput;

  @TypeGraphQL.Field(_type => Player_cardWhereUniqueInput, {
    nullable: false
  })
  where!: Player_cardWhereUniqueInput;
}
