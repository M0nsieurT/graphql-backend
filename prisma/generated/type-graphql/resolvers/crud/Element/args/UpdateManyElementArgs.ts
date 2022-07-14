import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ElementUpdateManyMutationInput } from "../../../inputs/ElementUpdateManyMutationInput";
import { ElementWhereInput } from "../../../inputs/ElementWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyElementArgs {
  @TypeGraphQL.Field(_type => ElementUpdateManyMutationInput, {
    nullable: false
  })
  data!: ElementUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ElementWhereInput, {
    nullable: true
  })
  where?: ElementWhereInput | undefined;
}
