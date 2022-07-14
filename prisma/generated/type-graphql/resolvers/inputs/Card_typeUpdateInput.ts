import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CardUpdateManyWithoutCard_typeNestedInput } from "../inputs/CardUpdateManyWithoutCard_typeNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("Card_typeUpdateInput", {
  isAbstract: true
})
export class Card_typeUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CardUpdateManyWithoutCard_typeNestedInput, {
    nullable: true
  })
  card?: CardUpdateManyWithoutCard_typeNestedInput | undefined;
}
