import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Element_weaknessWhereInput } from "../inputs/Element_weaknessWhereInput";

@TypeGraphQL.InputType("Element_weaknessListRelationFilter", {
  isAbstract: true
})
export class Element_weaknessListRelationFilter {
  @TypeGraphQL.Field(_type => Element_weaknessWhereInput, {
    nullable: true
  })
  every?: Element_weaknessWhereInput | undefined;

  @TypeGraphQL.Field(_type => Element_weaknessWhereInput, {
    nullable: true
  })
  some?: Element_weaknessWhereInput | undefined;

  @TypeGraphQL.Field(_type => Element_weaknessWhereInput, {
    nullable: true
  })
  none?: Element_weaknessWhereInput | undefined;
}
