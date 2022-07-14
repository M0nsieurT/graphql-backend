import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CardCreateWithoutCard_typeInput } from "../inputs/CardCreateWithoutCard_typeInput";
import { CardUpdateWithoutCard_typeInput } from "../inputs/CardUpdateWithoutCard_typeInput";
import { CardWhereUniqueInput } from "../inputs/CardWhereUniqueInput";

@TypeGraphQL.InputType("CardUpsertWithWhereUniqueWithoutCard_typeInput", {
  isAbstract: true
})
export class CardUpsertWithWhereUniqueWithoutCard_typeInput {
  @TypeGraphQL.Field(_type => CardWhereUniqueInput, {
    nullable: false
  })
  where!: CardWhereUniqueInput;

  @TypeGraphQL.Field(_type => CardUpdateWithoutCard_typeInput, {
    nullable: false
  })
  update!: CardUpdateWithoutCard_typeInput;

  @TypeGraphQL.Field(_type => CardCreateWithoutCard_typeInput, {
    nullable: false
  })
  create!: CardCreateWithoutCard_typeInput;
}
