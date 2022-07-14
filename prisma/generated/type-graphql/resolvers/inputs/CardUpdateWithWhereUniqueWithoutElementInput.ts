import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CardUpdateWithoutElementInput } from "../inputs/CardUpdateWithoutElementInput";
import { CardWhereUniqueInput } from "../inputs/CardWhereUniqueInput";

@TypeGraphQL.InputType("CardUpdateWithWhereUniqueWithoutElementInput", {
  isAbstract: true
})
export class CardUpdateWithWhereUniqueWithoutElementInput {
  @TypeGraphQL.Field(_type => CardWhereUniqueInput, {
    nullable: false
  })
  where!: CardWhereUniqueInput;

  @TypeGraphQL.Field(_type => CardUpdateWithoutElementInput, {
    nullable: false
  })
  data!: CardUpdateWithoutElementInput;
}
