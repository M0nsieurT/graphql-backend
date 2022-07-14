import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("Player_cardScalarWhereInput", {
  isAbstract: true
})
export class Player_cardScalarWhereInput {
  @TypeGraphQL.Field(_type => [Player_cardScalarWhereInput], {
    nullable: true
  })
  AND?: Player_cardScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Player_cardScalarWhereInput], {
    nullable: true
  })
  OR?: Player_cardScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Player_cardScalarWhereInput], {
    nullable: true
  })
  NOT?: Player_cardScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  card_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  player_id?: IntFilter | undefined;
}
