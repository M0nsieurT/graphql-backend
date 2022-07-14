import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CardWhereInput } from "../inputs/CardWhereInput";

@TypeGraphQL.InputType("CardRelationFilter", {
  isAbstract: true
})
export class CardRelationFilter {
  @TypeGraphQL.Field(_type => CardWhereInput, {
    nullable: true
  })
  is?: CardWhereInput | undefined;

  @TypeGraphQL.Field(_type => CardWhereInput, {
    nullable: true
  })
  isNot?: CardWhereInput | undefined;
}
