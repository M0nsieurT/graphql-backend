import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CardCreateManyCard_typeInputEnvelope } from "../inputs/CardCreateManyCard_typeInputEnvelope";
import { CardCreateOrConnectWithoutCard_typeInput } from "../inputs/CardCreateOrConnectWithoutCard_typeInput";
import { CardCreateWithoutCard_typeInput } from "../inputs/CardCreateWithoutCard_typeInput";
import { CardWhereUniqueInput } from "../inputs/CardWhereUniqueInput";

@TypeGraphQL.InputType("CardCreateNestedManyWithoutCard_typeInput", {
  isAbstract: true
})
export class CardCreateNestedManyWithoutCard_typeInput {
  @TypeGraphQL.Field(_type => [CardCreateWithoutCard_typeInput], {
    nullable: true
  })
  create?: CardCreateWithoutCard_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => [CardCreateOrConnectWithoutCard_typeInput], {
    nullable: true
  })
  connectOrCreate?: CardCreateOrConnectWithoutCard_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => CardCreateManyCard_typeInputEnvelope, {
    nullable: true
  })
  createMany?: CardCreateManyCard_typeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CardWhereUniqueInput], {
    nullable: true
  })
  connect?: CardWhereUniqueInput[] | undefined;
}
