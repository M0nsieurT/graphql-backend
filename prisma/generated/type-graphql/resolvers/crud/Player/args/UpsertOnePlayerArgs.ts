import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlayerCreateInput } from "../../../inputs/PlayerCreateInput";
import { PlayerUpdateInput } from "../../../inputs/PlayerUpdateInput";
import { PlayerWhereUniqueInput } from "../../../inputs/PlayerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePlayerArgs {
  @TypeGraphQL.Field(_type => PlayerWhereUniqueInput, {
    nullable: false
  })
  where!: PlayerWhereUniqueInput;

  @TypeGraphQL.Field(_type => PlayerCreateInput, {
    nullable: false
  })
  create!: PlayerCreateInput;

  @TypeGraphQL.Field(_type => PlayerUpdateInput, {
    nullable: false
  })
  update!: PlayerUpdateInput;
}
