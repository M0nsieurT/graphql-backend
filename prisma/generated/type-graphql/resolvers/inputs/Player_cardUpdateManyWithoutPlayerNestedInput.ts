import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Player_cardCreateManyPlayerInputEnvelope } from "../inputs/Player_cardCreateManyPlayerInputEnvelope";
import { Player_cardCreateOrConnectWithoutPlayerInput } from "../inputs/Player_cardCreateOrConnectWithoutPlayerInput";
import { Player_cardCreateWithoutPlayerInput } from "../inputs/Player_cardCreateWithoutPlayerInput";
import { Player_cardScalarWhereInput } from "../inputs/Player_cardScalarWhereInput";
import { Player_cardUpdateManyWithWhereWithoutPlayerInput } from "../inputs/Player_cardUpdateManyWithWhereWithoutPlayerInput";
import { Player_cardUpdateWithWhereUniqueWithoutPlayerInput } from "../inputs/Player_cardUpdateWithWhereUniqueWithoutPlayerInput";
import { Player_cardUpsertWithWhereUniqueWithoutPlayerInput } from "../inputs/Player_cardUpsertWithWhereUniqueWithoutPlayerInput";
import { Player_cardWhereUniqueInput } from "../inputs/Player_cardWhereUniqueInput";

@TypeGraphQL.InputType("Player_cardUpdateManyWithoutPlayerNestedInput", {
  isAbstract: true
})
export class Player_cardUpdateManyWithoutPlayerNestedInput {
  @TypeGraphQL.Field(_type => [Player_cardCreateWithoutPlayerInput], {
    nullable: true
  })
  create?: Player_cardCreateWithoutPlayerInput[] | undefined;

  @TypeGraphQL.Field(_type => [Player_cardCreateOrConnectWithoutPlayerInput], {
    nullable: true
  })
  connectOrCreate?: Player_cardCreateOrConnectWithoutPlayerInput[] | undefined;

  @TypeGraphQL.Field(_type => [Player_cardUpsertWithWhereUniqueWithoutPlayerInput], {
    nullable: true
  })
  upsert?: Player_cardUpsertWithWhereUniqueWithoutPlayerInput[] | undefined;

  @TypeGraphQL.Field(_type => Player_cardCreateManyPlayerInputEnvelope, {
    nullable: true
  })
  createMany?: Player_cardCreateManyPlayerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Player_cardWhereUniqueInput], {
    nullable: true
  })
  set?: Player_cardWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Player_cardWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Player_cardWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Player_cardWhereUniqueInput], {
    nullable: true
  })
  delete?: Player_cardWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Player_cardWhereUniqueInput], {
    nullable: true
  })
  connect?: Player_cardWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Player_cardUpdateWithWhereUniqueWithoutPlayerInput], {
    nullable: true
  })
  update?: Player_cardUpdateWithWhereUniqueWithoutPlayerInput[] | undefined;

  @TypeGraphQL.Field(_type => [Player_cardUpdateManyWithWhereWithoutPlayerInput], {
    nullable: true
  })
  updateMany?: Player_cardUpdateManyWithWhereWithoutPlayerInput[] | undefined;

  @TypeGraphQL.Field(_type => [Player_cardScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Player_cardScalarWhereInput[] | undefined;
}
