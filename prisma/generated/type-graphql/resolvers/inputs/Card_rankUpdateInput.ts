import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CardUpdateManyWithoutCard_rankNestedInput } from "../inputs/CardUpdateManyWithoutCard_rankNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("Card_rankUpdateInput", {
  isAbstract: true
})
export class Card_rankUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  code?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CardUpdateManyWithoutCard_rankNestedInput, {
    nullable: true
  })
  card?: CardUpdateManyWithoutCard_rankNestedInput | undefined;
}
