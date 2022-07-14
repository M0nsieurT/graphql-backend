import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Card_rankWhereInput } from "../inputs/Card_rankWhereInput";

@TypeGraphQL.InputType("Card_rankRelationFilter", {
  isAbstract: true
})
export class Card_rankRelationFilter {
  @TypeGraphQL.Field(_type => Card_rankWhereInput, {
    nullable: true
  })
  is?: Card_rankWhereInput | undefined;

  @TypeGraphQL.Field(_type => Card_rankWhereInput, {
    nullable: true
  })
  isNot?: Card_rankWhereInput | undefined;
}
