import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Player_cardUpdateManyWithoutPlayerNestedInput } from "../inputs/Player_cardUpdateManyWithoutPlayerNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("PlayerUpdateInput", {
  isAbstract: true
})
export class PlayerUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => Player_cardUpdateManyWithoutPlayerNestedInput, {
    nullable: true
  })
  player_card?: Player_cardUpdateManyWithoutPlayerNestedInput | undefined;
}
