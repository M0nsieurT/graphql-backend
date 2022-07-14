import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CardWhereInput } from "../inputs/CardWhereInput";

@TypeGraphQL.InputType("CardListRelationFilter", {
  isAbstract: true
})
export class CardListRelationFilter {
  @TypeGraphQL.Field(_type => CardWhereInput, {
    nullable: true
  })
  every?: CardWhereInput | undefined;

  @TypeGraphQL.Field(_type => CardWhereInput, {
    nullable: true
  })
  some?: CardWhereInput | undefined;

  @TypeGraphQL.Field(_type => CardWhereInput, {
    nullable: true
  })
  none?: CardWhereInput | undefined;
}
