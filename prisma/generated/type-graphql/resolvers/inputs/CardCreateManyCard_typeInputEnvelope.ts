import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CardCreateManyCard_typeInput } from "../inputs/CardCreateManyCard_typeInput";

@TypeGraphQL.InputType("CardCreateManyCard_typeInputEnvelope", {
  isAbstract: true
})
export class CardCreateManyCard_typeInputEnvelope {
  @TypeGraphQL.Field(_type => [CardCreateManyCard_typeInput], {
    nullable: false
  })
  data!: CardCreateManyCard_typeInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
