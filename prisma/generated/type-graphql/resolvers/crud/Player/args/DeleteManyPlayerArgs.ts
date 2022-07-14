import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlayerWhereInput } from "../../../inputs/PlayerWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPlayerArgs {
  @TypeGraphQL.Field(_type => PlayerWhereInput, {
    nullable: true
  })
  where?: PlayerWhereInput | undefined;
}
