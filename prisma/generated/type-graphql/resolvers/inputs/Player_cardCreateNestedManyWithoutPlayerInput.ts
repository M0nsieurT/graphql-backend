import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Player_cardCreateManyPlayerInputEnvelope } from "../inputs/Player_cardCreateManyPlayerInputEnvelope";
import { Player_cardCreateOrConnectWithoutPlayerInput } from "../inputs/Player_cardCreateOrConnectWithoutPlayerInput";
import { Player_cardCreateWithoutPlayerInput } from "../inputs/Player_cardCreateWithoutPlayerInput";
import { Player_cardWhereUniqueInput } from "../inputs/Player_cardWhereUniqueInput";

@TypeGraphQL.InputType("Player_cardCreateNestedManyWithoutPlayerInput", {
  isAbstract: true
})
export class Player_cardCreateNestedManyWithoutPlayerInput {
  @TypeGraphQL.Field(_type => [Player_cardCreateWithoutPlayerInput], {
    nullable: true
  })
  create?: Player_cardCreateWithoutPlayerInput[] | undefined;

  @TypeGraphQL.Field(_type => [Player_cardCreateOrConnectWithoutPlayerInput], {
    nullable: true
  })
  connectOrCreate?: Player_cardCreateOrConnectWithoutPlayerInput[] | undefined;

  @TypeGraphQL.Field(_type => Player_cardCreateManyPlayerInputEnvelope, {
    nullable: true
  })
  createMany?: Player_cardCreateManyPlayerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Player_cardWhereUniqueInput], {
    nullable: true
  })
  connect?: Player_cardWhereUniqueInput[] | undefined;
}
