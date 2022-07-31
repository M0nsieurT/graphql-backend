import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Element_affinityCreateInput } from "../../../inputs/Element_affinityCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneElement_affinityArgs {
  @TypeGraphQL.Field(_type => Element_affinityCreateInput, {
    nullable: false
  })
  data!: Element_affinityCreateInput;
}
