import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlayerUpdateOneRequiredWithoutPlayer_cardNestedInput } from "../inputs/PlayerUpdateOneRequiredWithoutPlayer_cardNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("Player_cardUpdateWithoutCardInput", {
  isAbstract: true
})
export class Player_cardUpdateWithoutCardInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PlayerUpdateOneRequiredWithoutPlayer_cardNestedInput, {
    nullable: true
  })
  player?: PlayerUpdateOneRequiredWithoutPlayer_cardNestedInput | undefined;
}
