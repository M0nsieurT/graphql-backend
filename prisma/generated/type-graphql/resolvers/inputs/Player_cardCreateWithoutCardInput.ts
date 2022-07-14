import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlayerCreateNestedOneWithoutPlayer_cardInput } from "../inputs/PlayerCreateNestedOneWithoutPlayer_cardInput";

@TypeGraphQL.InputType("Player_cardCreateWithoutCardInput", {
  isAbstract: true
})
export class Player_cardCreateWithoutCardInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => PlayerCreateNestedOneWithoutPlayer_cardInput, {
    nullable: false
  })
  player!: PlayerCreateNestedOneWithoutPlayer_cardInput;
}
