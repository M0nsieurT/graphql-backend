import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Card_rankWhereInput } from "../../../inputs/Card_rankWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCard_rankArgs {
  @TypeGraphQL.Field(_type => Card_rankWhereInput, {
    nullable: true
  })
  where?: Card_rankWhereInput | undefined;
}
