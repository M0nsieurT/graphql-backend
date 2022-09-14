import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { Player_cardListRelationFilter } from "../inputs/Player_cardListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("PlayerWhereInput", {
  isAbstract: true
})
export class PlayerWhereInput {
  @TypeGraphQL.Field(_type => [PlayerWhereInput], {
    nullable: true
  })
  AND?: PlayerWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlayerWhereInput], {
    nullable: true
  })
  OR?: PlayerWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlayerWhereInput], {
    nullable: true
  })
  NOT?: PlayerWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  password?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => Player_cardListRelationFilter, {
    nullable: true
  })
  player_card?: Player_cardListRelationFilter | undefined;
}
