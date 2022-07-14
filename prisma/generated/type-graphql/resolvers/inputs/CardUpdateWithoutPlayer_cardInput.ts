import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Card_rankUpdateOneWithoutCardNestedInput } from "../inputs/Card_rankUpdateOneWithoutCardNestedInput";
import { Card_typeUpdateOneRequiredWithoutCardNestedInput } from "../inputs/Card_typeUpdateOneRequiredWithoutCardNestedInput";
import { ElementUpdateOneRequiredWithoutCardNestedInput } from "../inputs/ElementUpdateOneRequiredWithoutCardNestedInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("CardUpdateWithoutPlayer_cardInput", {
  isAbstract: true
})
export class CardUpdateWithoutPlayer_cardInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  power?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  max_chain?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => Card_typeUpdateOneRequiredWithoutCardNestedInput, {
    nullable: true
  })
  card_type?: Card_typeUpdateOneRequiredWithoutCardNestedInput | undefined;

  @TypeGraphQL.Field(_type => ElementUpdateOneRequiredWithoutCardNestedInput, {
    nullable: true
  })
  element?: ElementUpdateOneRequiredWithoutCardNestedInput | undefined;

  @TypeGraphQL.Field(_type => Card_rankUpdateOneWithoutCardNestedInput, {
    nullable: true
  })
  card_rank?: Card_rankUpdateOneWithoutCardNestedInput | undefined;
}
