import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ElementOrderByWithRelationInput } from "../../../inputs/ElementOrderByWithRelationInput";
import { ElementWhereInput } from "../../../inputs/ElementWhereInput";
import { ElementWhereUniqueInput } from "../../../inputs/ElementWhereUniqueInput";
import { ElementScalarFieldEnum } from "../../../../enums/ElementScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstElementArgs {
  @TypeGraphQL.Field(_type => ElementWhereInput, {
    nullable: true
  })
  where?: ElementWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ElementOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ElementOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ElementWhereUniqueInput, {
    nullable: true
  })
  cursor?: ElementWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ElementScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name"> | undefined;
}
