import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Card_typeCreateWithoutCardInput } from "../inputs/Card_typeCreateWithoutCardInput";
import { Card_typeWhereUniqueInput } from "../inputs/Card_typeWhereUniqueInput";

@TypeGraphQL.InputType("Card_typeCreateOrConnectWithoutCardInput", {
  isAbstract: true
})
export class Card_typeCreateOrConnectWithoutCardInput {
  @TypeGraphQL.Field(_type => Card_typeWhereUniqueInput, {
    nullable: false
  })
  where!: Card_typeWhereUniqueInput;

  @TypeGraphQL.Field(_type => Card_typeCreateWithoutCardInput, {
    nullable: false
  })
  create!: Card_typeCreateWithoutCardInput;
}
