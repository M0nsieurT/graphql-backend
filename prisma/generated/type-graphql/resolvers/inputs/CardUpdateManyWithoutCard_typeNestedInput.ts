import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CardCreateManyCard_typeInputEnvelope } from "../inputs/CardCreateManyCard_typeInputEnvelope";
import { CardCreateOrConnectWithoutCard_typeInput } from "../inputs/CardCreateOrConnectWithoutCard_typeInput";
import { CardCreateWithoutCard_typeInput } from "../inputs/CardCreateWithoutCard_typeInput";
import { CardScalarWhereInput } from "../inputs/CardScalarWhereInput";
import { CardUpdateManyWithWhereWithoutCard_typeInput } from "../inputs/CardUpdateManyWithWhereWithoutCard_typeInput";
import { CardUpdateWithWhereUniqueWithoutCard_typeInput } from "../inputs/CardUpdateWithWhereUniqueWithoutCard_typeInput";
import { CardUpsertWithWhereUniqueWithoutCard_typeInput } from "../inputs/CardUpsertWithWhereUniqueWithoutCard_typeInput";
import { CardWhereUniqueInput } from "../inputs/CardWhereUniqueInput";

@TypeGraphQL.InputType("CardUpdateManyWithoutCard_typeNestedInput", {
  isAbstract: true
})
export class CardUpdateManyWithoutCard_typeNestedInput {
  @TypeGraphQL.Field(_type => [CardCreateWithoutCard_typeInput], {
    nullable: true
  })
  create?: CardCreateWithoutCard_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => [CardCreateOrConnectWithoutCard_typeInput], {
    nullable: true
  })
  connectOrCreate?: CardCreateOrConnectWithoutCard_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => [CardUpsertWithWhereUniqueWithoutCard_typeInput], {
    nullable: true
  })
  upsert?: CardUpsertWithWhereUniqueWithoutCard_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => CardCreateManyCard_typeInputEnvelope, {
    nullable: true
  })
  createMany?: CardCreateManyCard_typeInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [CardUpdateWithWhereUniqueWithoutCard_typeInput], {
    nullable: true
  })
  update?: CardUpdateWithWhereUniqueWithoutCard_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => [CardUpdateManyWithWhereWithoutCard_typeInput], {
    nullable: true
  })
  updateMany?: CardUpdateManyWithWhereWithoutCard_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => [CardScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CardScalarWhereInput[] | undefined;
}
