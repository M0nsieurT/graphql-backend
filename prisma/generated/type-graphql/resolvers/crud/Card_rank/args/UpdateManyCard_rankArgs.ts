import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Card_rankUpdateManyMutationInput } from "../../../inputs/Card_rankUpdateManyMutationInput";
import { Card_rankWhereInput } from "../../../inputs/Card_rankWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCard_rankArgs {
  @TypeGraphQL.Field(_type => Card_rankUpdateManyMutationInput, {
    nullable: false
  })
  data!: Card_rankUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Card_rankWhereInput, {
    nullable: true
  })
  where?: Card_rankWhereInput | undefined;
}
