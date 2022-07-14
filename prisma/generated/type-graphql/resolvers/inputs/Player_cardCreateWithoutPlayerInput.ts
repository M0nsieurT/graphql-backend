import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CardCreateNestedOneWithoutPlayer_cardInput } from "../inputs/CardCreateNestedOneWithoutPlayer_cardInput";

@TypeGraphQL.InputType("Player_cardCreateWithoutPlayerInput", {
  isAbstract: true
})
export class Player_cardCreateWithoutPlayerInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => CardCreateNestedOneWithoutPlayer_cardInput, {
    nullable: false
  })
  card!: CardCreateNestedOneWithoutPlayer_cardInput;
}
