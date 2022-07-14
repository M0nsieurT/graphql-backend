import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlayerCreateInput } from "../../../inputs/PlayerCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePlayerArgs {
  @TypeGraphQL.Field(_type => PlayerCreateInput, {
    nullable: false
  })
  data!: PlayerCreateInput;
}
