import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CardCreateManyCard_rankInput } from "../inputs/CardCreateManyCard_rankInput";

@TypeGraphQL.InputType("CardCreateManyCard_rankInputEnvelope", {
  isAbstract: true
})
export class CardCreateManyCard_rankInputEnvelope {
  @TypeGraphQL.Field(_type => [CardCreateManyCard_rankInput], {
    nullable: false
  })
  data!: CardCreateManyCard_rankInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
