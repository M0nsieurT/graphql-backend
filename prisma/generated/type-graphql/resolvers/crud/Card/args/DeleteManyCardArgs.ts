import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CardWhereInput } from "../../../inputs/CardWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCardArgs {
  @TypeGraphQL.Field(_type => CardWhereInput, {
    nullable: true
  })
  where?: CardWhereInput | undefined;
}
