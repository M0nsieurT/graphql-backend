import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ElementCreateOrConnectWithoutElement_weakness_elementToelement_weakness_element_idInput } from "../inputs/ElementCreateOrConnectWithoutElement_weakness_elementToelement_weakness_element_idInput";
import { ElementCreateWithoutElement_weakness_elementToelement_weakness_element_idInput } from "../inputs/ElementCreateWithoutElement_weakness_elementToelement_weakness_element_idInput";
import { ElementWhereUniqueInput } from "../inputs/ElementWhereUniqueInput";

@TypeGraphQL.InputType("ElementCreateNestedOneWithoutElement_weakness_elementToelement_weakness_element_idInput", {
  isAbstract: true
})
export class ElementCreateNestedOneWithoutElement_weakness_elementToelement_weakness_element_idInput {
  @TypeGraphQL.Field(_type => ElementCreateWithoutElement_weakness_elementToelement_weakness_element_idInput, {
    nullable: true
  })
  create?: ElementCreateWithoutElement_weakness_elementToelement_weakness_element_idInput | undefined;

  @TypeGraphQL.Field(_type => ElementCreateOrConnectWithoutElement_weakness_elementToelement_weakness_element_idInput, {
    nullable: true
  })
  connectOrCreate?: ElementCreateOrConnectWithoutElement_weakness_elementToelement_weakness_element_idInput | undefined;

  @TypeGraphQL.Field(_type => ElementWhereUniqueInput, {
    nullable: true
  })
  connect?: ElementWhereUniqueInput | undefined;
}
