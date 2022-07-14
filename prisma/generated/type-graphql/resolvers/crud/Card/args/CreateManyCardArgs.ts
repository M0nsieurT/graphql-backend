import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CardCreateManyInput } from "../../../inputs/CardCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCardArgs {
  @TypeGraphQL.Field(_type => [CardCreateManyInput], {
    nullable: false
  })
  data!: CardCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
