import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CardCreateWithoutElementInput } from "../inputs/CardCreateWithoutElementInput";
import { CardUpdateWithoutElementInput } from "../inputs/CardUpdateWithoutElementInput";
import { CardWhereUniqueInput } from "../inputs/CardWhereUniqueInput";

@TypeGraphQL.InputType("CardUpsertWithWhereUniqueWithoutElementInput", {
  isAbstract: true
})
export class CardUpsertWithWhereUniqueWithoutElementInput {
  @TypeGraphQL.Field(_type => CardWhereUniqueInput, {
    nullable: false
  })
  where!: CardWhereUniqueInput;

  @TypeGraphQL.Field(_type => CardUpdateWithoutElementInput, {
    nullable: false
  })
  update!: CardUpdateWithoutElementInput;

  @TypeGraphQL.Field(_type => CardCreateWithoutElementInput, {
    nullable: false
  })
  create!: CardCreateWithoutElementInput;
}
