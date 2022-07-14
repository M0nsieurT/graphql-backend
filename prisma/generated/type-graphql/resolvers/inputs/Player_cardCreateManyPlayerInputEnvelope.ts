import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Player_cardCreateManyPlayerInput } from "../inputs/Player_cardCreateManyPlayerInput";

@TypeGraphQL.InputType("Player_cardCreateManyPlayerInputEnvelope", {
  isAbstract: true
})
export class Player_cardCreateManyPlayerInputEnvelope {
  @TypeGraphQL.Field(_type => [Player_cardCreateManyPlayerInput], {
    nullable: false
  })
  data!: Player_cardCreateManyPlayerInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
