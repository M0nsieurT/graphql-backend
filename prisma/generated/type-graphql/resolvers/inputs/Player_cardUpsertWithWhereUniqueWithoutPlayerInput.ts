import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Player_cardCreateWithoutPlayerInput } from "../inputs/Player_cardCreateWithoutPlayerInput";
import { Player_cardUpdateWithoutPlayerInput } from "../inputs/Player_cardUpdateWithoutPlayerInput";
import { Player_cardWhereUniqueInput } from "../inputs/Player_cardWhereUniqueInput";

@TypeGraphQL.InputType("Player_cardUpsertWithWhereUniqueWithoutPlayerInput", {
  isAbstract: true
})
export class Player_cardUpsertWithWhereUniqueWithoutPlayerInput {
  @TypeGraphQL.Field(_type => Player_cardWhereUniqueInput, {
    nullable: false
  })
  where!: Player_cardWhereUniqueInput;

  @TypeGraphQL.Field(_type => Player_cardUpdateWithoutPlayerInput, {
    nullable: false
  })
  update!: Player_cardUpdateWithoutPlayerInput;

  @TypeGraphQL.Field(_type => Player_cardCreateWithoutPlayerInput, {
    nullable: false
  })
  create!: Player_cardCreateWithoutPlayerInput;
}
