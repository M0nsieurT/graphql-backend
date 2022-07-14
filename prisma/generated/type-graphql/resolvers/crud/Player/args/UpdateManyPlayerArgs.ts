import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlayerUpdateManyMutationInput } from "../../../inputs/PlayerUpdateManyMutationInput";
import { PlayerWhereInput } from "../../../inputs/PlayerWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPlayerArgs {
  @TypeGraphQL.Field(_type => PlayerUpdateManyMutationInput, {
    nullable: false
  })
  data!: PlayerUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PlayerWhereInput, {
    nullable: true
  })
  where?: PlayerWhereInput | undefined;
}
