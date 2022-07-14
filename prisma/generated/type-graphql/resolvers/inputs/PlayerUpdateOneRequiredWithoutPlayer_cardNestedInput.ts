import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlayerCreateOrConnectWithoutPlayer_cardInput } from "../inputs/PlayerCreateOrConnectWithoutPlayer_cardInput";
import { PlayerCreateWithoutPlayer_cardInput } from "../inputs/PlayerCreateWithoutPlayer_cardInput";
import { PlayerUpdateWithoutPlayer_cardInput } from "../inputs/PlayerUpdateWithoutPlayer_cardInput";
import { PlayerUpsertWithoutPlayer_cardInput } from "../inputs/PlayerUpsertWithoutPlayer_cardInput";
import { PlayerWhereUniqueInput } from "../inputs/PlayerWhereUniqueInput";

@TypeGraphQL.InputType("PlayerUpdateOneRequiredWithoutPlayer_cardNestedInput", {
  isAbstract: true
})
export class PlayerUpdateOneRequiredWithoutPlayer_cardNestedInput {
  @TypeGraphQL.Field(_type => PlayerCreateWithoutPlayer_cardInput, {
    nullable: true
  })
  create?: PlayerCreateWithoutPlayer_cardInput | undefined;

  @TypeGraphQL.Field(_type => PlayerCreateOrConnectWithoutPlayer_cardInput, {
    nullable: true
  })
  connectOrCreate?: PlayerCreateOrConnectWithoutPlayer_cardInput | undefined;

  @TypeGraphQL.Field(_type => PlayerUpsertWithoutPlayer_cardInput, {
    nullable: true
  })
  upsert?: PlayerUpsertWithoutPlayer_cardInput | undefined;

  @TypeGraphQL.Field(_type => PlayerWhereUniqueInput, {
    nullable: true
  })
  connect?: PlayerWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PlayerUpdateWithoutPlayer_cardInput, {
    nullable: true
  })
  update?: PlayerUpdateWithoutPlayer_cardInput | undefined;
}
