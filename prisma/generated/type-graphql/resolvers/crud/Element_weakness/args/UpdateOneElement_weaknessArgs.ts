import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Element_weaknessUpdateInput } from "../../../inputs/Element_weaknessUpdateInput";
import { Element_weaknessWhereUniqueInput } from "../../../inputs/Element_weaknessWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneElement_weaknessArgs {
  @TypeGraphQL.Field(_type => Element_weaknessUpdateInput, {
    nullable: false
  })
  data!: Element_weaknessUpdateInput;

  @TypeGraphQL.Field(_type => Element_weaknessWhereUniqueInput, {
    nullable: false
  })
  where!: Element_weaknessWhereUniqueInput;
}
