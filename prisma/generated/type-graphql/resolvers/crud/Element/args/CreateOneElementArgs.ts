import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ElementCreateInput } from "../../../inputs/ElementCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneElementArgs {
  @TypeGraphQL.Field(_type => ElementCreateInput, {
    nullable: false
  })
  data!: ElementCreateInput;
}
