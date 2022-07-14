import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CardUpdateInput } from "../../../inputs/CardUpdateInput";
import { CardWhereUniqueInput } from "../../../inputs/CardWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneCardArgs {
  @TypeGraphQL.Field(_type => CardUpdateInput, {
    nullable: false
  })
  data!: CardUpdateInput;

  @TypeGraphQL.Field(_type => CardWhereUniqueInput, {
    nullable: false
  })
  where!: CardWhereUniqueInput;
}
