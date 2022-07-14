import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FloatFilter } from "../inputs/FloatFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("Element_weaknessScalarWhereInput", {
  isAbstract: true
})
export class Element_weaknessScalarWhereInput {
  @TypeGraphQL.Field(_type => [Element_weaknessScalarWhereInput], {
    nullable: true
  })
  AND?: Element_weaknessScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Element_weaknessScalarWhereInput], {
    nullable: true
  })
  OR?: Element_weaknessScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Element_weaknessScalarWhereInput], {
    nullable: true
  })
  NOT?: Element_weaknessScalarWhereInput[] | undefined;

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
}
