import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Player_cardWhereInput } from "../inputs/Player_cardWhereInput";

@TypeGraphQL.InputType("Player_cardListRelationFilter", {
  isAbstract: true
})
export class Player_cardListRelationFilter {
  @TypeGraphQL.Field(_type => Player_cardWhereInput, {
    nullable: true
  })
  every?: Player_cardWhereInput | undefined;

  @TypeGraphQL.Field(_type => Player_cardWhereInput, {
    nullable: true
  })
  some?: Player_cardWhereInput | undefined;

  @TypeGraphQL.Field(_type => Player_cardWhereInput, {
    nullable: true
  })
  none?: Player_cardWhereInput | undefined;
}
