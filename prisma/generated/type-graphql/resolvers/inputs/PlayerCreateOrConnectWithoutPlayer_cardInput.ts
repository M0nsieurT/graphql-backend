import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlayerCreateWithoutPlayer_cardInput } from "../inputs/PlayerCreateWithoutPlayer_cardInput";
import { PlayerWhereUniqueInput } from "../inputs/PlayerWhereUniqueInput";

@TypeGraphQL.InputType("PlayerCreateOrConnectWithoutPlayer_cardInput", {
  isAbstract: true
})
export class PlayerCreateOrConnectWithoutPlayer_cardInput {
  @TypeGraphQL.Field(_type => PlayerWhereUniqueInput, {
    nullable: false
  })
  where!: PlayerWhereUniqueInput;

  @TypeGraphQL.Field(_type => PlayerCreateWithoutPlayer_cardInput, {
    nullable: false
  })
  create!: PlayerCreateWithoutPlayer_cardInput;
}
