import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Card_typeCreateWithoutCardInput } from "../inputs/Card_typeCreateWithoutCardInput";
import { Card_typeUpdateWithoutCardInput } from "../inputs/Card_typeUpdateWithoutCardInput";

@TypeGraphQL.InputType("Card_typeUpsertWithoutCardInput", {
  isAbstract: true
})
export class Card_typeUpsertWithoutCardInput {
  @TypeGraphQL.Field(_type => Card_typeUpdateWithoutCardInput, {
    nullable: false
  })
  update!: Card_typeUpdateWithoutCardInput;

  @TypeGraphQL.Field(_type => Card_typeCreateWithoutCardInput, {
    nullable: false
  })
  create!: Card_typeCreateWithoutCardInput;
}
