import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Element_affinityWhereInput } from "../../../inputs/Element_affinityWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyElement_affinityArgs {
  @TypeGraphQL.Field(_type => Element_affinityWhereInput, {
    nullable: true
  })
  where?: Element_affinityWhereInput | undefined;
}
