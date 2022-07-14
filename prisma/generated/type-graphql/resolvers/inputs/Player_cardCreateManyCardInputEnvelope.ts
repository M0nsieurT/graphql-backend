import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Player_cardCreateManyCardInput } from "../inputs/Player_cardCreateManyCardInput";

@TypeGraphQL.InputType("Player_cardCreateManyCardInputEnvelope", {
  isAbstract: true
})
export class Player_cardCreateManyCardInputEnvelope {
  @TypeGraphQL.Field(_type => [Player_cardCreateManyCardInput], {
    nullable: false
  })
  data!: Player_cardCreateManyCardInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
