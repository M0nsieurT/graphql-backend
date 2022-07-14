import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlayerWhereUniqueInput } from "../../../inputs/PlayerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOnePlayerArgs {
  @TypeGraphQL.Field(_type => PlayerWhereUniqueInput, {
    nullable: false
  })
  where!: PlayerWhereUniqueInput;
}
