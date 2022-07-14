import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ElementUpdateInput } from "../../../inputs/ElementUpdateInput";
import { ElementWhereUniqueInput } from "../../../inputs/ElementWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneElementArgs {
  @TypeGraphQL.Field(_type => ElementUpdateInput, {
    nullable: false
  })
  data!: ElementUpdateInput;

  @TypeGraphQL.Field(_type => ElementWhereUniqueInput, {
    nullable: false
  })
  where!: ElementWhereUniqueInput;
}
