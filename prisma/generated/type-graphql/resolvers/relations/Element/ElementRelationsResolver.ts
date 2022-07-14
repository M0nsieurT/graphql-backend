import * as TypeGraphQL from "type-graphql";
import { Card } from "../../../models/Card";
import { Element } from "../../../models/Element";
import { Element_weakness } from "../../../models/Element_weakness";
import { ElementCardArgs } from "./args/ElementCardArgs";
import { ElementElement_weakness_elementToelement_weakness_element_idArgs } from "./args/ElementElement_weakness_elementToelement_weakness_element_idArgs";
import { ElementElement_weakness_elementToelement_weakness_weakness_element_idArgs } from "./args/ElementElement_weakness_elementToelement_weakness_weakness_element_idArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Element)
export class ElementRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Card], {
    nullable: false
  })
  async card(@TypeGraphQL.Root() element: Element, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ElementCardArgs): Promise<Card[]> {
    return getPrismaFromContext(ctx).element.findUnique({
      where: {
        id: element.id,
      },
    }).card(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Element_weakness], {
    nullable: false
  })
  async element_weakness_elementToelement_weakness_element_id(@TypeGraphQL.Root() element: Element, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ElementElement_weakness_elementToelement_weakness_element_idArgs): Promise<Element_weakness[]> {
    return getPrismaFromContext(ctx).element.findUnique({
      where: {
        id: element.id,
      },
    }).element_weakness_elementToelement_weakness_element_id(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Element_weakness], {
    nullable: false
  })
  async element_weakness_elementToelement_weakness_weakness_element_id(@TypeGraphQL.Root() element: Element, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ElementElement_weakness_elementToelement_weakness_weakness_element_idArgs): Promise<Element_weakness[]> {
    return getPrismaFromContext(ctx).element.findUnique({
      where: {
        id: element.id,
      },
    }).element_weakness_elementToelement_weakness_weakness_element_id(args);
  }
}
