import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CardListRelationFilter } from "../inputs/CardListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("Card_typeWhereInput", {
  isAbstract: true
})
export class Card_typeWhereInput {
  @TypeGraphQL.Field(_type => [Card_typeWhereInput], {
    nullable: true
  })
  AND?: Card_typeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Card_typeWhereInput], {
    nullable: true
  })
  OR?: Card_typeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Card_typeWhereInput], {
    nullable: true
  })
  NOT?: Card_typeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => CardListRelationFilter, {
    nullable: true
  })
  card?: CardListRelationFilter | undefined;
}
