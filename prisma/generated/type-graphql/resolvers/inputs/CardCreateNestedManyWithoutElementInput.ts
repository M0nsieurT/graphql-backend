import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CardCreateManyElementInputEnvelope } from "../inputs/CardCreateManyElementInputEnvelope";
import { CardCreateOrConnectWithoutElementInput } from "../inputs/CardCreateOrConnectWithoutElementInput";
import { CardCreateWithoutElementInput } from "../inputs/CardCreateWithoutElementInput";
import { CardWhereUniqueInput } from "../inputs/CardWhereUniqueInput";

@TypeGraphQL.InputType("CardCreateNestedManyWithoutElementInput", {
  isAbstract: true
})
export class CardCreateNestedManyWithoutElementInput {
  @TypeGraphQL.Field(_type => [CardCreateWithoutElementInput], {
    nullable: true
  })
  create?: CardCreateWithoutElementInput[] | undefined;

  @TypeGraphQL.Field(_type => [CardCreateOrConnectWithoutElementInput], {
    nullable: true
  })
  connectOrCreate?: CardCreateOrConnectWithoutElementInput[] | undefined;

  @TypeGraphQL.Field(_type => CardCreateManyElementInputEnvelope, {
    nullable: true
  })
  createMany?: CardCreateManyElementInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CardWhereUniqueInput], {
    nullable: true
  })
  connect?: CardWhereUniqueInput[] | undefined;
}
