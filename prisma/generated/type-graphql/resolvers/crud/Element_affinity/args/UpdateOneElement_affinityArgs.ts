import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Element_affinityUpdateInput } from "../../../inputs/Element_affinityUpdateInput";
import { Element_affinityWhereUniqueInput } from "../../../inputs/Element_affinityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneElement_affinityArgs {
  @TypeGraphQL.Field(_type => Element_affinityUpdateInput, {
    nullable: false
  })
  data!: Element_affinityUpdateInput;

  @TypeGraphQL.Field(_type => Element_affinityWhereUniqueInput, {
    nullable: false
  })
  where!: Element_affinityWhereUniqueInput;
}
