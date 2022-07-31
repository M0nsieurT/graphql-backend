import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Element_affinityWhereUniqueInput } from "../../../inputs/Element_affinityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueElement_affinityArgs {
  @TypeGraphQL.Field(_type => Element_affinityWhereUniqueInput, {
    nullable: false
  })
  where!: Element_affinityWhereUniqueInput;
}
