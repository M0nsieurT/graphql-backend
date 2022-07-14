import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CardCreateOrConnectWithoutPlayer_cardInput } from "../inputs/CardCreateOrConnectWithoutPlayer_cardInput";
import { CardCreateWithoutPlayer_cardInput } from "../inputs/CardCreateWithoutPlayer_cardInput";
import { CardUpdateWithoutPlayer_cardInput } from "../inputs/CardUpdateWithoutPlayer_cardInput";
import { CardUpsertWithoutPlayer_cardInput } from "../inputs/CardUpsertWithoutPlayer_cardInput";
import { CardWhereUniqueInput } from "../inputs/CardWhereUniqueInput";

@TypeGraphQL.InputType("CardUpdateOneRequiredWithoutPlayer_cardNestedInput", {
  isAbstract: true
})
export class CardUpdateOneRequiredWithoutPlayer_cardNestedInput {
  @TypeGraphQL.Field(_type => CardCreateWithoutPlayer_cardInput, {
    nullable: true
  })
  create?: CardCreateWithoutPlayer_cardInput | undefined;

  @TypeGraphQL.Field(_type => CardCreateOrConnectWithoutPlayer_cardInput, {
    nullable: true
  })
  connectOrCreate?: CardCreateOrConnectWithoutPlayer_cardInput | undefined;

  @TypeGraphQL.Field(_type => CardUpsertWithoutPlayer_cardInput, {
    nullable: true
  })
  upsert?: CardUpsertWithoutPlayer_cardInput | undefined;

  @TypeGraphQL.Field(_type => CardWhereUniqueInput, {
    nullable: true
  })
  connect?: CardWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CardUpdateWithoutPlayer_cardInput, {
    nullable: true
  })
  update?: CardUpdateWithoutPlayer_cardInput | undefined;
}
