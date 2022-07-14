import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CardCreateManyElementInput } from "../inputs/CardCreateManyElementInput";

@TypeGraphQL.InputType("CardCreateManyElementInputEnvelope", {
  isAbstract: true
})
export class CardCreateManyElementInputEnvelope {
  @TypeGraphQL.Field(_type => [CardCreateManyElementInput], {
    nullable: false
  })
  data!: CardCreateManyElementInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
