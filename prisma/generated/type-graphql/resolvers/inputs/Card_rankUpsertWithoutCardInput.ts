import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Card_rankCreateWithoutCardInput } from "../inputs/Card_rankCreateWithoutCardInput";
import { Card_rankUpdateWithoutCardInput } from "../inputs/Card_rankUpdateWithoutCardInput";

@TypeGraphQL.InputType("Card_rankUpsertWithoutCardInput", {
  isAbstract: true
})
export class Card_rankUpsertWithoutCardInput {
  @TypeGraphQL.Field(_type => Card_rankUpdateWithoutCardInput, {
    nullable: false
  })
  update!: Card_rankUpdateWithoutCardInput;

  @TypeGraphQL.Field(_type => Card_rankCreateWithoutCardInput, {
    nullable: false
  })
  create!: Card_rankCreateWithoutCardInput;
}
