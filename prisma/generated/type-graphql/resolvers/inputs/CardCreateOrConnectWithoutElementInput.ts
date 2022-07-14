import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CardCreateWithoutElementInput } from "../inputs/CardCreateWithoutElementInput";
import { CardWhereUniqueInput } from "../inputs/CardWhereUniqueInput";

@TypeGraphQL.InputType("CardCreateOrConnectWithoutElementInput", {
  isAbstract: true
})
export class CardCreateOrConnectWithoutElementInput {
  @TypeGraphQL.Field(_type => CardWhereUniqueInput, {
    nullable: false
  })
  where!: CardWhereUniqueInput;

  @TypeGraphQL.Field(_type => CardCreateWithoutElementInput, {
    nullable: false
  })
  create!: CardCreateWithoutElementInput;
}
