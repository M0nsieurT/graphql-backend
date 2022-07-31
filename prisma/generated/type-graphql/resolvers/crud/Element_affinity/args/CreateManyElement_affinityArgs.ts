import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Element_affinityCreateManyInput } from "../../../inputs/Element_affinityCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyElement_affinityArgs {
  @TypeGraphQL.Field(_type => [Element_affinityCreateManyInput], {
    nullable: false
  })
  data!: Element_affinityCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
