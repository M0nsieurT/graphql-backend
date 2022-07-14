import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CardCreateNestedManyWithoutCard_typeInput } from "../inputs/CardCreateNestedManyWithoutCard_typeInput";

@TypeGraphQL.InputType("Card_typeCreateInput", {
  isAbstract: true
})
export class Card_typeCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => CardCreateNestedManyWithoutCard_typeInput, {
    nullable: true
  })
  card?: CardCreateNestedManyWithoutCard_typeInput | undefined;
}
