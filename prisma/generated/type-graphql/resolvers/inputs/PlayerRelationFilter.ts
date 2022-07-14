import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlayerWhereInput } from "../inputs/PlayerWhereInput";

@TypeGraphQL.InputType("PlayerRelationFilter", {
  isAbstract: true
})
export class PlayerRelationFilter {
  @TypeGraphQL.Field(_type => PlayerWhereInput, {
    nullable: true
  })
  is?: PlayerWhereInput | undefined;

  @TypeGraphQL.Field(_type => PlayerWhereInput, {
    nullable: true
  })
  isNot?: PlayerWhereInput | undefined;
}
