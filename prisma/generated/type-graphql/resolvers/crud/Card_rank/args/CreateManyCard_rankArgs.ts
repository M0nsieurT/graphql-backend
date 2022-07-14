import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Card_rankCreateManyInput } from "../../../inputs/Card_rankCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCard_rankArgs {
  @TypeGraphQL.Field(_type => [Card_rankCreateManyInput], {
    nullable: false
  })
  data!: Card_rankCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
