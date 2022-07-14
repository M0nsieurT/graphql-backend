import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CardCreateNestedManyWithoutCard_rankInput } from "../inputs/CardCreateNestedManyWithoutCard_rankInput";

@TypeGraphQL.InputType("Card_rankCreateInput", {
  isAbstract: true
})
export class Card_rankCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  code!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => CardCreateNestedManyWithoutCard_rankInput, {
    nullable: true
  })
  card?: CardCreateNestedManyWithoutCard_rankInput | undefined;
}
