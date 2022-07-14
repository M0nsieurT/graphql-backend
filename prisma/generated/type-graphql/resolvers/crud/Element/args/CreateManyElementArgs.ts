import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ElementCreateManyInput } from "../../../inputs/ElementCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyElementArgs {
  @TypeGraphQL.Field(_type => [ElementCreateManyInput], {
    nullable: false
  })
  data!: ElementCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
