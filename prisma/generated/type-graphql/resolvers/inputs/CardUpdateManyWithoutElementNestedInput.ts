import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CardCreateManyElementInputEnvelope } from "../inputs/CardCreateManyElementInputEnvelope";
import { CardCreateOrConnectWithoutElementInput } from "../inputs/CardCreateOrConnectWithoutElementInput";
import { CardCreateWithoutElementInput } from "../inputs/CardCreateWithoutElementInput";
import { CardScalarWhereInput } from "../inputs/CardScalarWhereInput";
import { CardUpdateManyWithWhereWithoutElementInput } from "../inputs/CardUpdateManyWithWhereWithoutElementInput";
import { CardUpdateWithWhereUniqueWithoutElementInput } from "../inputs/CardUpdateWithWhereUniqueWithoutElementInput";
import { CardUpsertWithWhereUniqueWithoutElementInput } from "../inputs/CardUpsertWithWhereUniqueWithoutElementInput";
import { CardWhereUniqueInput } from "../inputs/CardWhereUniqueInput";

@TypeGraphQL.InputType("CardUpdateManyWithoutElementNestedInput", {
  isAbstract: true
})
export class CardUpdateManyWithoutElementNestedInput {
  @TypeGraphQL.Field(_type => [CardCreateWithoutElementInput], {
    nullable: true
  })
  create?: CardCreateWithoutElementInput[] | undefined;

  @TypeGraphQL.Field(_type => [CardCreateOrConnectWithoutElementInput], {
    nullable: true
  })
  connectOrCreate?: CardCreateOrConnectWithoutElementInput[] | undefined;

  @TypeGraphQL.Field(_type => [CardUpsertWithWhereUniqueWithoutElementInput], {
    nullable: true
  })
  upsert?: CardUpsertWithWhereUniqueWithoutElementInput[] | undefined;

  @TypeGraphQL.Field(_type => CardCreateManyElementInputEnvelope, {
    nullable: true
  })
  createMany?: CardCreateManyElementInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [CardUpdateWithWhereUniqueWithoutElementInput], {
    nullable: true
  })
  update?: CardUpdateWithWhereUniqueWithoutElementInput[] | undefined;

  @TypeGraphQL.Field(_type => [CardUpdateManyWithWhereWithoutElementInput], {
    nullable: true
  })
  updateMany?: CardUpdateManyWithWhereWithoutElementInput[] | undefined;

  @TypeGraphQL.Field(_type => [CardScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CardScalarWhereInput[] | undefined;
}
