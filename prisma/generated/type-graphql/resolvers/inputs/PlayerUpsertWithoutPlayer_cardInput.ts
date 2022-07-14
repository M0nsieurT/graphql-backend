import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlayerCreateWithoutPlayer_cardInput } from "../inputs/PlayerCreateWithoutPlayer_cardInput";
import { PlayerUpdateWithoutPlayer_cardInput } from "../inputs/PlayerUpdateWithoutPlayer_cardInput";

@TypeGraphQL.InputType("PlayerUpsertWithoutPlayer_cardInput", {
  isAbstract: true
})
export class PlayerUpsertWithoutPlayer_cardInput {
  @TypeGraphQL.Field(_type => PlayerUpdateWithoutPlayer_cardInput, {
    nullable: false
  })
  update!: PlayerUpdateWithoutPlayer_cardInput;

  @TypeGraphQL.Field(_type => PlayerCreateWithoutPlayer_cardInput, {
    nullable: false
  })
  create!: PlayerCreateWithoutPlayer_cardInput;
}
