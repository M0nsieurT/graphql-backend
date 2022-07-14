import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CardCreateWithoutCard_typeInput } from "../inputs/CardCreateWithoutCard_typeInput";
import { CardWhereUniqueInput } from "../inputs/CardWhereUniqueInput";

@TypeGraphQL.InputType("CardCreateOrConnectWithoutCard_typeInput", {
  isAbstract: true
})
export class CardCreateOrConnectWithoutCard_typeInput {
  @TypeGraphQL.Field(_type => CardWhereUniqueInput, {
    nullable: false
  })
  where!: CardWhereUniqueInput;

  @TypeGraphQL.Field(_type => CardCreateWithoutCard_typeInput, {
    nullable: false
  })
  create!: CardCreateWithoutCard_typeInput;
}
