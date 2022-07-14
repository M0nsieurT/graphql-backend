import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FloatWithAggregatesFilter } from "../inputs/FloatWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("Element_weaknessScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class Element_weaknessScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Element_weaknessScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Element_weaknessScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Element_weaknessScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Element_weaknessScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Element_weaknessScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Element_weaknessScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  element_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  weakness_element_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => FloatWithAggregatesFilter, {
    nullable: true
  })
  coef?: FloatWithAggregatesFilter | undefined;
}
