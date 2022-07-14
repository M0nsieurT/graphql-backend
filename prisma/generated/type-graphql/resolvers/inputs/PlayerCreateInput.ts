import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Player_cardCreateNestedManyWithoutPlayerInput } from "../inputs/Player_cardCreateNestedManyWithoutPlayerInput";

@TypeGraphQL.InputType("PlayerCreateInput", {
  isAbstract: true
})
export class PlayerCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => Player_cardCreateNestedManyWithoutPlayerInput, {
    nullable: true
  })
  player_card?: Player_cardCreateNestedManyWithoutPlayerInput | undefined;
}
