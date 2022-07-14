import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Element_weaknessCreateManyInput } from "../../../inputs/Element_weaknessCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyElement_weaknessArgs {
  @TypeGraphQL.Field(_type => [Element_weaknessCreateManyInput], {
    nullable: false
  })
  data!: Element_weaknessCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
