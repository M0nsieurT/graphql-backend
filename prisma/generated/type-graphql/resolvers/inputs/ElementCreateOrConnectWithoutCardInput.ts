import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ElementCreateWithoutCardInput } from "../inputs/ElementCreateWithoutCardInput";
import { ElementWhereUniqueInput } from "../inputs/ElementWhereUniqueInput";

@TypeGraphQL.InputType("ElementCreateOrConnectWithoutCardInput", {
  isAbstract: true
})
export class ElementCreateOrConnectWithoutCardInput {
  @TypeGraphQL.Field(_type => ElementWhereUniqueInput, {
    nullable: false
  })
  where!: ElementWhereUniqueInput;

  @TypeGraphQL.Field(_type => ElementCreateWithoutCardInput, {
    nullable: false
  })
  create!: ElementCreateWithoutCardInput;
}
