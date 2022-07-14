import * as TypeGraphQL from "type-graphql";

export enum ElementScalarFieldEnum {
  id = "id",
  name = "name"
}
TypeGraphQL.registerEnumType(ElementScalarFieldEnum, {
  name: "ElementScalarFieldEnum",
  description: undefined,
});
