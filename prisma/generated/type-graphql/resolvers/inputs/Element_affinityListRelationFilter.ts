import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Element_affinityWhereInput } from "../inputs/Element_affinityWhereInput";

@TypeGraphQL.InputType("Element_affinityListRelationFilter", {
  isAbstract: true
})
export class Element_affinityListRelationFilter {
  @TypeGraphQL.Field(_type => Element_affinityWhereInput, {
    nullable: true
  })
  every?: Element_affinityWhereInput | undefined;

  @TypeGraphQL.Field(_type => Element_affinityWhereInput, {
    nullable: true
  })
  some?: Element_affinityWhereInput | undefined;

  @TypeGraphQL.Field(_type => Element_affinityWhereInput, {
    nullable: true
  })
  none?: Element_affinityWhereInput | undefined;
}
