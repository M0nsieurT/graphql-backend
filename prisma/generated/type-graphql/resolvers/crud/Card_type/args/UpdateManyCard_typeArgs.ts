import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Card_typeUpdateManyMutationInput } from "../../../inputs/Card_typeUpdateManyMutationInput";
import { Card_typeWhereInput } from "../../../inputs/Card_typeWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCard_typeArgs {
  @TypeGraphQL.Field(_type => Card_typeUpdateManyMutationInput, {
    nullable: false
  })
  data!: Card_typeUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Card_typeWhereInput, {
    nullable: true
  })
  where?: Card_typeWhereInput | undefined;
}
