import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CardCreateWithoutPlayer_cardInput } from "../inputs/CardCreateWithoutPlayer_cardInput";
import { CardWhereUniqueInput } from "../inputs/CardWhereUniqueInput";

@TypeGraphQL.InputType("CardCreateOrConnectWithoutPlayer_cardInput", {
  isAbstract: true
})
export class CardCreateOrConnectWithoutPlayer_cardInput {
  @TypeGraphQL.Field(_type => CardWhereUniqueInput, {
    nullable: false
  })
  where!: CardWhereUniqueInput;

  @TypeGraphQL.Field(_type => CardCreateWithoutPlayer_cardInput, {
    nullable: false
  })
  create!: CardCreateWithoutPlayer_cardInput;
}
