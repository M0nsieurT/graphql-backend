import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CardCreateWithoutCard_rankInput } from "../inputs/CardCreateWithoutCard_rankInput";
import { CardWhereUniqueInput } from "../inputs/CardWhereUniqueInput";

@TypeGraphQL.InputType("CardCreateOrConnectWithoutCard_rankInput", {
  isAbstract: true
})
export class CardCreateOrConnectWithoutCard_rankInput {
  @TypeGraphQL.Field(_type => CardWhereUniqueInput, {
    nullable: false
  })
  where!: CardWhereUniqueInput;

  @TypeGraphQL.Field(_type => CardCreateWithoutCard_rankInput, {
    nullable: false
  })
  create!: CardCreateWithoutCard_rankInput;
}
