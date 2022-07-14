import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ElementCreateWithoutCardInput } from "../inputs/ElementCreateWithoutCardInput";
import { ElementUpdateWithoutCardInput } from "../inputs/ElementUpdateWithoutCardInput";

@TypeGraphQL.InputType("ElementUpsertWithoutCardInput", {
  isAbstract: true
})
export class ElementUpsertWithoutCardInput {
  @TypeGraphQL.Field(_type => ElementUpdateWithoutCardInput, {
    nullable: false
  })
  update!: ElementUpdateWithoutCardInput;

  @TypeGraphQL.Field(_type => ElementCreateWithoutCardInput, {
    nullable: false
  })
  create!: ElementCreateWithoutCardInput;
}
