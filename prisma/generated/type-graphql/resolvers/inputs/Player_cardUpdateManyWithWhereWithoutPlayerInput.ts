import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Player_cardScalarWhereInput } from "../inputs/Player_cardScalarWhereInput";
import { Player_cardUpdateManyMutationInput } from "../inputs/Player_cardUpdateManyMutationInput";

@TypeGraphQL.InputType("Player_cardUpdateManyWithWhereWithoutPlayerInput", {
  isAbstract: true
})
export class Player_cardUpdateManyWithWhereWithoutPlayerInput {
  @TypeGraphQL.Field(_type => Player_cardScalarWhereInput, {
    nullable: false
  })
  where!: Player_cardScalarWhereInput;

  @TypeGraphQL.Field(_type => Player_cardUpdateManyMutationInput, {
    nullable: false
  })
  data!: Player_cardUpdateManyMutationInput;
}
