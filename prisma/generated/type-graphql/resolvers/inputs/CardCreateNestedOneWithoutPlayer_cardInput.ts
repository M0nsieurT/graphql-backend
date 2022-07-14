import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CardCreateOrConnectWithoutPlayer_cardInput } from "../inputs/CardCreateOrConnectWithoutPlayer_cardInput";
import { CardCreateWithoutPlayer_cardInput } from "../inputs/CardCreateWithoutPlayer_cardInput";
import { CardWhereUniqueInput } from "../inputs/CardWhereUniqueInput";

@TypeGraphQL.InputType("CardCreateNestedOneWithoutPlayer_cardInput", {
  isAbstract: true
})
export class CardCreateNestedOneWithoutPlayer_cardInput {
  @TypeGraphQL.Field(_type => CardCreateWithoutPlayer_cardInput, {
    nullable: true
  })
  create?: CardCreateWithoutPlayer_cardInput | undefined;

  @TypeGraphQL.Field(_type => CardCreateOrConnectWithoutPlayer_cardInput, {
    nullable: true
  })
  connectOrCreate?: CardCreateOrConnectWithoutPlayer_cardInput | undefined;

  @TypeGraphQL.Field(_type => CardWhereUniqueInput, {
    nullable: true
  })
  connect?: CardWhereUniqueInput | undefined;
}
