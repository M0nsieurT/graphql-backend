import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Element_weaknessCreateInput } from "../../../inputs/Element_weaknessCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneElement_weaknessArgs {
  @TypeGraphQL.Field(_type => Element_weaknessCreateInput, {
    nullable: false
  })
  data!: Element_weaknessCreateInput;
}
