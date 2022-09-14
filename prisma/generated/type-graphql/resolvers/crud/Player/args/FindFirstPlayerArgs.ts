import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlayerOrderByWithRelationInput } from "../../../inputs/PlayerOrderByWithRelationInput";
import { PlayerWhereInput } from "../../../inputs/PlayerWhereInput";
import { PlayerWhereUniqueInput } from "../../../inputs/PlayerWhereUniqueInput";
import { PlayerScalarFieldEnum } from "../../../../enums/PlayerScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstPlayerArgs {
  @TypeGraphQL.Field(_type => PlayerWhereInput, {
    nullable: true
  })
  where?: PlayerWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PlayerOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PlayerOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PlayerWhereUniqueInput, {
    nullable: true
  })
  cursor?: PlayerWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PlayerScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "password"> | undefined;
}
