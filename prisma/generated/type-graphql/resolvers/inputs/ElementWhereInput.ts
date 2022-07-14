import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CardListRelationFilter } from "../inputs/CardListRelationFilter";
import { Element_weaknessListRelationFilter } from "../inputs/Element_weaknessListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ElementWhereInput", {
  isAbstract: true
})
export class ElementWhereInput {
  @TypeGraphQL.Field(_type => [ElementWhereInput], {
    nullable: true
  })
  AND?: ElementWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ElementWhereInput], {
    nullable: true
  })
  OR?: ElementWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ElementWhereInput], {
    nullable: true
  })
  NOT?: ElementWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => Element_weaknessListRelationFilter, {
    nullable: true
  })
  element_weakness_elementToelement_weakness_element_id?: Element_weaknessListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Element_weaknessListRelationFilter, {
    nullable: true
  })
  element_weakness_elementToelement_weakness_weakness_element_id?: Element_weaknessListRelationFilter | undefined;
}
