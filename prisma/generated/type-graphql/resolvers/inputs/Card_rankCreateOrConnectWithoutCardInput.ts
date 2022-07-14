import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Card_rankCreateWithoutCardInput } from "../inputs/Card_rankCreateWithoutCardInput";
import { Card_rankWhereUniqueInput } from "../inputs/Card_rankWhereUniqueInput";

@TypeGraphQL.InputType("Card_rankCreateOrConnectWithoutCardInput", {
  isAbstract: true
})
export class Card_rankCreateOrConnectWithoutCardInput {
  @TypeGraphQL.Field(_type => Card_rankWhereUniqueInput, {
    nullable: false
  })
  where!: Card_rankWhereUniqueInput;

  @TypeGraphQL.Field(_type => Card_rankCreateWithoutCardInput, {
    nullable: false
  })
  create!: Card_rankCreateWithoutCardInput;
}
