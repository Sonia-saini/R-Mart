import { extendTheme } from "@chakra-ui/react";

const activeLabelStyles = {
  color: "blue.500",
  transform: "scale(0.85) translateY(-24px)"
};

export const theme = extendTheme({
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles
              }
            },
            "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label":
              {
                ...activeLabelStyles
              },
            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              fontSize: "sm",
              alignSelf: "normal",
              fontWeight: "normal",
              position: "absolute",
              pointerEvents: "none",
              color: "blackAlpha.600",
              backgroundColor: "white",
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: "left top"
            }
          }
        }
      }
    }
  }
});
