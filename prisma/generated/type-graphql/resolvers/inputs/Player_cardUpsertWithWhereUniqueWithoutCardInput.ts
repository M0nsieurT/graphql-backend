import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Player_cardCreateWithoutCardInput } from "../inputs/Player_cardCreateWithoutCardInput";
import { Player_cardUpdateWithoutCardInput } from "../inputs/Player_cardUpdateWithoutCardInput";
import { Player_cardWhereUniqueInput } from "../inputs/Player_cardWhereUniqueInput";

@TypeGraphQL.InputType("Player_cardUpsertWithWhereUniqueWithoutCardInput", {
  isAbstract: true
})
export class Player_cardUpsertWithWhereUniqueWithoutCardInput {
  @TypeGraphQL.Field(_type => Player_cardWhereUniqueInput, {
    nullable: false
  })
  where!: Player_cardWhereUniqueInput;

  @TypeGraphQL.Field(_type => Player_cardUpdateWithoutCardInput, {
    nullable: false
  })
  update!: Player_cardUpdateWithoutCardInput;

  @TypeGraphQL.Field(_type => Player_cardCreateWithoutCardInput, {
    nullable: false
  })
  create!: Player_cardCreateWithoutCardInput;
}
