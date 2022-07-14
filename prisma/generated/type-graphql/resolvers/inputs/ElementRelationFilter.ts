import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ElementWhereInput } from "../inputs/ElementWhereInput";

@TypeGraphQL.InputType("ElementRelationFilter", {
  isAbstract: true
})
export class ElementRelationFilter {
  @TypeGraphQL.Field(_type => ElementWhereInput, {
    nullable: true
  })
  is?: ElementWhereInput | undefined;

  @TypeGraphQL.Field(_type => ElementWhereInput, {
    nullable: true
  })
  isNot?: ElementWhereInput | undefined;
}
