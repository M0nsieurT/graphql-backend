import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlayerCreateManyInput } from "../../../inputs/PlayerCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPlayerArgs {
  @TypeGraphQL.Field(_type => [PlayerCreateManyInput], {
    nullable: false
  })
  data!: PlayerCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
