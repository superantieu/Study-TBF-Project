export const buttonStyles = {
    Button: {
        variants: {
            "no-hover": {
                _hover: {
                    boxShadow: "none",
                },
            },
            "no-radius": {
                borderRadius: "0px",
                bg: "transparent",
                _hover: {
                    bg: "#f6f6f6",
                },
            },
            "outline-no-radius": {
                borderRadius: "0px",
                bg: "transparent",
                border: "1px solid #fff",
                _hover: {
                    bg: "#f6f6f6",
                },
            },
            nav: {
                borderRadius: "5px",
                h: "40px",
                minW: "150px",
                bg: "transparent",
                fontSize: "18px",
                fontWeight: "600",
                fontStyle: "normal",
                lineHeight: "normal",
                _hover: {
                    color: "red",
                },
                _active: {
                    bg: "rgba(234.30, 234.30, 234.30, 0.90)",
                    color: "#3C3C3C",
                },
            },
            "slide-button": {
                border: "1px solid #fff",
                borderRadius: "50%",
                bg: "rgba(225, 225, 225, 0.30)",
                color: "red",
            },
            "slide-dot": {
                borderRadius: "50%",
                h: "4px",
                w: "4px",
                bg: "gray",
            },
        },
        sizes: {
            tiny: {
                w: "24px",
                h: "24px",
            },
        },
        baseStyle: {
            _focus: {
                boxShadow: "none",
            },
            _active: "none",
        },
    },
};
