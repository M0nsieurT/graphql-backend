import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Element_affinityUpdateManyMutationInput } from "../../../inputs/Element_affinityUpdateManyMutationInput";
import { Element_affinityWhereInput } from "../../../inputs/Element_affinityWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyElement_affinityArgs {
  @TypeGraphQL.Field(_type => Element_affinityUpdateManyMutationInput, {
    nullable: false
  })
  data!: Element_affinityUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Element_affinityWhereInput, {
    nullable: true
  })
  where?: Element_affinityWhereInput | undefined;
}
