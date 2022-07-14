import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CardCreateManyCard_rankInputEnvelope } from "../inputs/CardCreateManyCard_rankInputEnvelope";
import { CardCreateOrConnectWithoutCard_rankInput } from "../inputs/CardCreateOrConnectWithoutCard_rankInput";
import { CardCreateWithoutCard_rankInput } from "../inputs/CardCreateWithoutCard_rankInput";
import { CardScalarWhereInput } from "../inputs/CardScalarWhereInput";
import { CardUpdateManyWithWhereWithoutCard_rankInput } from "../inputs/CardUpdateManyWithWhereWithoutCard_rankInput";
import { CardUpdateWithWhereUniqueWithoutCard_rankInput } from "../inputs/CardUpdateWithWhereUniqueWithoutCard_rankInput";
import { CardUpsertWithWhereUniqueWithoutCard_rankInput } from "../inputs/CardUpsertWithWhereUniqueWithoutCard_rankInput";
import { CardWhereUniqueInput } from "../inputs/CardWhereUniqueInput";

@TypeGraphQL.InputType("CardUpdateManyWithoutCard_rankNestedInput", {
  isAbstract: true
})
export class CardUpdateManyWithoutCard_rankNestedInput {
  @TypeGraphQL.Field(_type => [CardCreateWithoutCard_rankInput], {
    nullable: true
  })
  create?: CardCreateWithoutCard_rankInput[] | undefined;

  @TypeGraphQL.Field(_type => [CardCreateOrConnectWithoutCard_rankInput], {
    nullable: true
  })
  connectOrCreate?: CardCreateOrConnectWithoutCard_rankInput[] | undefined;

  @TypeGraphQL.Field(_type => [CardUpsertWithWhereUniqueWithoutCard_rankInput], {
    nullable: true
  })
  upsert?: CardUpsertWithWhereUniqueWithoutCard_rankInput[] | undefined;

  @TypeGraphQL.Field(_type => CardCreateManyCard_rankInputEnvelope, {
    nullable: true
  })
  createMany?: CardCreateManyCard_rankInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CardWhereUniqueInput], {
    nullable: true
  })
  set?: CardWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CardWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CardWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CardWhereUniqueInput], {
    nullable: true
  })
  delete?: CardWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CardWhereUniqueInput], {
    nullable: true
  })
  connect?: CardWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CardUpdateWithWhereUniqueWithoutCard_rankInput], {
    nullable: true
  })
  update?: CardUpdateWithWhereUniqueWithoutCard_rankInput[] | undefined;

  @TypeGraphQL.Field(_type => [CardUpdateManyWithWhereWithoutCard_rankInput], {
    nullable: true
  })
  updateMany?: CardUpdateManyWithWhereWithoutCard_rankInput[] | undefined;

  @TypeGraphQL.Field(_type => [CardScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CardScalarWhereInput[] | undefined;
}
