import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Element_weaknessWhereUniqueInput } from "../../../inputs/Element_weaknessWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneElement_weaknessArgs {
  @TypeGraphQL.Field(_type => Element_weaknessWhereUniqueInput, {
    nullable: false
  })
  where!: Element_weaknessWhereUniqueInput;
}
