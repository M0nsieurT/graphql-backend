import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ElementCreateWithoutElement_weakness_elementToelement_weakness_weakness_element_idInput } from "../inputs/ElementCreateWithoutElement_weakness_elementToelement_weakness_weakness_element_idInput";
import { ElementWhereUniqueInput } from "../inputs/ElementWhereUniqueInput";

@TypeGraphQL.InputType("ElementCreateOrConnectWithoutElement_weakness_elementToelement_weakness_weakness_element_idInput", {
  isAbstract: true
})
export class ElementCreateOrConnectWithoutElement_weakness_elementToelement_weakness_weakness_element_idInput {
  @TypeGraphQL.Field(_type => ElementWhereUniqueInput, {
    nullable: false
  })
  where!: ElementWhereUniqueInput;

  @TypeGraphQL.Field(_type => ElementCreateWithoutElement_weakness_elementToelement_weakness_weakness_element_idInput, {
    nullable: false
  })
  create!: ElementCreateWithoutElement_weakness_elementToelement_weakness_weakness_element_idInput;
}
