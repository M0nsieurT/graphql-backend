import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CardUpdateWithoutCard_typeInput } from "../inputs/CardUpdateWithoutCard_typeInput";
import { CardWhereUniqueInput } from "../inputs/CardWhereUniqueInput";

@TypeGraphQL.InputType("CardUpdateWithWhereUniqueWithoutCard_typeInput", {
  isAbstract: true
})
export class CardUpdateWithWhereUniqueWithoutCard_typeInput {
  @TypeGraphQL.Field(_type => CardWhereUniqueInput, {
    nullable: false
  })
  where!: CardWhereUniqueInput;

  @TypeGraphQL.Field(_type => CardUpdateWithoutCard_typeInput, {
    nullable: false
  })
  data!: CardUpdateWithoutCard_typeInput;
}
