import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlayerUpdateInput } from "../../../inputs/PlayerUpdateInput";
import { PlayerWhereUniqueInput } from "../../../inputs/PlayerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePlayerArgs {
  @TypeGraphQL.Field(_type => PlayerUpdateInput, {
    nullable: false
  })
  data!: PlayerUpdateInput;

  @TypeGraphQL.Field(_type => PlayerWhereUniqueInput, {
    nullable: false
  })
  where!: PlayerWhereUniqueInput;
}
