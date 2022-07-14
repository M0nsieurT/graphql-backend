import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlayerCreateOrConnectWithoutPlayer_cardInput } from "../inputs/PlayerCreateOrConnectWithoutPlayer_cardInput";
import { PlayerCreateWithoutPlayer_cardInput } from "../inputs/PlayerCreateWithoutPlayer_cardInput";
import { PlayerWhereUniqueInput } from "../inputs/PlayerWhereUniqueInput";

@TypeGraphQL.InputType("PlayerCreateNestedOneWithoutPlayer_cardInput", {
  isAbstract: true
})
export class PlayerCreateNestedOneWithoutPlayer_cardInput {
  @TypeGraphQL.Field(_type => PlayerCreateWithoutPlayer_cardInput, {
    nullable: true
  })
  create?: PlayerCreateWithoutPlayer_cardInput | undefined;

  @TypeGraphQL.Field(_type => PlayerCreateOrConnectWithoutPlayer_cardInput, {
    nullable: true
  })
  connectOrCreate?: PlayerCreateOrConnectWithoutPlayer_cardInput | undefined;

  @TypeGraphQL.Field(_type => PlayerWhereUniqueInput, {
    nullable: true
  })
  connect?: PlayerWhereUniqueInput | undefined;
}
