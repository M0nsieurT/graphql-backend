import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CardUpdateOneRequiredWithoutPlayer_cardNestedInput } from "../inputs/CardUpdateOneRequiredWithoutPlayer_cardNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("Player_cardUpdateWithoutPlayerInput", {
  isAbstract: true
})
export class Player_cardUpdateWithoutPlayerInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CardUpdateOneRequiredWithoutPlayer_cardNestedInput, {
    nullable: true
  })
  card?: CardUpdateOneRequiredWithoutPlayer_cardNestedInput | undefined;
}
