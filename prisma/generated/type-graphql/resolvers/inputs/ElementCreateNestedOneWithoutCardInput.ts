import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ElementCreateOrConnectWithoutCardInput } from "../inputs/ElementCreateOrConnectWithoutCardInput";
import { ElementCreateWithoutCardInput } from "../inputs/ElementCreateWithoutCardInput";
import { ElementWhereUniqueInput } from "../inputs/ElementWhereUniqueInput";

@TypeGraphQL.InputType("ElementCreateNestedOneWithoutCardInput", {
  isAbstract: true
})
export class ElementCreateNestedOneWithoutCardInput {
  @TypeGraphQL.Field(_type => ElementCreateWithoutCardInput, {
    nullable: true
  })
  create?: ElementCreateWithoutCardInput | undefined;

  @TypeGraphQL.Field(_type => ElementCreateOrConnectWithoutCardInput, {
    nullable: true
  })
  connectOrCreate?: ElementCreateOrConnectWithoutCardInput | undefined;

  @TypeGraphQL.Field(_type => ElementWhereUniqueInput, {
    nullable: true
  })
  connect?: ElementWhereUniqueInput | undefined;
}
