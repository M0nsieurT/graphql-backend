import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CardScalarWhereInput } from "../inputs/CardScalarWhereInput";
import { CardUpdateManyMutationInput } from "../inputs/CardUpdateManyMutationInput";

@TypeGraphQL.InputType("CardUpdateManyWithWhereWithoutCard_typeInput", {
  isAbstract: true
})
export class CardUpdateManyWithWhereWithoutCard_typeInput {
  @TypeGraphQL.Field(_type => CardScalarWhereInput, {
    nullable: false
  })
  where!: CardScalarWhereInput;

  @TypeGraphQL.Field(_type => CardUpdateManyMutationInput, {
    nullable: false
  })
  data!: CardUpdateManyMutationInput;
}
