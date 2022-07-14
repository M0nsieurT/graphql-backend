import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CardCreateWithoutPlayer_cardInput } from "../inputs/CardCreateWithoutPlayer_cardInput";
import { CardUpdateWithoutPlayer_cardInput } from "../inputs/CardUpdateWithoutPlayer_cardInput";

@TypeGraphQL.InputType("CardUpsertWithoutPlayer_cardInput", {
  isAbstract: true
})
export class CardUpsertWithoutPlayer_cardInput {
  @TypeGraphQL.Field(_type => CardUpdateWithoutPlayer_cardInput, {
    nullable: false
  })
  update!: CardUpdateWithoutPlayer_cardInput;

  @TypeGraphQL.Field(_type => CardCreateWithoutPlayer_cardInput, {
    nullable: false
  })
  create!: CardCreateWithoutPlayer_cardInput;
}
