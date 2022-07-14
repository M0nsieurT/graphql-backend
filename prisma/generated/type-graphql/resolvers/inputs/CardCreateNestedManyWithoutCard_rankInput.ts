import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CardCreateManyCard_rankInputEnvelope } from "../inputs/CardCreateManyCard_rankInputEnvelope";
import { CardCreateOrConnectWithoutCard_rankInput } from "../inputs/CardCreateOrConnectWithoutCard_rankInput";
import { CardCreateWithoutCard_rankInput } from "../inputs/CardCreateWithoutCard_rankInput";
import { CardWhereUniqueInput } from "../inputs/CardWhereUniqueInput";

@TypeGraphQL.InputType("CardCreateNestedManyWithoutCard_rankInput", {
  isAbstract: true
})
export class CardCreateNestedManyWithoutCard_rankInput {
  @TypeGraphQL.Field(_type => [CardCreateWithoutCard_rankInput], {
    nullable: true
  })
  create?: CardCreateWithoutCard_rankInput[] | undefined;

  @TypeGraphQL.Field(_type => [CardCreateOrConnectWithoutCard_rankInput], {
    nullable: true
  })
  connectOrCreate?: CardCreateOrConnectWithoutCard_rankInput[] | undefined;

  @TypeGraphQL.Field(_type => CardCreateManyCard_rankInputEnvelope, {
    nullable: true
  })
  createMany?: CardCreateManyCard_rankInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CardWhereUniqueInput], {
    nullable: true
  })
  connect?: CardWhereUniqueInput[] | undefined;
}
