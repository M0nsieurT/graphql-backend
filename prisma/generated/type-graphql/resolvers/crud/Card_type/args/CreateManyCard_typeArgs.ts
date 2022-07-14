import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Card_typeCreateManyInput } from "../../../inputs/Card_typeCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCard_typeArgs {
  @TypeGraphQL.Field(_type => [Card_typeCreateManyInput], {
    nullable: false
  })
  data!: Card_typeCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
