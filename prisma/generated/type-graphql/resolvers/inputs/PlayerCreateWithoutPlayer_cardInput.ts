import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("PlayerCreateWithoutPlayer_cardInput", {
  isAbstract: true
})
export class PlayerCreateWithoutPlayer_cardInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;
}
