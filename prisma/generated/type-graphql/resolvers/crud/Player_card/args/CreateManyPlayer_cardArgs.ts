import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Player_cardCreateManyInput } from "../../../inputs/Player_cardCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPlayer_cardArgs {
  @TypeGraphQL.Field(_type => [Player_cardCreateManyInput], {
    nullable: false
  })
  data!: Player_cardCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
