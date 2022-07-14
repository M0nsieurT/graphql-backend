import * as TypeGraphQL from "type-graphql";
import { Element } from "../../../models/Element";
import { Element_weakness } from "../../../models/Element_weakness";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Element_weakness)
export class Element_weaknessRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Element, {
    nullable: false
  })
  async element_elementToelement_weakness_element_id(@TypeGraphQL.Root() element_weakness: Element_weakness, @TypeGraphQL.Ctx() ctx: any): Promise<Element> {
    return getPrismaFromContext(ctx).element_weakness.findUnique({
      where: {
        element_id_weakness_element_id: {
          element_id: element_weakness.element_id,
          weakness_element_id: element_weakness.weakness_element_id,
        },
      },
    }).element_elementToelement_weakness_element_id({});
  }

  @TypeGraphQL.FieldResolver(_type => Element, {
    nullable: false
  })
  async element_elementToelement_weakness_weakness_element_id(@TypeGraphQL.Root() element_weakness: Element_weakness, @TypeGraphQL.Ctx() ctx: any): Promise<Element> {
    return getPrismaFromContext(ctx).element_weakness.findUnique({
      where: {
        element_id_weakness_element_id: {
          element_id: element_weakness.element_id,
          weakness_element_id: element_weakness.weakness_element_id,
        },
      },
    }).element_elementToelement_weakness_weakness_element_id({});
  }
}
