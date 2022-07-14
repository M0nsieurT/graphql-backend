import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Card_typeUpdateInput } from "../../../inputs/Card_typeUpdateInput";
import { Card_typeWhereUniqueInput } from "../../../inputs/Card_typeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneCard_typeArgs {
  @TypeGraphQL.Field(_type => Card_typeUpdateInput, {
    nullable: false
  })
  data!: Card_typeUpdateInput;

  @TypeGraphQL.Field(_type => Card_typeWhereUniqueInput, {
    nullable: false
  })
  where!: Card_typeWhereUniqueInput;
}
