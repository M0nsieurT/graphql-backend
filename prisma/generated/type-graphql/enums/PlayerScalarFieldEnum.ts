import * as TypeGraphQL from "type-graphql";

export enum PlayerScalarFieldEnum {
  id = "id",
  name = "name",
  password = "password"
}
TypeGraphQL.registerEnumType(PlayerScalarFieldEnum, {
  name: "PlayerScalarFieldEnum",
  description: undefined,
});
