import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ElementRelationFilter } from "../inputs/ElementRelationFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("Element_weaknessWhereInput", {
  isAbstract: true
})
export class Element_weaknessWhereInput {
  @TypeGraphQL.Field(_type => [Element_weaknessWhereInput], {
    nullable: true
  })
  AND?: Element_weaknessWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Element_weaknessWhereInput], {
    nullable: true
  })
  OR?: Element_weaknessWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Element_weaknessWhereInput], {
    nullable: true
  })
  NOT?: Element_weaknessWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  element_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  weakness_element_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => FloatFilter, {
    nullable: true
  })
  coef?: FloatFilter | undefined;

  @TypeGraphQL.Field(_type => ElementRelationFilter, {
    nullable: true
  })
  element_elementToelement_weakness_element_id?: ElementRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ElementRelationFilter, {
    nullable: true
  })
  element_elementToelement_weakness_weakness_element_id?: ElementRelationFilter | undefined;
}
