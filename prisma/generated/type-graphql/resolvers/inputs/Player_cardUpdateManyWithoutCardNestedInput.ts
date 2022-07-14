import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Player_cardCreateManyCardInputEnvelope } from "../inputs/Player_cardCreateManyCardInputEnvelope";
import { Player_cardCreateOrConnectWithoutCardInput } from "../inputs/Player_cardCreateOrConnectWithoutCardInput";
import { Player_cardCreateWithoutCardInput } from "../inputs/Player_cardCreateWithoutCardInput";
import { Player_cardScalarWhereInput } from "../inputs/Player_cardScalarWhereInput";
import { Player_cardUpdateManyWithWhereWithoutCardInput } from "../inputs/Player_cardUpdateManyWithWhereWithoutCardInput";
import { Player_cardUpdateWithWhereUniqueWithoutCardInput } from "../inputs/Player_cardUpdateWithWhereUniqueWithoutCardInput";
import { Player_cardUpsertWithWhereUniqueWithoutCardInput } from "../inputs/Player_cardUpsertWithWhereUniqueWithoutCardInput";
import { Player_cardWhereUniqueInput } from "../inputs/Player_cardWhereUniqueInput";

@TypeGraphQL.InputType("Player_cardUpdateManyWithoutCardNestedInput", {
  isAbstract: true
})
export class Player_cardUpdateManyWithoutCardNestedInput {
  @TypeGraphQL.Field(_type => [Player_cardCreateWithoutCardInput], {
    nullable: true
  })
  create?: Player_cardCreateWithoutCardInput[] | undefined;

  @TypeGraphQL.Field(_type => [Player_cardCreateOrConnectWithoutCardInput], {
    nullable: true
  })
  connectOrCreate?: Player_cardCreateOrConnectWithoutCardInput[] | undefined;

  @TypeGraphQL.Field(_type => [Player_cardUpsertWithWhereUniqueWithoutCardInput], {
    nullable: true
  })
  upsert?: Player_cardUpsertWithWhereUniqueWithoutCardInput[] | undefined;

  @TypeGraphQL.Field(_type => Player_cardCreateManyCardInputEnvelope, {
    nullable: true
  })
  createMany?: Player_cardCreateManyCardInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [Player_cardUpdateWithWhereUniqueWithoutCardInput], {
    nullable: true
  })
  update?: Player_cardUpdateWithWhereUniqueWithoutCardInput[] | undefined;

  @TypeGraphQL.Field(_type => [Player_cardUpdateManyWithWhereWithoutCardInput], {
    nullable: true
  })
  updateMany?: Player_cardUpdateManyWithWhereWithoutCardInput[] | undefined;

  @TypeGraphQL.Field(_type => [Player_cardScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Player_cardScalarWhereInput[] | undefined;
}
