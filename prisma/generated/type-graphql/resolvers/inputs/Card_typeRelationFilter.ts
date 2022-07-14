import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Card_typeWhereInput } from "../inputs/Card_typeWhereInput";

@TypeGraphQL.InputType("Card_typeRelationFilter", {
  isAbstract: true
})
export class Card_typeRelationFilter {
  @TypeGraphQL.Field(_type => Card_typeWhereInput, {
    nullable: true
  })
  is?: Card_typeWhereInput | undefined;

  @TypeGraphQL.Field(_type => Card_typeWhereInput, {
    nullable: true
  })
  isNot?: Card_typeWhereInput | undefined;
}
