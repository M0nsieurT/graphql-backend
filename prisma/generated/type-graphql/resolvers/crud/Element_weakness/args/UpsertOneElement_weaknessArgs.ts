import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Element_weaknessCreateInput } from "../../../inputs/Element_weaknessCreateInput";
import { Element_weaknessUpdateInput } from "../../../inputs/Element_weaknessUpdateInput";
import { Element_weaknessWhereUniqueInput } from "../../../inputs/Element_weaknessWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneElement_weaknessArgs {
  @TypeGraphQL.Field(_type => Element_weaknessWhereUniqueInput, {
    nullable: false
  })
  where!: Element_weaknessWhereUniqueInput;

  @TypeGraphQL.Field(_type => Element_weaknessCreateInput, {
    nullable: false
  })
  create!: Element_weaknessCreateInput;

  @TypeGraphQL.Field(_type => Element_weaknessUpdateInput, {
    nullable: false
  })
  update!: Element_weaknessUpdateInput;
}
