import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("Element_affinityScalarWhereInput", {
  isAbstract: true
})
export class Element_affinityScalarWhereInput {
  @TypeGraphQL.Field(_type => [Element_affinityScalarWhereInput], {
    nullable: true
  })
  AND?: Element_affinityScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Element_affinityScalarWhereInput], {
    nullable: true
  })
  OR?: Element_affinityScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Element_affinityScalarWhereInput], {
    nullable: true
  })
  NOT?: Element_affinityScalarWhereInput[] | undefined;

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
}
