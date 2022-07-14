import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ElementWhereInput } from "../../../inputs/ElementWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyElementArgs {
  @TypeGraphQL.Field(_type => ElementWhereInput, {
    nullable: true
  })
  where?: ElementWhereInput | undefined;
}
