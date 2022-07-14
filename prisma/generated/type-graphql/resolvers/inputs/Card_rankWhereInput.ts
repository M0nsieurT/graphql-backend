import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CardListRelationFilter } from "../inputs/CardListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("Card_rankWhereInput", {
  isAbstract: true
})
export class Card_rankWhereInput {
  @TypeGraphQL.Field(_type => [Card_rankWhereInput], {
    nullable: true
  })
  AND?: Card_rankWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Card_rankWhereInput], {
    nullable: true
  })
  OR?: Card_rankWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Card_rankWhereInput], {
    nullable: true
  })
  NOT?: Card_rankWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  code?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => CardListRelationFilter, {
    nullable: true
  })
  card?: CardListRelationFilter | undefined;
}
