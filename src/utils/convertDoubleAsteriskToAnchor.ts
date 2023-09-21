import theme from "@/data/theme";
import { MAP_COLOR_VARIANT_TO_TEXT } from "./mapVariants";

export default function convertDoubleAsteriskToAnchor(str: string) {
    return str.replace(
        /\*\*(http[s]?:\/\/[^\s]*)\*\*/g,
      `<a href="${str}" target="_blank" class="font-normal ${
          MAP_COLOR_VARIANT_TO_TEXT[theme.colors.primary]
        }">${str}</a>`
    );
}

