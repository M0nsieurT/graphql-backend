import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Card_rankCreateNestedOneWithoutCardInput } from "../inputs/Card_rankCreateNestedOneWithoutCardInput";
import { Card_typeCreateNestedOneWithoutCardInput } from "../inputs/Card_typeCreateNestedOneWithoutCardInput";
import { Player_cardCreateNestedManyWithoutCardInput } from "../inputs/Player_cardCreateNestedManyWithoutCardInput";

@TypeGraphQL.InputType("CardCreateWithoutElementInput", {
  isAbstract: true
})
export class CardCreateWithoutElementInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  power!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  max_chain?: number | undefined;

  @TypeGraphQL.Field(_type => Card_typeCreateNestedOneWithoutCardInput, {
    nullable: true
  })
  card_type?: Card_typeCreateNestedOneWithoutCardInput | undefined;

  @TypeGraphQL.Field(_type => Card_rankCreateNestedOneWithoutCardInput, {
    nullable: true
  })
  card_rank?: Card_rankCreateNestedOneWithoutCardInput | undefined;

  @TypeGraphQL.Field(_type => Player_cardCreateNestedManyWithoutCardInput, {
    nullable: true
  })
  player_card?: Player_cardCreateNestedManyWithoutCardInput | undefined;
}
