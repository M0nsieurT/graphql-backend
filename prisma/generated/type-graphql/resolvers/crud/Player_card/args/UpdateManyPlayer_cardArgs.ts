import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Player_cardUpdateManyMutationInput } from "../../../inputs/Player_cardUpdateManyMutationInput";
import { Player_cardWhereInput } from "../../../inputs/Player_cardWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPlayer_cardArgs {
  @TypeGraphQL.Field(_type => Player_cardUpdateManyMutationInput, {
    nullable: false
  })
  data!: Player_cardUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Player_cardWhereInput, {
    nullable: true
  })
  where?: Player_cardWhereInput | undefined;
}
