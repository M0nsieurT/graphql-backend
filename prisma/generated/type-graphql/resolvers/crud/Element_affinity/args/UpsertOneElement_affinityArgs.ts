import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Element_affinityCreateInput } from "../../../inputs/Element_affinityCreateInput";
import { Element_affinityUpdateInput } from "../../../inputs/Element_affinityUpdateInput";
import { Element_affinityWhereUniqueInput } from "../../../inputs/Element_affinityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneElement_affinityArgs {
  @TypeGraphQL.Field(_type => Element_affinityWhereUniqueInput, {
    nullable: false
  })
  where!: Element_affinityWhereUniqueInput;

  @TypeGraphQL.Field(_type => Element_affinityCreateInput, {
    nullable: false
  })
  create!: Element_affinityCreateInput;

  @TypeGraphQL.Field(_type => Element_affinityUpdateInput, {
    nullable: false
  })
  update!: Element_affinityUpdateInput;
}
