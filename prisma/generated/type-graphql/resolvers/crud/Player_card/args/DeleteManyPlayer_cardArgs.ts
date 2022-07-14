import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Player_cardWhereInput } from "../../../inputs/Player_cardWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPlayer_cardArgs {
  @TypeGraphQL.Field(_type => Player_cardWhereInput, {
    nullable: true
  })
  where?: Player_cardWhereInput | undefined;
}
