import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Card_typeCreateOrConnectWithoutCardInput } from "../inputs/Card_typeCreateOrConnectWithoutCardInput";
import { Card_typeCreateWithoutCardInput } from "../inputs/Card_typeCreateWithoutCardInput";
import { Card_typeWhereUniqueInput } from "../inputs/Card_typeWhereUniqueInput";

@TypeGraphQL.InputType("Card_typeCreateNestedOneWithoutCardInput", {
  isAbstract: true
})
export class Card_typeCreateNestedOneWithoutCardInput {
  @TypeGraphQL.Field(_type => Card_typeCreateWithoutCardInput, {
    nullable: true
  })
  create?: Card_typeCreateWithoutCardInput | undefined;

  @TypeGraphQL.Field(_type => Card_typeCreateOrConnectWithoutCardInput, {
    nullable: true
  })
  connectOrCreate?: Card_typeCreateOrConnectWithoutCardInput | undefined;

  @TypeGraphQL.Field(_type => Card_typeWhereUniqueInput, {
    nullable: true
  })
  connect?: Card_typeWhereUniqueInput | undefined;
}
