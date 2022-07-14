import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Player_cardCreateManyCardInputEnvelope } from "../inputs/Player_cardCreateManyCardInputEnvelope";
import { Player_cardCreateOrConnectWithoutCardInput } from "../inputs/Player_cardCreateOrConnectWithoutCardInput";
import { Player_cardCreateWithoutCardInput } from "../inputs/Player_cardCreateWithoutCardInput";
import { Player_cardWhereUniqueInput } from "../inputs/Player_cardWhereUniqueInput";

@TypeGraphQL.InputType("Player_cardCreateNestedManyWithoutCardInput", {
  isAbstract: true
})
export class Player_cardCreateNestedManyWithoutCardInput {
  @TypeGraphQL.Field(_type => [Player_cardCreateWithoutCardInput], {
    nullable: true
  })
  create?: Player_cardCreateWithoutCardInput[] | undefined;

  @TypeGraphQL.Field(_type => [Player_cardCreateOrConnectWithoutCardInput], {
    nullable: true
  })
  connectOrCreate?: Player_cardCreateOrConnectWithoutCardInput[] | undefined;

  @TypeGraphQL.Field(_type => Player_cardCreateManyCardInputEnvelope, {
    nullable: true
  })
  createMany?: Player_cardCreateManyCardInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Player_cardWhereUniqueInput], {
    nullable: true
  })
  connect?: Player_cardWhereUniqueInput[] | undefined;
}
