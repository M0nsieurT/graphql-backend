import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Element_weaknessWhereInput } from "../../../inputs/Element_weaknessWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyElement_weaknessArgs {
  @TypeGraphQL.Field(_type => Element_weaknessWhereInput, {
    nullable: true
  })
  where?: Element_weaknessWhereInput | undefined;
}
