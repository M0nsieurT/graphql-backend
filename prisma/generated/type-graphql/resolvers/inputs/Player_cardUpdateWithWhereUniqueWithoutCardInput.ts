import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Player_cardUpdateWithoutCardInput } from "../inputs/Player_cardUpdateWithoutCardInput";
import { Player_cardWhereUniqueInput } from "../inputs/Player_cardWhereUniqueInput";

@TypeGraphQL.InputType("Player_cardUpdateWithWhereUniqueWithoutCardInput", {
  isAbstract: true
})
export class Player_cardUpdateWithWhereUniqueWithoutCardInput {
  @TypeGraphQL.Field(_type => Player_cardWhereUniqueInput, {
    nullable: false
  })
  where!: Player_cardWhereUniqueInput;

  @TypeGraphQL.Field(_type => Player_cardUpdateWithoutCardInput, {
    nullable: false
  })
  data!: Player_cardUpdateWithoutCardInput;
}
