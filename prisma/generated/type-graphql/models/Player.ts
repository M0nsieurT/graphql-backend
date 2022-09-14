import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Player_card } from "../models/Player_card";
import { PlayerCount } from "../resolvers/outputs/PlayerCount";

@TypeGraphQL.ObjectType("Player", {
  isAbstract: true
})
export class Player {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  player_card?: Player_card[];

  @TypeGraphQL.Field(_type => PlayerCount, {
    nullable: true
  })
  _count?: PlayerCount | null;
}
