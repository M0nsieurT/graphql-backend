import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ElementRelationFilter } from "../inputs/ElementRelationFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("Element_affinityWhereInput", {
  isAbstract: true
})
export class Element_affinityWhereInput {
  @TypeGraphQL.Field(_type => [Element_affinityWhereInput], {
    nullable: true
  })
  AND?: Element_affinityWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Element_affinityWhereInput], {
    nullable: true
  })
  OR?: Element_affinityWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Element_affinityWhereInput], {
    nullable: true
  })
  NOT?: Element_affinityWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  element_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  affinity_element?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  affinity_type?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => ElementRelationFilter, {
    nullable: true
  })
  element_elementToelement_affinity_element_id?: ElementRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ElementRelationFilter, {
    nullable: true
  })
  element_elementToelement_affinity_affinity_element?: ElementRelationFilter | undefined;
}
