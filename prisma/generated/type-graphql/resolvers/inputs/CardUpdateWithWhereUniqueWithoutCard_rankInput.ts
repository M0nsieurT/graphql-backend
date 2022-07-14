import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CardUpdateWithoutCard_rankInput } from "../inputs/CardUpdateWithoutCard_rankInput";
import { CardWhereUniqueInput } from "../inputs/CardWhereUniqueInput";

@TypeGraphQL.InputType("CardUpdateWithWhereUniqueWithoutCard_rankInput", {
  isAbstract: true
})
export class CardUpdateWithWhereUniqueWithoutCard_rankInput {
  @TypeGraphQL.Field(_type => CardWhereUniqueInput, {
    nullable: false
  })
  where!: CardWhereUniqueInput;

  @TypeGraphQL.Field(_type => CardUpdateWithoutCard_rankInput, {
    nullable: false
  })
  data!: CardUpdateWithoutCard_rankInput;
}
