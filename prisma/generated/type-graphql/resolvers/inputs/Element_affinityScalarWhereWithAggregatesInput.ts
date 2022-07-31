import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("Element_affinityScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class Element_affinityScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Element_affinityScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Element_affinityScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Element_affinityScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Element_affinityScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Element_affinityScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Element_affinityScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  element_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  affinity_element?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  affinity_type?: IntWithAggregatesFilter | undefined;
}
