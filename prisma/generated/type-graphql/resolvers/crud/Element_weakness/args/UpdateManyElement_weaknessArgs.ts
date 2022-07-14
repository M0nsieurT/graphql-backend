import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Element_weaknessUpdateManyMutationInput } from "../../../inputs/Element_weaknessUpdateManyMutationInput";
import { Element_weaknessWhereInput } from "../../../inputs/Element_weaknessWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyElement_weaknessArgs {
  @TypeGraphQL.Field(_type => Element_weaknessUpdateManyMutationInput, {
    nullable: false
  })
  data!: Element_weaknessUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Element_weaknessWhereInput, {
    nullable: true
  })
  where?: Element_weaknessWhereInput | undefined;
}
